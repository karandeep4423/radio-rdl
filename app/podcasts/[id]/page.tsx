'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { podcastData, mockEpisodes, Podcast } from '../../data/podcastData';
import { usePodcastPlayer } from '../../contexts/PodcastPlayerContext';
import styles from './page.module.css';

export default function PodcastDetailPage() {
  const params = useParams();
  const podcastId = params.id as string;
  const [searchQuery, setSearchQuery] = useState('');
  const { playEpisode } = usePodcastPlayer();

  // Find the podcast
  let podcast: Podcast | undefined;
  for (const category in podcastData) {
    const found = podcastData[category].find(p => p.id === podcastId);
    if (found) {
      podcast = found;
      break;
    }
  }

  if (!podcast) {
    return (
      <div className={styles.page}>
        <div className="container">
          <div className={styles.error}>
            <h1>Podcast non trouvé</h1>
            <p>Le podcast que vous recherchez n'existe pas.</p>
          </div>
        </div>
      </div>
    );
  }

  const episodes = mockEpisodes[podcastId] || [];
  const filteredEpisodes = episodes.filter(episode =>
    episode.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.layout}>
          {/* Sidebar - Podcast Info */}
          <aside className={styles.sidebar}>
            <div className={styles.podcastCard}>
              <div className={styles.coverImage}>
                <Image
                  src={podcast.thumbnails['600'] || podcast.thumbnails['350'] || ''}
                  alt={podcast.name}
                  width={600}
                  height={600}
                  className={styles.cover}
                />
              </div>
              
              <h1 className={styles.podcastTitle}>{podcast.name}</h1>
              <p className={styles.podcastDescription}>{podcast.title}</p>
              
              <div className={styles.actions}>
                <button className={styles.actionButton}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 3l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/>
                  </svg>
                  Add shortcut
                </button>
                <button className={styles.actionButton}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 0 0-2.977-2.63l-1.255 1.255a2 2 0 0 1 2.732 2.732l1.5-1.357zM14.64 11.18L9.416 6.241C8.862 5.65 8 5.97 8 6.762v6.476c0 .794.862 1.113 1.416.522l5.224-4.939c.624-.623.624-1.643 0-2.266z"/>
                    <circle cx="10" cy="10" r="9" stroke="currentColor" fill="none"/>
                  </svg>
                  Share
                </button>
              </div>

              <div className={styles.stats}>
                <div className={styles.stat}>
                  <div className={styles.statValue}>{podcast.episodeCounter}</div>
                  <div className={styles.statLabel}>Épisodes</div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content - Episodes */}
          <main className={styles.main}>
            <div className={styles.episodesHeader}>
              <h2 className={styles.episodesTitle}>Episodes</h2>
              <div className={styles.searchContainer}>
                <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search episodes"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
            </div>

            <div className={styles.episodesList}>
              {filteredEpisodes.length === 0 ? (
                <div className={styles.noEpisodes}>
                  <p>Aucun épisode trouvé.</p>
                </div>
              ) : (
                filteredEpisodes.map((episode) => (
                  <div key={episode.id} className={styles.episodeCard}>
                    <button
                      className={styles.playButton}
                      onClick={() => playEpisode(episode, podcast)}
                      aria-label="Lire l'épisode"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                    
                    <div className={styles.episodeContent}>
                      <h3 className={styles.episodeTitle}>{episode.title}</h3>
                      <div className={styles.episodeMeta}>
                        <span>{episode.publishedAt}</span>
                        <span className={styles.dot}>•</span>
                        <span>{episode.duration}</span>
                      </div>
                      <p className={styles.episodeDescription}>{episode.description}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
