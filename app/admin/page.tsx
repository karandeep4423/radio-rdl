'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function AdminDemo() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'podcasts' | 'radio'>('dashboard');

  return (
    <div className={styles.adminPage}>
      {/* Admin Header */}
      <div className={styles.adminHeader}>
        <div className="container">
          <div className={styles.headerContent}>
            <h1>Administration RDL 68</h1>
            <div className={styles.headerBadge}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 2C4.69 2 2 4.69 2 8C2 11.31 4.69 14 8 14C11.31 14 14 11.31 14 8C14 4.69 11.31 2 8 2ZM8 12C5.79 12 4 10.21 4 8C4 5.79 5.79 4 8 4C10.21 4 12 5.79 12 8C12 10.21 10.21 12 8 12Z"/>
              </svg>
              DEMO MODE
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.adminContent}>
          {/* Sidebar Navigation */}
          <aside className={styles.sidebar}>
            <nav className={styles.sidebarNav}>
              <button 
                className={`${styles.navButton} ${activeTab === 'dashboard' ? styles.active : ''}`}
                onClick={() => setActiveTab('dashboard')}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 3H9V11H3V3ZM11 3H17V7H11V3ZM11 9H17V17H11V9ZM3 13H9V17H3V13Z"/>
                </svg>
                Tableau de Bord
              </button>
              <button 
                className={`${styles.navButton} ${activeTab === 'podcasts' ? styles.active : ''}`}
                onClick={() => setActiveTab('podcasts')}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2C6.69 2 4 4.69 4 8C4 11.31 6.69 14 10 14C13.31 14 16 11.31 16 8C16 4.69 13.31 2 10 2ZM10 12C7.79 12 6 10.21 6 8C6 5.79 7.79 4 10 4C12.21 4 14 5.79 14 8C14 10.21 12.21 12 10 12Z"/>
                  <path d="M9 15H11V18H9V15Z"/>
                </svg>
                Gestion Podcasts
              </button>
              <button 
                className={`${styles.navButton} ${activeTab === 'radio' ? styles.active : ''}`}
                onClick={() => setActiveTab('radio')}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 10L9 8V12L7 10Z"/>
                  <path d="M11 10L13 8V12L11 10Z"/>
                </svg>
                Configuration Radio
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className={styles.mainContent}>
            {activeTab === 'dashboard' && <DashboardView />}
            {activeTab === 'podcasts' && <PodcastsView />}
            {activeTab === 'radio' && <RadioView />}
          </main>
        </div>
      </div>
    </div>
  );
}

function DashboardView() {
  return (
    <div className={styles.dashboard}>
      <h2>Tableau de Bord</h2>
      <p className={styles.description}>
        Vue d'ensemble de votre radio et statistiques clés
      </p>

      <div className={styles.statsGrid}>
        <div className="card">
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 4C9.4 4 4 9.4 4 16C4 22.6 9.4 28 16 28C22.6 28 28 22.6 28 16C28 9.4 22.6 4 16 4ZM16 26C10.5 26 6 21.5 6 16C6 10.5 10.5 6 16 6C21.5 6 26 10.5 26 16C26 21.5 21.5 26 16 26Z"/>
              </svg>
            </div>
            <div className={styles.statInfo}>
              <p className={styles.statLabel}>Auditeurs Actuels</p>
              <p className={styles.statValue}>1,234</p>
              <p className={styles.statChange}>+12% cette semaine</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 8C11.58 8 8 11.58 8 16C8 20.42 11.58 24 16 24C20.42 24 24 20.42 24 16C24 11.58 20.42 8 16 8Z"/>
              </svg>
            </div>
            <div className={styles.statInfo}>
              <p className={styles.statLabel}>Podcasts Publiés</p>
              <p className={styles.statValue}>156</p>
              <p className={styles.statChange}>+3 cette semaine</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                <path d="M26 6H6C4.9 6 4 6.9 4 8V24C4 25.1 4.9 26 6 26H26C27.1 26 28 25.1 28 24V8C28 6.9 27.1 6 26 6ZM26 24H6V8H26V24Z"/>
              </svg>
            </div>
            <div className={styles.statInfo}>
              <p className={styles.statLabel}>Téléchargements</p>
              <p className={styles.statValue}>45.2K</p>
              <p className={styles.statChange}>+28% ce mois</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.recentActivity}>
        <h3>Activité Récente</h3>
        <div className={styles.activityList}>
          {recentActivities.map((activity, index) => (
            <div key={index} className={styles.activityItem}>
              <div className={styles.activityIcon}>{activity.icon}</div>
              <div className={styles.activityInfo}>
                <p className={styles.activityText}>{activity.text}</p>
                <p className={styles.activityTime}>{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PodcastsView() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={styles.podcasts}>
      <div className={styles.pageHeader}>
        <h2>Gestion des Podcasts</h2>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="2"/>
          </svg>
          Ajouter un Podcast
        </button>
      </div>

      {showForm && (
        <div className="card" style={{ marginBottom: 'var(--spacing-xl)' }}>
          <div className={styles.form}>
            <h3>Nouveau Podcast</h3>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="title">Titre de l'épisode</label>
                <input 
                  type="text" 
                  id="title"
                  placeholder="Ex: Les Voix du Territoire - Épisode 13"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="platform">Plateforme</label>
                <select id="platform" className={styles.select}>
                  <option value="youtube">YouTube</option>
                  <option value="soundcloud">SoundCloud</option>
                  <option value="ausha">Ausha</option>
                </select>
              </div>

              <div className={styles.formGroup} style={{ gridColumn: '1 / -1' }}>
                <label htmlFor="url">URL du Podcast</label>
                <input 
                  type="url" 
                  id="url"
                  placeholder="https://..."
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup} style={{ gridColumn: '1 / -1' }}>
                <label htmlFor="description">Description</label>
                <textarea 
                  id="description"
                  rows={4}
                  placeholder="Description de l'épisode..."
                  className={styles.textarea}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="category">Catégorie</label>
                <select id="category" className={styles.select}>
                  <option value="">Sélectionner une catégorie</option>
                  <option value="actualites">Actualités & Société</option>
                  <option value="culture">Culture & Patrimoine</option>
                  <option value="local">Vie Locale</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="duration">Durée</label>
                <input 
                  type="text" 
                  id="duration"
                  placeholder="Ex: 45 min"
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.formActions}>
              <button className="btn btn-primary">Publier</button>
              <button className="btn btn-secondary" onClick={() => setShowForm(false)}>Annuler</button>
            </div>
          </div>
        </div>
      )}

      <div className={styles.podcastTable}>
        <h3>Podcasts Récents</h3>
        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <div>Titre</div>
            <div>Plateforme</div>
            <div>Date</div>
            <div>Vues</div>
            <div>Actions</div>
          </div>
          {mockPodcasts.map((podcast, index) => (
            <div key={index} className={styles.tableRow}>
              <div className={styles.podcastTitle}>{podcast.title}</div>
              <div>
                <span className={styles.platformTag}>{podcast.platform}</span>
              </div>
              <div className={styles.date}>{podcast.date}</div>
              <div className={styles.views}>{podcast.views}</div>
              <div className={styles.actions}>
                <button className={styles.iconButton}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M11 2L13 4L5 12H3V10L11 2Z"/>
                  </svg>
                </button>
                <button className={styles.iconButton}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M3 3H5V13H3V3ZM6 5L8 3H13C13.6 3 14 3.4 14 4V9C14 9.6 13.6 10 13 10H8L6 8V5Z"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RadioView() {
  return (
    <div className={styles.radio}>
      <h2>Configuration Radio en Direct</h2>
      <p className={styles.description}>
        Gérez les paramètres de diffusion et les informations en direct
      </p>

      <div className="card">
        <div className={styles.form}>
          <h3>Stream  Configuration</h3>
          <div className={styles.formGrid}>
            <div className={styles.formGroup} style={{ gridColumn: '1 / -1' }}>
              <label htmlFor="streamUrl">URL du Stream</label>
              <input 
                type="url" 
                id="streamUrl"
                defaultValue="https://stream.rdl68.fr/live"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="frequency">Fréquence FM</label>
              <input 
                type="text" 
                id="frequency"
                defaultValue="102.3 MHz"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="bitrate">Bitrate</label>
              <select id="bitrate" className={styles.select}>
                <option value="128">128 kbps</option>
                <option value="192">192 kbps</option>
                <option value="256">256 kbps</option>
                <option value="320">320 kbps</option>
              </select>
            </div>
          </div>

          <h3 style={{ marginTop: 'var(--spacing-xl)' }}>Informations En Direct</h3>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="showTitle">Émission en cours</label>
              <input 
                type="text" 
                id="showTitle"
                defaultValue="Émission du Matin"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="host">Animateur</label>
              <input 
                type="text" 
                id="host"
                defaultValue="Marie & Thomas"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup} style={{ gridColumn: '1 / -1' }}>
              <label htmlFor="nowPlaying">Diffusion actuelle</label>
              <input 
                type="text" 
                id="nowPlaying"
                defaultValue="Actualités locales et musique"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.formActions}>
            <button className="btn btn-primary">Enregistrer</button>
            <button className="btn btn-secondary">Réinitialiser</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mock Data
const recentActivities = [
  { icon: '🎙️', text: 'Nouveau podcast publié: "Les Voix du Territoire - Épisode 12"', time: 'Il y a 2 heures' },
  { icon: '📊', text: 'Le podcast "Culture & Patrimoine" a atteint 1000 écoutes', time: 'Il y a 4 heures' },
  { icon: '✏️', text: 'Programme de la semaine mis à jour', time: 'Hier' },
  { icon: '👥', text: '15 nouveaux abonnés à la newsletter', time: 'Il y a 2 jours' },
];

const mockPodcasts = [
  { title: 'Les Voix du Territoire - Épisode 12', platform: 'YouTube', date: '20 Nov', views: '1,234' },
  { title: 'Culture & Patrimoine - Découverte', platform: 'SoundCloud', date: '19 Nov', views: '856' },
  { title: 'Flash Info Hebdo - Semaine 47', platform: 'Ausha', date: '17 Nov', views: '1,567' },
  { title: 'Débat Citoyen - Transition écologique', platform: 'YouTube', date: '15 Nov', views: '2,103' },
];
