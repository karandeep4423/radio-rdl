'use client';

import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';

interface RadioStation {
  id: string;
  name: string;
  streamUrl: string;
  metadataId: number;
  category: string;
  description: string;
  color: string;
}

interface LiveMetadata {
  now?: {
    song?: {
      title?: string;
      interpreters?: string[];
      album?: string;
    };
    program?: {
      title?: string;
    };
  };
}

interface NowPlayingData {
  title: string;
  artist: string;
  show: string;
}

interface AudioContextType {
  isPlaying: boolean;
  volume: number;
  isMuted: boolean;
  selectedStation: RadioStation;
  currentStation: string;
  nowPlaying: NowPlayingData;
  togglePlay: () => void;
  pause: () => void;
  setVolume: (vol: number) => void;
  toggleMute: () => void;
  changeStation: (station: RadioStation) => void;
  switchStation: (streamUrl: string, name: string) => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const RADIO_STATIONS: RadioStation[] = [
  {
    id: 'rdl',
    name: 'RDL 68',
    streamUrl: 'https://stream.radiofrance.fr/fip/fip.m3u8', // Placeholder stream
    metadataId: 7, // Using FIP metadata for demo
    category: 'Locale',
    description: 'La voix du Haut-Rhin',
    color: '#e11d48',
  },
  {
    id: 'fip',
    name: 'FIP',
    streamUrl: 'https://stream.radiofrance.fr/fip/fip.m3u8',
    metadataId: 7,
    category: 'Musique',
    description: 'Musique éclectique et découvertes',
    color: '#E2007A',
  },
  {
    id: 'france-inter',
    name: 'France Inter',
    streamUrl: 'https://stream.radiofrance.fr/franceinter/franceinter.m3u8',
    metadataId: 1,
    category: 'Généraliste',
    description: 'Radio généraliste, info et culture',
    color: '#E2001A',
  },
  {
    id: 'franceinfo',
    name: 'franceinfo',
    streamUrl: 'https://stream.radiofrance.fr/franceinfo/franceinfo.m3u8',
    metadataId: 4,
    category: 'Info',
    description: 'Info en continu 24h/24',
    color: '#FF6600',
  },
  {
    id: 'france-culture',
    name: 'France Culture',
    streamUrl: 'https://stream.radiofrance.fr/franceculture/franceculture.m3u8',
    metadataId: 2,
    category: 'Culture',
    description: 'Débats, documentaires et création',
    color: '#7B61FF',
  },
  {
    id: 'france-musique',
    name: 'France Musique',
    streamUrl: 'https://stream.radiofrance.fr/francemusique/francemusique.m3u8',
    metadataId: 3,
    category: 'Musique',
    description: 'Musique classique et jazz',
    color: '#FF3838',
  },
  {
    id: 'mouv',
    name: "Mouv'",
    streamUrl: 'https://stream.radiofrance.fr/mouv/mouv.m3u8',
    metadataId: 6,
    category: 'Jeune',
    description: 'Hip-hop, rap et cultures urbaines',
    color: '#FF00D6',
  },
];

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider');
  }
  return context;
};

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(75);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedStation, setSelectedStation] = useState<RadioStation>(RADIO_STATIONS[0]);
  const [nowPlaying, setNowPlaying] = useState<NowPlayingData>({
    title: 'Chargement...',
    artist: RADIO_STATIONS[0].name,
    show: 'En direct',
  });
  const audioRef = useRef<HTMLAudioElement>(null);

  // Fetch live metadata from Radio France API
  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await fetch(
          `https://api.radiofrance.fr/livemeta/pull/${selectedStation.metadataId}`
        );
        const data: LiveMetadata = await response.json();

        if (data?.now) {
          const song = data.now.song;
          const program = data.now.program;

          setNowPlaying({
            title: song?.title || program?.title || 'Musique en direct',
            artist: song?.interpreters?.[0] || selectedStation.name,
            show: program?.title || `En direct sur ${selectedStation.name}`,
          });
        }
      } catch (error) {
        console.error('Failed to fetch metadata:', error);
        setNowPlaying({
          title: selectedStation.description,
          artist: selectedStation.name,
          show: 'En direct',
        });
      }
    };

    // Fetch immediately
    fetchMetadata();

    // Update every 30 seconds
    const interval = setInterval(fetchMetadata, 30000);

    return () => clearInterval(interval);
  }, [selectedStation]);

  // Update audio element volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
          console.error('Playback failed:', err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  // Dedicated pause function for external control
  const pause = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const setVolume = (vol: number) => {
    setVolumeState(vol);
    if (isMuted && vol > 0) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const changeStation = (station: RadioStation) => {
    const wasPlaying = isPlaying;
    setIsPlaying(false);
    setSelectedStation(station);
    
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      
      if (wasPlaying) {
        setTimeout(() => {
          audioRef.current?.play().then(() => {
            setIsPlaying(true);
          }).catch((err) => {
            console.error('Playback failed after station change:', err);
          });
        }, 100);
      }
    }
  };

  // Simple station switcher by URL
  const switchStation = (streamUrl: string, name: string) => {
    const station = RADIO_STATIONS.find(s => s.streamUrl === streamUrl);
    if (station) {
      changeStation(station);
    }
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        volume,
        isMuted,
        selectedStation,
        currentStation: selectedStation.streamUrl,
        nowPlaying,
        togglePlay,
        pause,
        setVolume,
        toggleMute,
        changeStation,
        switchStation,
        audioRef,
      }}
    >
      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={selectedStation.streamUrl} preload="none" />
      {children}
    </AudioContext.Provider>
  );
};

export { RADIO_STATIONS };
export type { RadioStation, NowPlayingData };
