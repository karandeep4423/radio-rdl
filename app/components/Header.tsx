'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAudio } from '../contexts/AudioContext';
import StationSelector from './StationSelector';
import SearchModal from './SearchModal';
import styles from './Header.module.css';
import { useTheme } from '../contexts/ThemeContext';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { nowPlaying } = useAudio();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const themeToggleTitle = theme === 'default' ? 'Mode Noir & Blanc' : 'Mode Couleur';
  const themeIcon = theme === 'default' ? (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );

  return (
    <>
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        {/* En ce moment bar */}
        <div className={styles.topBar}>
          <div className="container">
            <span>EN DIRECT: {nowPlaying.title} - {nowPlaying.artist}</span>
          </div>
        </div>

        {/* Main header */}
        <div className="container">
          <div className={styles.headerContent}>
            {/* Logo */}
            <Link href="/" className={styles.logo} onClick={() => setMobileMenuOpen(false)}>
              <div className={styles.logoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"/>
                  <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"/>
                  <circle cx="9" cy="12" r="1.5" fill="currentColor"/>
                  <circle cx="15" cy="12" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              <div className={styles.logoText}>
                <span className={styles.brandName}>RDL 68</span>
                <span className={styles.brandTagline}>RADIO DREYECKLAND LIBRE</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className={styles.desktopNav}>
              <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>
                Accueil
              </Link>
              <Link href="/radio-live" className={`${styles.navLink} ${pathname === '/radio-live' ? styles.active : ''}`}>
                <span className={styles.liveIndicator}></span>
                Direct
              </Link>
              <Link href="/podcasts" className={`${styles.navLink} ${pathname === '/podcasts' ? styles.active : ''}`}>
                Podcasts
              </Link>
              <Link href="/news" className={`${styles.navLink} ${pathname === '/news' ? styles.active : ''}`}>
                Actualités
              </Link>
              <Link href="/admin" className={`${styles.navLink} ${pathname === '/admin' ? styles.active : ''}`}>
                Admin
              </Link>
            </nav>

            {/* Actions */}
            <div className={styles.headerActions}>
              <button 
                className={styles.searchTrigger} 
                onClick={() => setSearchOpen(true)}
                aria-label="Rechercher"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button
                className={styles.searchTrigger}
                onClick={toggleTheme}
                aria-label="Changer de thème"
                title={themeToggleTitle}
              >
                {themeIcon}
              </button>

              <StationSelector />
              
              {/* Mobile Menu Toggle */}
              <button 
                className={styles.mobileMenuToggle}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12H21M3 6H21M3 18H21" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Navigation Overlay */}
      <div className={`${styles.mobileNavOverlay} ${mobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileNavPanel}>
          <div className={styles.mobileNavHeader}>
            <Link 
              href="/" 
              className={styles.mobileBranding}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className={styles.mobileBrandName}>RDL 68</span>
              <span className={styles.mobileBrandTagline}>RADIO DREYECKLAND LIBRE</span>
            </Link>

            <div className={styles.mobileUtilityButtons}>
              <button
                className={styles.mobileIconButton}
                onClick={toggleTheme}
                aria-label="Changer de thème"
                title={themeToggleTitle}
              >
                {themeIcon}
              </button>
              <button
                className={styles.mobileIconButton}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fermer le menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <nav className={styles.mobileNavLinks}>
            <Link 
              href="/" 
              className={`${styles.mobileNavLink} ${pathname === '/' ? styles.active : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              href="/radio-live" 
              className={`${styles.mobileNavLink} ${pathname === '/radio-live' ? styles.active : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Radio en Direct
            </Link>
            <Link 
              href="/podcasts" 
              className={`${styles.mobileNavLink} ${pathname === '/podcasts' ? styles.active : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Podcasts
            </Link>
            <Link 
              href="/admin" 
              className={`${styles.mobileNavLink} ${pathname === '/admin' ? styles.active : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Admin Demo
            </Link>
          </nav>

          <div className={styles.mobileNavActions}>
            <Link 
              href="/radio-live" 
              className="btn btn-primary btn-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Écouter le Direct
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
