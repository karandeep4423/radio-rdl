import { useState, useRef, useEffect } from 'react';
import { useAudio, RADIO_STATIONS } from '../contexts/AudioContext';
import styles from './StationSelector.module.css';

export default function StationSelector() {
  const { selectedStation, changeStation } = useAudio();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleStationSelect = (stationId: string) => {
    const station = RADIO_STATIONS.find(s => s.id === stationId);
    if (station) {
      changeStation(station);
    }
    setIsOpen(false);
  };

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button 
        className={`${styles.trigger} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select station"
        aria-expanded={isOpen}
      >
        <div className={styles.selectedStation}>
          <span className={styles.stationDot} style={{ background: selectedStation.color }}></span>
          <span>{selectedStation.name}</span>
        </div>
        <svg 
          className={styles.chevron} 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M4 6L8 10L12 6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
        {RADIO_STATIONS.map((station) => (
          <button
            key={station.id}
            className={`${styles.option} ${selectedStation.id === station.id ? styles.active : ''}`}
            onClick={() => handleStationSelect(station.id)}
          >
            <div className={styles.optionLogo} style={{ background: selectedStation.id === station.id ? station.color : undefined }}>
              {station.name.substring(0, 2).toUpperCase()}
            </div>
            <span>{station.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
