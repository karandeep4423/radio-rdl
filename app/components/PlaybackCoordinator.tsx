'use client';

import { useEffect } from 'react';
import { useAudio } from '../contexts/AudioContext';
import { usePodcastPlayer } from '../contexts/PodcastPlayerContext';
import { usePlaybackState } from '../contexts/PlaybackStateContext';

/**
 * Component that coordinates between radio and podcast players
 * to ensure only one plays at a time
 */
export default function PlaybackCoordinator() {
  const radioPlayer = useAudio();
  const podcastPlayer = usePodcastPlayer();
  const { setActivePlayer } = usePlaybackState();

  // Pause radio when podcast starts playing
  useEffect(() => {
    if (podcastPlayer.isPlaying) {
      setActivePlayer('podcast');
      if (radioPlayer.isPlaying) {
        radioPlayer.pause();
      }
    }
  }, [podcastPlayer.isPlaying]);

  // Pause podcast when radio starts playing
  useEffect(() => {
    if (radioPlayer.isPlaying) {
      setActivePlayer('radio');
      if (podcastPlayer.isPlaying) {
        podcastPlayer.togglePlayPause();
      }
    }
  }, [radioPlayer.isPlaying]);

  // This component renders nothing - it's just for coordination
  return null;
}
