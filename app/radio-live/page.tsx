'use client';

import { useState } from 'react';
import { useAudio, RADIO_STATIONS } from '@/app/contexts/AudioContext';
import styles from './page.module.css';

const CATEGORIES = ['Tous', 'Musique', 'Généraliste', 'Info', 'Culture', 'Jeune'];

export default function RadioLive() {
  const { isPlaying, volume, selectedStation, nowPlaying, togglePlay, setVolume, changeStation } = useAudio();
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  // Filter stations by category
  const filteredStations = selectedCategory === 'Tous' 
    ? RADIO_STATIONS 
    : RADIO_STATIONS.filter(s => s.category === selectedCategory);

  return (
    <div className={styles.radioLivePage}>
      {/* Hero Section with Player */}
      <section className={styles.playerSection}>
        <div className="container">
          <div className={styles.playerCard}>
            {/* Live Indicator */}
            <div className={styles.liveHeader}>
              <div className={styles.liveIndicator}>
                <span className={styles.liveDot}></span>
                <span className={styles.liveText}>EN DIRECT</span>
              </div>
              <div className={styles.frequency}>
                {selectedStation.name}
              </div>
            </div>

            {/* Now Playing */}
            <div className={styles.nowPlayingLarge}>
              <div className={styles.albumArtLarge}>
                <div className={styles.vinylAnimation}>
                  <svg viewBox="0 0 200 200" className={isPlaying ? styles.spinning : ''}>
                    <defs>
                      <linearGradient id="vinylGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF3B30" />
                        <stop offset="50%" stopColor="#FF2D55" />
                        <stop offset="100%" stopColor="#FF9500" />
                      </linearGradient>
                      <radialGradient id="vinylCenter">
                        <stop offset="0%" stopColor="#0A0A0A" />
                        <stop offset="100%" stopColor="#1C1C1E" />
                      </radialGradient>
                    </defs>
                    <circle cx="100" cy="100" r="95" fill="url(#vinylGradient)" opacity="0.2"/>
                    <circle cx="100" cy="100" r="85" fill="none" stroke="url(#vinylGradient)" strokeWidth="2" opacity="0.4"/>
                    <circle cx="100" cy="100" r="70" fill="none" stroke="url(#vinylGradient)" strokeWidth="1" opacity="0.3"/>
                    <circle cx="100" cy="100" r="55" fill="none" stroke="url(#vinylGradient)" strokeWidth="1" opacity="0.3"/>
                    <circle cx="100" cy="100" r="40" fill="url(#vinylCenter)"/>
                    <circle cx="100" cy="100" r="15" fill="#FF3B30"/>
                  </svg>
                </div>
              </div>
              <div className={styles.trackDetails}>
                <h1 className={styles.showTitle}>{nowPlaying.show}</h1>
                <p className={styles.showHost}>{selectedStation.name}</p>
                <p className={styles.currentTrack}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 2C4.69 2 2 4.69 2 8C2 11.31 4.69 14 8 14C11.31 14 14 11.31 14 8C14 4.69 11.31 2 8 2ZM8 12C5.79 12 4 10.21 4 8C4 5.79 5.79 4 8 4C10.21 4 12 5.79 12 8C12 10.21 10.21 12 8 12Z"/>
                  </svg>
                  {nowPlaying.artist} - {nowPlaying.title}
                </p>
              </div>
            </div>

            {/* Player Controls */}
            <div className={styles.playerControls}>
              <button 
                className={styles.playButton}
                onClick={togglePlay}
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

              <div className={styles.volumeControl}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 4L6 8H3V12H6L10 16V4ZM14 6C15.1 7.2 15.1 12.8 14 14M16 4C18 6.5 18 13.5 16 16"/>
                </svg>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className={styles.volumeSlider}
                  aria-label="Volume"
                />
                <span className={styles.volumeValue}>{volume}%</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className={styles.shareButtons}>
              <button className={styles.shareButton}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                  <path d="M14 11C13.4 11 12.9 11.2 12.5 11.5L6.4 8.2C6.5 8 6.5 7.7 6.5 7.5C6.5 7.3 6.5 7 6.4 6.8L12.5 3.5C12.9 3.8 13.4 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0C12.9 0 12 0.9 12 2C12 2.2 12 2.5 12.1 2.7L6 6C5.6 5.7 5.1 5.5 4.5 5.5C3.4 5.5 2.5 6.4 2.5 7.5C2.5 8.6 3.4 9.5 4.5 9.5C5.1 9.5 5.6 9.3 6 9L12.1 12.3C12 12.5 12 12.8 12 13C12 14.1 12.9 15 14 15C15.1 15 16 14.1 16 13C16 11.9 15.1 11 14 11Z"/>
                </svg>
                Partager
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Station Selector */}
      <section className={styles.stationSection}>
        <div className="container">
          <h2>Choisissez votre station</h2>
          <p className={styles.stationDescription}>
            Découvrez toutes les radios de Radio France - musique, info, culture et plus
          </p>

          {/* Category Filters */}
          <div className={styles.categoryFilters}>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Station Grid */}
          <div className={styles.stationGrid}>
            {filteredStations.map((station) => (
              <div
                key={station.id}
                className={`${styles.stationCard} ${selectedStation.id === station.id ? styles.activeStation : ''}`}
                onClick={() => changeStation(station)}
                style={{ borderColor: selectedStation.id === station.id ? station.color : 'transparent' }}
              >
                <div className={styles.stationHeader}>
                  <div 
                    className={styles.stationColor}
                    style={{ background: station.color }}
                  ></div>
                  <span className={styles.stationCategory}>{station.category}</span>
                </div>
                <h3 className={styles.stationName}>{station.name}</h3>
                <p className={styles.stationDesc}>{station.description}</p>
                {selectedStation.id === station.id && (
                  <div className={styles.nowPlayingBadge}>
                    <span className={styles.liveDot}></span>
                    En cours
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Schedule */}
      <section className={styles.scheduleSection}>
        <div className="container">
          <h2>Programme du Jour</h2>
          <div className={styles.scheduleGrid}>
            {todayPrograms.map((program, index) => (
              <div 
                key={index} 
                className={`${styles.programCard} ${program.current ? styles.currentProgram : ''}`}
              >
                <div className={styles.programTime}>
                  <span className={styles.timeLabel}>{program.time}</span>
                  {program.duration && (
                    <span className={styles.duration}>{program.duration}</span>
                  )}
                </div>
                <div className={styles.programInfo}>
                  <h3>{program.title}</h3>
                  <p className={styles.programHost}>{program.host}</p>
                  {program.description && (
                    <p className={styles.programDescription}>{program.description}</p>
                  )}
                </div>
                {program.current && (
                  <div className={styles.currentBadge}>
                    <span className={styles.liveDot}></span>
                    En cours
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Info */}
      <section className={styles.infoSection}>
        <div className="container">
          <div className="grid grid-3">
            <div className="card">
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M16 4C9.4 4 4 9.4 4 16C4 22.6 9.4 28 16 28C22.6 28 28 22.6 28 16C28 9.4 22.6 4 16 4ZM16 26C10.5 26 6 21.5 6 16C6 10.5 10.5 6 16 6C21.5 6 26 10.5 26 16C26 21.5 21.5 26 16 26Z"/>
                    <path d="M11 16L14 13V19L11 16Z"/>
                    <path d="M17 16L20 13V19L17 16Z"/>
                  </svg>
                </div>
                <h3>Streaming FIP</h3>
                <p className={styles.infoValue}>Radio France</p>
                <p className={styles.infoDescription}>Audio HLS en direct depuis FIP Radio</p>
              </div>
            </div>

            <div className="card">
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M26 6H6C4.9 6 4 6.9 4 8V24C4 25.1 4.9 26 6 26H26C27.1 26 28 25.1 28 24V8C28 6.9 27.1 6 26 6ZM26 24H6V8H26V24Z"/>
                    <path d="M16 12C14.9 12 14 12.9 14 14C14 15.1 14.9 16 16 16C17.1 16 18 15.1 18 14C18 12.9 17.1 12 16 12Z"/>
                    <path d="M20 18C20 16.9 18.2 16 16 16C13.8 16 12 16.9 12 18V20H20V18Z"/>
                  </svg>
                </div>
                <h3>Mise à jour</h3>
                <p className={styles.infoValue}>Temps réel</p>
                <p className={styles.infoDescription}>Métadonnées mises à jour toutes les 30 secondes</p>
              </div>
            </div>

            <div className="card">
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M26 6H6C4.9 6 4 6.9 4 8V24C4 25.1 4.9 26 6 26H26C27.1 26 28 25.1 28 24V8C28 6.9 27.1 6 26 6ZM26 10L16 16L6 10V8L16 14L26 8V10Z"/>
                  </svg>
                </div>
                <h3>API Publique</h3>
                <p className={styles.infoValue}>Radio France</p>
                <p className={styles.infoDescription}>Intégration via API officielle</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Mock Data
const todayPrograms = [
  {
    time: '06:00',
    duration: '3h',
    title: 'Le Réveil RDL',
    host: 'Marie Dubois',
    description: 'L\'actualité du jour, la météo, et votre musique préférée pour bien démarrer',
    current: true,
  },
  {
    time: '09:00',
    duration: '3h',
    title: 'Musique Matinale',
    host: 'Playlist RDL',
    description: 'Une sélection musicale éclectique pour accompagner votre matinée',
    current: false,
  },
  {
    time: '12:00',
    duration: '1h',
    title: 'Journal de Midi',
    host: 'Thomas Bernard',
    description: 'Le point sur l\'actualité locale et régionale',
    current: false,
  },
  {
    time: '13:00',
    duration: '5h',
    title: 'Après-Midi Découverte',
    host: 'Sophie Martin',
    description: 'Reportages, interviews et découvertes culturelles',
    current: false,
  },
  {
    time: '18:00',
    duration: '2h',
    title: 'Culture & Débat',
    host: 'Pierre Lefebvre',
    description: 'Discussions autour des enjeux culturels et sociaux',
    current: false,
  },
  {
    time: '20:00',
    duration: '4h',
    title: 'Soirée Musicale',
    host: 'Playlist RDL',
    description: 'Les meilleurs morceaux pour votre soirée',
    current: false,
  },
];
