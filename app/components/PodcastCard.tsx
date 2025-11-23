import Link from 'next/link';
import Image from 'next/image';
import styles from './PodcastCard.module.css';
import { Podcast } from '../data/podcastData';

interface PodcastCardProps {
  podcast: Podcast;
}

export default function PodcastCard({ podcast }: PodcastCardProps) {
  // Format the last published date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Aujourd'hui";
    if (diffDays === 1) return "Hier";
    if (diffDays < 7) return `Il y a ${diffDays} jours`;
    
    return date.toLocaleDateString('fr-FR', { 
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <Link href={`/podcasts/${podcast.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={podcast.thumbnails['350'] || podcast.thumbnails['600'] || ''}
          alt={podcast.name}
          width={350}
          height={350}
          className={styles.image}
        />
        <div className={styles.playOverlay}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="rgba(225, 29, 72, 0.95)" />
            <path d="M26 20L44 32L26 44V20Z" fill="white"/>
          </svg>
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{podcast.name}</h3>
        <p className={styles.description}>{podcast.title}</p>
        
        <div className={styles.meta}>
          <span className={styles.episodeCount}>
            {podcast.episodeCounter} épisode{podcast.episodeCounter > 1 ? 's' : ''}
          </span>
          <span className={styles.separator}>•</span>
          <span className={styles.lastPublished}>
            {formatDate(podcast.lastPublishedAt)}
          </span>
        </div>
      </div>
    </Link>
  );
}
