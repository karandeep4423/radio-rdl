import { podcastData } from '../data/podcastData';
import PodcastCard from '../components/PodcastCard';
import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Podcasts | RDL 68',
  description: 'Découvrez tous nos podcasts et émissions en replay',
};

export default function PodcastsPage() {
  const categories = Object.keys(podcastData);

  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Nos Podcasts</h1>
          <p className={styles.subtitle}>
            Découvrez toutes nos émissions en podcast
          </p>
        </div>
      </section>

      {/* Podcast Categories */}
      <div className="container">
        {categories.map((category) => (
          <section key={category} className={styles.category}>
            <h2 className={styles.categoryTitle}>{category}</h2>
            <div className={styles.grid}>
              {podcastData[category].map((podcast) => (
                <PodcastCard key={podcast.id} podcast={podcast} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
