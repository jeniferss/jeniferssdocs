import type {ReactNode} from 'react';
import styles from './Projects.module.css';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({projects}: ProjectsProps): ReactNode {
  return (
    <section className={styles.projectsSection}>
      <h2>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            className={styles.projectCard}>
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.projectTags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.projectTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
