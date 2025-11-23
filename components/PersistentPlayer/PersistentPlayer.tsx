'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAudio } from '@/app/contexts/AudioContext';
import { usePlaybackState } from '@/app/contexts/PlaybackStateContext';
import styles from './PersistentPlayer.module.css';

export default function PersistentPlayer() {
  const { isPlaying, volume, isMuted, selectedStation, nowPlaying, togglePlay, setVolume, toggleMute } = useAudio();
  const { activePlayer } = usePlaybackState();

  // Hide if podcast player is active
  if (activePlayer === 'podcast') return null;

  return (
    <div className={styles.persistentPlayer}>
      <div className={styles.playerContent}>
        {/* Now Playing Info */}
        <div className={styles.nowPlaying}>
          <div className={styles.vinylContainer}>
            <div className={`${styles.vinyl} ${isPlaying ? styles.spinning : ''}`}>
              <svg viewBox="0 0 80 80" className={styles.vinylSvg}>
                <defs>
                  <linearGradient id="persistentVinylGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={selectedStation.color} />
                    <stop offset="100%" stopColor="#e11d48" />
                  </linearGradient>
                </defs>
                <circle cx="40" cy="40" r="38" fill="url(#persistentVinylGradient)" opacity="0.2"/>
                <circle cx="40" cy="40" r="32" fill="none" stroke={selectedStation.color} strokeWidth="1" opacity="0.4"/>
                <circle cx="40" cy="40" r="16" fill="#0A0A0A"/>
                <circle cx="40" cy="40" r="6" fill={selectedStation.color}/>
              </svg>
            </div>
          </div>
          <div className={styles.trackInfo}>
            <div className={styles.stationName} style={{ color: selectedStation.color }}>
              {selectedStation.name}
            </div>
            <div className={styles.trackTitle}>
              {nowPlaying.artist} {nowPlaying.title !== 'Chargement...' && `- ${nowPlaying.title}`}
            </div>
            <div className={styles.showName}>{nowPlaying.show}</div>
          </div>
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          {/* Play/Pause Button */}
          <button 
            className={styles.playButton}
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Lecture'}
          >
            {isPlaying ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="5" width="4" height="14" rx="1"/>
                <rect x="14" y="5" width="4" height="14" rx="1"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5L19 12L8 19V5Z"/>
              </svg>
            )}
          </button>

          {/* Volume Control */}
          <div className={styles.volumeControl}>
            <button 
              className={styles.muteButton}
              onClick={toggleMute}
              aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
            >
              {isMuted || volume === 0 ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                  <line x1="23" y1="9" x2="17" y2="15"/>
                  <line x1="17" y1="9" x2="23" y2="15"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
                </svg>
              )}
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className={styles.volumeSlider}
              aria-label="Volume"
            />
            <span className={styles.volumeValue}>{isMuted ? 0 : volume}%</span>
          </div>

          {/* Expand/Link to Radio Page */}
          <Link href="/radio-live" className={styles.expandButton}>
            <span className={styles.expandText}>En Direct</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
