import Image from 'next/image';
import Link from 'next/link';
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl?: string;
  link?: string;
}

export default function ArticleCard({
  title,
  excerpt,
  category,
  date,
  imageUrl,
  link = '#',
}: ArticleCardProps) {
  return (
    <Link href={link} className={styles.articleCard}>
      <div className={styles.imageContainer}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor" opacity="0.3">
              <path d="M50 10H10C8.9 10 8 10.9 8 12V48C8 49.1 8.9 50 10 50H50C51.1 50 52 49.1 52 48V12C52 10.9 51.1 10 50 10ZM48 46H12V14H48V46ZM35 32L28 41L23 35L16 44H44L35 32Z"/>
            </svg>
          </div>
        )}
        <div className={styles.imageOverlay} />
        <span className={styles.category}>{category}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <div className={styles.meta}>
          <span className={styles.date}>{date}</span>
          <span className={styles.readMore}>
            Lire la suite
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
