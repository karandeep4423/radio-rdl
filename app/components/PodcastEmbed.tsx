'use client';

import styles from './PodcastEmbed.module.css';

type PodcastPlatform = 'youtube' | 'soundcloud' | 'ausha';

interface PodcastEmbedProps {
  platform: PodcastPlatform;
  url: string;
  title: string;
  description?: string;
}

export default function PodcastEmbed({ platform, url, title, description }: PodcastEmbedProps) {
  const getEmbedUrl = () => {
    if (platform === 'youtube') {
      // Extract video ID from YouTube URL
      const videoId = url.includes('youtu.be') 
        ? url.split('youtu.be/')[1]?.split('?')[0]
        : url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    if (platform === 'soundcloud') {
      return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff3b30&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`;
    }
    
    if (platform === 'ausha') {
      return url; // Ausha provides direct embed URLs
    }
    
    return url;
  };

  const getPlatformIcon = () => {
    switch (platform) {
      case 'youtube':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      case 'soundcloud':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.051 0-.09.04-.099.098l-.135 1.31.135 1.28c.009.057.048.097.099.097.05 0 .09-.04.099-.099l.15-1.28-.165-1.31c0-.057-.045-.098-.09-.098m1.8.117c-.06 0-.106.048-.113.106l-.21 2.042.21 1.99c.007.058.052.106.112.106.061 0 .106-.048.114-.106l.23-1.99-.23-2.042c-.008-.058-.053-.106-.113-.106m.899.157c-.066 0-.114.052-.122.116l-.193 1.88.193 1.831c.008.064.056.115.122.115.06 0 .112-.052.118-.115l.211-1.831-.211-1.88c-.006-.064-.058-.116-.118-.116m.9.256c-.07 0-.122.054-.13.121l-.19 1.623.19 1.582c.008.066.06.12.13.12.066 0 .12-.054.13-.12l.21-1.582-.21-1.623c-.01-.067-.064-.121-.13-.121m.899.287c-.075 0-.133.058-.142.13l-.177 1.335.177 1.302c.009.072.067.13.142.13.07 0 .13-.058.14-.13l.193-1.302-.192-1.335c-.01-.072-.07-.13-.14-.13m.901.346c-.08 0-.14.062-.15.141l-.164.988.164.963c.01.08.07.142.15.142.075 0 .138-.062.148-.142l.18-.963-.18-.988c-.01-.08-.073-.141-.148-.141m.899.48c-.084 0-.15.068-.158.15l-.15.512.15.498c.008.082.074.15.158.15.08 0 .145-.068.155-.15l.165-.498-.165-.512c-.01-.082-.075-.15-.155-.15m.9.512l-.128.256.128.25c.01.086.077.155.163.155.082 0 .148-.069.159-.155l.138-.25-.138-.256c-.011-.086-.077-.155-.159-.155-.086 0-.153.069-.163.155m7.103-1.046c-.474 0-.87.338-.87.87l.9 6.158.9-6.158c0-.532-.396-.87-.87-.87m-1.761.228c-.464 0-.848.33-.848.848l.852 5.93.852-5.93c0-.518-.384-.848-.848-.848m-1.717.232c-.451 0-.83.323-.83.83l.83 5.698.83-5.698c0-.507-.379-.83-.83-.83m-1.674.232c-.442 0-.81.317-.81.81l.81 5.466.81-5.466c0-.493-.368-.81-.81-.81m-1.631.233c-.425 0-.788.31-.788.788l.788 5.233.788-5.233c0-.478-.363-.788-.788-.788m-1.584.24c-.414 0-.766.302-.766.766l.766 4.993.766-4.993c0-.464-.352-.766-.766-.766M9.645 11.3c-.407 0-.745.296-.745.745l.745 4.754.745-4.754c0-.449-.338-.745-.745-.745"/>
          </svg>
        );
      case 'ausha':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
        );
    }
  };

  return (
    <div className={styles.podcastEmbed}>
      <div className={styles.podcastHeader}>
        <div className={styles.podcastInfo}>
          <div className={styles.platformBadge}>
            {getPlatformIcon()}
            <span>{platform.toUpperCase()}</span>
          </div>
          <h3 className={styles.podcastTitle}>{title}</h3>
          {description && <p className={styles.podcastDescription}>{description}</p>}
        </div>
      </div>
      
      <div className={styles.embedContainer}>
        <iframe
          src={getEmbedUrl()}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.embedIframe}
          title={title}
        />
      </div>
    </div>
  );
}
