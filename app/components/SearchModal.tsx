'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './SearchModal.module.css';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock Data for Search
const SEARCH_DATA = [
  { type: 'station', title: 'RDL 68', subtitle: 'Radio Dreyeckland Libre', image: null, url: '/radio-live' },
  { type: 'station', title: 'France Inter', subtitle: 'Généraliste', image: null, url: '/radio-live' },
  { type: 'station', title: 'FIP', subtitle: 'Musical', image: null, url: '/radio-live' },
  { type: 'podcast', title: 'Les Voix du Territoire', subtitle: 'Société', image: '/studio.jpg', url: '/podcasts' },
  { type: 'podcast', title: 'Culture & Patrimoine', subtitle: 'Histoire', image: '/hero-bg.jpg', url: '/podcasts' },
  { type: 'podcast', title: 'Sport Hebdo', subtitle: 'Sport', image: '/studio.jpg', url: '/podcasts' },
  { type: 'news', title: 'Festival de Musique', subtitle: 'Événement', image: '/concert.jpg', url: '/news' },
  { type: 'news', title: 'Nouvelle Exposition', subtitle: 'Culture', image: '/hero-bg.jpg', url: '/news' },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const filteredResults = query.trim() === '' 
    ? [] 
    : SEARCH_DATA.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.subtitle.toLowerCase().includes(query.toLowerCase())
      );

  const groupedResults = {
    station: filteredResults.filter(r => r.type === 'station'),
    podcast: filteredResults.filter(r => r.type === 'podcast'),
    news: filteredResults.filter(r => r.type === 'news'),
  };

  if (!isOpen) return null;

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.searchHeader}>
          <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input 
            ref={inputRef}
            type="text" 
            className={styles.searchInput} 
            placeholder="Rechercher..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={styles.closeButton} onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className={styles.resultsContainer}>
          {query.trim() === '' && (
            <div className={styles.noResults}>
              Commencez à taper pour rechercher...
            </div>
          )}

          {query.trim() !== '' && filteredResults.length === 0 && (
            <div className={styles.noResults}>
              Aucun résultat trouvé pour "{query}"
            </div>
          )}

          {groupedResults.station.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Radios</div>
              {groupedResults.station.map((result, index) => (
                <Link key={index} href={result.url} className={styles.resultItem} onClick={onClose}>
                  <div className={styles.resultImage} style={{ background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '10px', fontWeight: 'bold' }}>
                    {result.title.substring(0, 2).toUpperCase()}
                  </div>
                  <div className={styles.resultContent}>
                    <span className={styles.resultTitle}>{result.title}</span>
                    <span className={styles.resultSubtitle}>{result.subtitle}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {groupedResults.podcast.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Podcasts</div>
              {groupedResults.podcast.map((result, index) => (
                <Link key={index} href={result.url} className={styles.resultItem} onClick={onClose}>
                  {result.image ? (
                    <img src={result.image} alt={result.title} className={styles.resultImage} />
                  ) : (
                    <div className={styles.resultImage} />
                  )}
                  <div className={styles.resultContent}>
                    <span className={styles.resultTitle}>{result.title}</span>
                    <span className={styles.resultSubtitle}>{result.subtitle}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {groupedResults.news.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Actualités</div>
              {groupedResults.news.map((result, index) => (
                <Link key={index} href={result.url} className={styles.resultItem} onClick={onClose}>
                   {result.image ? (
                    <img src={result.image} alt={result.title} className={styles.resultImage} />
                  ) : (
                    <div className={styles.resultImage} />
                  )}
                  <div className={styles.resultContent}>
                    <span className={styles.resultTitle}>{result.title}</span>
                    <span className={styles.resultSubtitle}>{result.subtitle}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
