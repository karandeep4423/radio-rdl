'use client';

import { createContext, useContext, useState, useRef, ReactNode } from 'react';
import { Episode, Podcast } from '../data/podcastData';

interface PodcastPlayerContextType {
  currentEpisode: Episode | null;
  currentPodcast: Podcast | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playEpisode: (episode: Episode, podcast: Podcast) => void;
  togglePlayPause: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  skipForward: () => void;
  skipBackward: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const PodcastPlayerContext = createContext<PodcastPlayerContextType | undefined>(undefined);

export function PodcastPlayerProvider({ children }: { children: ReactNode }) {
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
  const [currentPodcast, setCurrentPodcast] = useState<Podcast | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playEpisode = (episode: Episode, podcast: Podcast) => {
    setCurrentEpisode(episode);
    setCurrentPodcast(podcast);
    setIsPlaying(true);
    
    // Play audio after state update
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 100);
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const seek = (time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const setVolume = (newVolume: number) => {
    if (!audioRef.current) return;
    audioRef.current.volume = newVolume;
    setVolumeState(newVolume);
  };

  const skipForward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 15, duration);
  };

  const skipBackward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 15, 0);
  };

  const value: PodcastPlayerContextType = {
    currentEpisode,
    currentPodcast,
    isPlaying,
    currentTime,
    duration,
    volume,
    playEpisode,
    togglePlayPause,
    seek,
    setVolume,
    skipForward,
    skipBackward,
    audioRef,
  };

  return (
    <PodcastPlayerContext.Provider value={value}>
      {children}
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        src={currentEpisode?.audioUrl}
      />
    </PodcastPlayerContext.Provider>
  );
}

export function usePodcastPlayer() {
  const context = useContext(PodcastPlayerContext);
  if (context === undefined) {
    throw new Error('usePodcastPlayer must be used within a PodcastPlayerProvider');
  }
  return context;
}
