import type {ReactNode} from 'react';
import styles from './Contact.module.css';

export default function Contact(): ReactNode {
  return (
    <section className={styles.contactSection}>
      <h2>Let's Connect</h2>
      <p>Interested in discussing ideas or just want to say hi? Feel free to reach out!</p>
      <div className={styles.contactLinks}>
        <a href="https://github.com/jeniferss" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/jeniferss" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
