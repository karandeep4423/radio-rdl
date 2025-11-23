'use client';

import { usePodcastPlayer } from '../contexts/PodcastPlayerContext';
import { usePlaybackState } from '../contexts/PlaybackStateContext';
import styles from './PodcastPlayer.module.css';

export default function PodcastPlayer() {
  const {
    currentEpisode,
    currentPodcast,
    isPlaying,
    currentTime,
    duration,
    togglePlayPause,
    seek,
    skipForward,
    skipBackward,
  } = usePodcastPlayer();
  const { activePlayer } = usePlaybackState();

  // Don't render if radio is active
  if (activePlayer === 'radio') return null;

  // Don't render if no episode is loaded
  if (!currentEpisode || !currentPodcast) {
    return null;
  }

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    seek(newTime);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={styles.player}>
      <div className={styles.container}>
        {/* Episode Info */}
        <div className={styles.info}>
          <div className={styles.episodeTitle}>{currentEpisode.title}</div>
          <div className={styles.podcastName}>{currentPodcast.name}</div>
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          {/* Skip Backward Button */}
          <button 
            className={styles.skipButton}
            onClick={skipBackward}
            aria-label="Reculer de 15 secondes"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"/>
              <text x="6" y="16" fontSize="10" fill="white" fontWeight="bold">15</text>
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button 
            className={styles.playButton}
            onClick={togglePlayPause}
            aria-label={isPlaying ? 'Pause' : 'Lecture'}
          >
            {isPlaying ? (
              <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                <rect x="10" y="8" width="4" height="16" rx="1"/>
                <rect x="18" y="8" width="4" height="16" rx="1"/>
              </svg>
            ) : (
              <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                <path d="M10 8L24 16L10 24V8Z"/>
              </svg>
            )}
          </button>

          {/* Skip Forward Button */}
          <button 
            className={styles.skipButton}
            onClick={skipForward}
            aria-label="Avancer de 15 secondes"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/>
              <text x="12" y="16" fontSize="10" fill="white" fontWeight="bold">15</text>
            </svg>
          </button>

          {/* Time Display */}
          <div className={styles.time}>
            <span>{formatTime(currentTime)}</span>
            <span className={styles.separator}>/</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className={styles.progressContainer}>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className={styles.progressBar}
            style={{
              background: `linear-gradient(to right, #e11d48 0%, #e11d48 ${progress}%, rgba(255,255,255,0.1) ${progress}%, rgba(255,255,255,0.1) 100%)`
            }}
          />
        </div>
      </div>
    </div>
  );
}
