'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'today' | 'tomorrow'>('today');

  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={`${styles.heroTitle} fade-in`}>
                Votre Radio <span className={styles.accent}>Locale</span>
              </h1>
              <p className={`${styles.heroSubtitle} fade-in`}>
                Radio Dreyeckland Libre 68 - La voix du Haut-Rhin
              </p>
              <p className={styles.heroDescription}>
                Découvrez une programmation unique, des émissions locales passionnantes 
                et de la musique soigneusement sélectionnée. Écoutez-nous en direct 
                ou rattrapez vos émissions préférées en podcast.
              </p>
              <div className={styles.heroCta}>
                <Link href="/radio-live" className="btn btn-primary btn-lg">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4 3L16 10L4 17V3Z"/>
                  </svg>
                  Écouter en Direct
                </Link>
                <Link href="/podcasts" className="btn btn-secondary btn-lg">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2ZM10 16C6.69 16 4 13.31 4 10C4 6.69 6.69 4 10 4C13.31 4 16 6.69 16 10C16 13.31 13.31 16 10 16ZM10 6C7.79 6 6 7.79 6 10C6 12.21 7.79 14 10 14C12.21 14 14 12.21 14 10C14 7.79 12.21 6 10 6Z"/>
                  </svg>
                  Nos Podcasts
                </Link>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.liveCard}>
                <div className={styles.liveIndicatorLarge}>
                  <span className={styles.liveDot}></span>
                  <span className={styles.liveText}>EN DIRECT</span>
                </div>
                <div className={styles.nowPlaying}>
                  <div className={styles.albumArt}>
                    <svg viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="45" fill="url(#gradient)" />
                      <circle cx="50" cy="50" r="20" fill="#0A0A0A" />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#e11d48" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className={styles.trackInfo}>
                    <p className={styles.trackTitle}>Émission du Matin</p>
                    <p className={styles.trackArtist}>Avec Marie & Thomas</p>
                  </div>
                </div>
                <div className={styles.frequencyInfo}>
                  <p>FM 102.3 MHz · Digital · En ligne</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroBackground}></div>
      </section>

      {/* Featured Podcasts Carousel */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Podcasts à la Une</h2>
            <Link href="/podcasts" className={styles.seeMore}>
              Voir tous les podcasts
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </Link>
          </div>
          <div className={styles.carouselContainer}>
            <div className={styles.carousel}>
              {featuredPodcasts.map((podcast) => (
                <Link key={podcast.id} href={`/podcasts/${podcast.id}`} className={styles.carouselItem}>
                  <div className={styles.podcastCard}>
                    <div className={styles.podcastImage}>
                      <div className={styles.playOverlay}>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="white">
                          <circle cx="24" cy="24" r="24" fill="rgba(225, 29, 72, 0.9)" />
                          <path d="M18 14L32 24L18 34V14Z" fill="white"/>
                        </svg>
                      </div>
                      <img 
                        src={podcast.image} 
                        alt={podcast.title}
                        className={styles.podcastImagePlaceholder}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className={styles.podcastInfo}>
                      <h3>{podcast.title}</h3>
                      <p className={styles.podcastMeta}>
                        <span className={styles.duration}>{podcast.episodeCount} épisodes</span>
                        <span className={styles.date}>{podcast.lastPublished}</span>
                      </p>
                      <p className={styles.podcastExcerpt}>{podcast.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recently Played */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Récemment Diffusés</h2>
            <Link href="/radio-live" className={styles.seeMore}>
              Voir la playlist complète
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </Link>
          </div>
          <div className={styles.playlistGrid}>
            {recentlyPlayed.map((track, index) => (
              <div key={index} className={styles.trackCard}>
                <div className={styles.trackArtwork}>
                  <svg viewBox="0 0 80 80" className={styles.trackVinyl}>
                    <defs>
                      <linearGradient id={`track-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={track.color} />
                        <stop offset="100%" stopColor="#e11d48" />
                      </linearGradient>
                    </defs>
                    <circle cx="40" cy="40" r="38" fill={`url(#track-grad-${index})`} opacity="0.2"/>
                    <circle cx="40" cy="40" r="32" fill="none" stroke={track.color} strokeWidth="1" opacity="0.4"/>
                    <circle cx="40" cy="40" r="16" fill="#0A0A0A"/>
                    <circle cx="40" cy="40" r="6" fill={track.color}/>
                  </svg>
                </div>
                <div className={styles.trackDetails}>
                  <h4>{track.title}</h4>
                  <p className={styles.trackArtist}>{track.artist}</p>
                  <span className={styles.trackTime}>{track.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Actualités</h2>
            <Link href="/news" className={styles.seeMore}>
              Toutes les actualités
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </Link>
          </div>
          <div className={styles.newsGrid}>
            {newsArticles.map((article, index) => (
              <div key={index} className={styles.newsCard}>
                <div className={styles.newsImage}>
                  <span className={styles.newsCategory}>{article.category}</span>
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className={styles.newsImagePlaceholder}
                  />
                </div>
                <div className={styles.newsContent}>
                  <h3>{article.title}</h3>
                  <p className={styles.newsExcerpt}>{article.excerpt}</p>
                  <div className={styles.newsMeta}>
                    <span className={styles.newsDate}>{article.date}</span>
                    <a href="#" className={styles.newsReadMore}>Lire la suite →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Show Banner */}
      <section className={styles.featuredBanner}>
        <div className="container">
          <div className={styles.bannerContent}>
            <span className={styles.bannerLabel}>À LA UNE</span>
            <h2>Émission Spéciale: 30 Ans de RDL 68</h2>
            <p>
              Retour sur trois décennies de radio associative avec des témoignages exclusifs, 
              des archives sonores inédites et des invités surprises.
            </p>
            <div className={styles.bannerMeta}>
              <span>📅 Samedi 23 Novembre</span>
              <span>⏰ 20h00</span>
              <span>🎙️ En direct et en différé</span>
            </div>
            <Link href="/radio-live" className="btn btn-primary btn-lg">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 3L16 10L4 17V3Z"/>
              </svg>
              Écouter en Direct
            </Link>
          </div>
          <div className={styles.bannerVisual}>
            <div className={styles.bannerBadge}>
              <span className={styles.liveDot}></span>
              BIENTÔT
            </div>
          </div>
        </div>
      </section>

      {/* Program Schedule */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Programme</h2>
          </div>
          
          <div className={styles.scheduleTabs}>
            <button 
              className={`${styles.tabButton} ${activeTab === 'today' ? styles.active : ''}`}
              onClick={() => setActiveTab('today')}
            >
              Aujourd'hui
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'tomorrow' ? styles.active : ''}`}
              onClick={() => setActiveTab('tomorrow')}
            >
              Demain
            </button>
          </div>

          <div className={styles.schedule}>
            {(activeTab === 'today' ? todaySchedule : tomorrowSchedule).map((program, index) => (
              <div key={index} className={styles.scheduleItem}>
                <div className={styles.scheduleTime}>
                  <span>{program.time}</span>
                </div>
                <div className={styles.scheduleContent}>
                  <h4>{program.title}</h4>
                  <p>{program.host}</p>
                </div>
                {program.live && (
                  <div className={styles.scheduleLive}>
                    <span className={styles.liveDot}></span>
                    <span>En direct</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2>Soutenez RDL 68</h2>
            <p>
              RDL 68 est une radio associative indépendante. Votre soutien nous permet 
              de continuer à vous offrir une programmation de qualité et locale.
            </p>
            <div className={styles.ctaButtons}>
              <a href="#don" className="btn btn-primary btn-lg">
                Faire un Don
              </a>
              <a href="#adherer" className="btn btn-secondary btn-lg">
                Devenir Membre
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Mock Data
import { podcastData } from './data/podcastData';

// Get featured podcasts from the real data (first 5 from "Nos podcasts du moment")
const featuredPodcasts = podcastData["Nos podcasts du moment"].slice(0, 5).map(podcast => ({
  id: podcast.id,
  title: podcast.name,
  excerpt: podcast.title,
  image: podcast.thumbnails['350'] || podcast.thumbnails['600'] || '',
  episodeCount: podcast.episodeCounter,
  lastPublished: new Date(podcast.lastPublishedAt).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}));


const newsArticles = [
  {
    category: "Événement",
    title: "Festival de Musique: Programmation Dévoilée",
    excerpt: "Découvrez les artistes qui se produiront lors du festival annuel de la région.",
    date: "Il y a 2 heures",
    image: "/concert.jpg"
  },
  {
    category: "Culture",
    title: "Nouvelle Exposition au Musée Local",
    excerpt: "Une exposition unique sur l'histoire industrielle du Haut-Rhin ouvre ses portes.",
    date: "Il y a 5 heures",
    image: "/hero-bg.jpg"
  },
];

const todaySchedule = [
  { time: "06:00", title: "Le Réveil RDL", host: "Marie Dubois", live: true },
  { time: "09:00", title: "Musique Matinale", host: "Playlist RDL", live: false },
  { time: "12:00", title: "Journal de Midi", host: "Thomas Bernard", live: false },
  { time: "14:00", title: "Après-Midi Découverte", host: "Sophie Martin", live: false },
  { time: "18:00", title: "Culture & Débat", host: "Pierre Lefebvre", live: false },
  { time: "20:00", title: "Soirée Musicale", host: "Playlist RDL", live: false },
  { time: "22:00", title: "Nuit Blanche", host: "Mix RDL", live: false },
];

const tomorrowSchedule = [
  { time: "06:00", title: "Le Réveil RDL", host: "Marie Dubois", live: false },
  { time: "09:00", title: "Flash Info", host: "Rédaction", live: false },
  { time: "10:00", title: "Magazine Santé", host: "Dr. Michel", live: false },
  { time: "12:00", title: "Journal de Midi", host: "Thomas Bernard", live: false },
  { time: "14:00", title: "Dédicaces", host: "Sophie Martin", live: false },
  { time: "18:00", title: "Sport Dimanche", host: "Équipe Sport", live: false },
  { time: "20:00", title: "Jazz Club", host: "Jean-Paul", live: false },
];

const recentlyPlayed = [
  {
    title: "Stromae",
    artist: "Alors on danse",
    time: "Il y a 5 min",
    color: "#E2007A",
  },
  {
    title: "Daft Punk",
    artist: "One More Time",
    time: "Il y a 12 min",
    color: "#00D084",
  },
  {
    title: "Christine and the Queens",
    artist: "Tilted",
    time: "Il y a 18 min",
    color: "#7B61FF",
  },
  {
    title: "Phoenix",
    artist: "1901",
    time: "Il y a 25 min",
    color: "#FF6600",
  },
  {
    title: "M83",
    artist: "Midnight City",
    time: "Il y a 32 min",
    color: "#FF3838",
  },
  {
    title: "Justice",
    artist: "D.A.N.C.E.",
    time: "Il y a 40 min",
    color:  "#FF00D6",
  },
];
