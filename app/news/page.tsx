import styles from './page.module.css';

// Mock Data for News
const ARTICLES = [
  {
    id: 1,
    category: "Événement",
    title: "Festival de Musique: Programmation Dévoilée",
    excerpt: "Découvrez les artistes qui se produiront lors du festival annuel de la région. Une édition qui promet d'être inoubliable.",
    date: "Il y a 2 heures",
    image: "/concert.jpg"
  },
  {
    id: 2,
    category: "Culture",
    title: "Nouvelle Exposition au Musée Local",
    excerpt: "Une exposition unique sur l'histoire industrielle du Haut-Rhin ouvre ses portes. Plongez dans le passé de notre région.",
    date: "Il y a 5 heures",
    image: "/hero-bg.jpg"
  },
  {
    id: 3,
    category: "Société",
    title: "Interview Exclusive: Le Maire s'exprime",
    excerpt: "Retrouvez notre entretien exclusif avec le maire sur les projets d'urbanisme à venir pour l'année 2026.",
    date: "Hier",
    image: "/studio.jpg"
  },
  {
    id: 4,
    category: "Sport",
    title: "Victoire Écrasante de l'Équipe Locale",
    excerpt: "Le club de football local a remporté une victoire décisive ce week-end, se rapprochant de la montée en division supérieure.",
    date: "Il y a 2 jours",
    image: "/concert.jpg"
  },
  {
    id: 5,
    category: "Musique",
    title: "Découverte: Le Nouvel Album de L'Artiste Local",
    excerpt: "Nous avons écouté pour vous le dernier opus de ce jeune talent de la région. Une pépite à ne pas manquer.",
    date: "Il y a 3 jours",
    image: "/hero-bg.jpg"
  },
  {
    id: 6,
    category: "Agenda",
    title: "Les Sorties du Week-end",
    excerpt: "Concerts, théâtres, expositions... Voici notre sélection des meilleures sorties à faire ce week-end en Alsace.",
    date: "Il y a 4 jours",
    image: "/studio.jpg"
  }
];

export default function NewsPage() {
  return (
    <div className="container">
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Actualités</h1>
          <p className={styles.subtitle}>
            Restez informé de tout ce qui se passe dans votre région et sur votre radio préférée.
          </p>
        </header>

        <div className={styles.grid}>
          {ARTICLES.map((article) => (
            <article key={article.id} className={styles.articleCard}>
              <div className={styles.imageContainer}>
                <img src={article.image} alt={article.title} className={styles.articleImage} />
              </div>
              <div className={styles.content}>
                <span className={styles.category}>{article.category}</span>
                <h2 className={styles.articleTitle}>{article.title}</h2>
                <p className={styles.excerpt}>{article.excerpt}</p>
                <div className={styles.meta}>
                  <span>{article.date}</span>
                  <span className={styles.readMore}>Lire l'article →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
