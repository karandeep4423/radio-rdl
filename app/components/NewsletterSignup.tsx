'use client';

import { useState } from 'react';
import styles from './NewsletterSignup.module.css';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
    setEmail('');
    
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className={styles.newsletter}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
            <path d="M40 8H8C5.79 8 4.02 9.79 4.02 12L4 36C4 38.21 5.79 40 8 40H40C42.21 40 44 38.21 44 36V12C44 9.79 42.21 8 40 8ZM40 16L24 26L8 16V12L24 22L40 12V16Z"/>
          </svg>
        </div>
        <div className={styles.text}>
          <h3>Newsletter RDL 68</h3>
          <p>Recevez nos actualités, programmes et podcasts directement dans votre boîte mail</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse email"
            className={styles.input}
            required
            disabled={status === 'loading' || status === 'success'}
          />
          <button 
            type="submit" 
            className={styles.button}
            disabled={status === 'loading' || status === 'success'}
          >
            {status === 'loading' ? (
              'Inscription...'
            ) : status === 'success' ? (
              <>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                Inscrit !
              </>
            ) : (
              "S'inscrire"
            )}
          </button>
        </div>
        {status === 'success' && (
          <p className={styles.successMessage}>
            Merci ! Vous êtes maintenant inscrit à notre newsletter.
          </p>
        )}
      </form>
    </div>
  );
}
