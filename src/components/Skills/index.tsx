import type {ReactNode} from 'react';
import styles from './Skills.module.css';

interface SkillsData {
  [category: string]: string[];
}

interface SkillsProps {
  skills: SkillsData;
}

export default function Skills({skills}: SkillsProps): ReactNode {
  return (
    <section className={styles.skillsSection}>
      <h2>Skills & Technologies</h2>
      <p>
        This space is my ongoing effort to document what I learn, making it easier to revisit
        concepts and share knowledge with others.

        Whether you're looking for book notes, technical insights, or just want to explore
        different topics, I hope you find something valuable here.
    </p>
      <div className={styles.skillsGrid}>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className={styles.skillCategory}>
            <h3>{category}</h3>
            <div className={styles.skillTags}>
              {items.map((skill) => (
                <span key={skill} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
