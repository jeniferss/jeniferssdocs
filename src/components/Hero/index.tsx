import type {ReactNode} from 'react';
import styles from './Hero.module.css';

export default function Hero(): ReactNode {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.greeting}>Hey, I'm Jenifer</p>

        <h1 className={styles.heroTitle}>
          Building knowledge through technical learning
        </h1>

        <p className={styles.heroSubtitle}>
          A personal second brain where I document technical concepts, insights from books, and notes from my learning journey.
        </p>

        <div className={styles.heroActions}>
          <a href="/jeniferssdocs/docs/category/notes-from-books" className={styles.buttonPrimary}>
            Explore Notes
          </a>
          <a href="https://github.com/jeniferss" className={styles.buttonSecondary}>
            GitHub
          </a>
        </div>
      </div>

      <div className={styles.heroImage}>
        <img
          src="img/meprofileia.png"
          alt="Jenifer"
          loading="lazy"
        />
      </div>
    </section>
  );
}
