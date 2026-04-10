import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  const skills = {
    'Languages': ['Python', 'Javascript', 'Go', 'SQL'],
    'Cloud': ['AWS'],
    'Tools': ['Git', 'Docker', 'Kubernetes', 'Databricks'],
  };

  const projects = [
    {
      title: 'PoC: Authentication Environment',
      description: 'Proof of Concept for an authentication environment using Keycloak. Explores identity and access management solutions.',
      tags: ['Keycloak', 'Authentication', 'Security'],
      link: 'https://github.com/jeniferss/PoCAuth',
    },
    {
      title: 'Spotify Music Recommendations',
      description: 'Software engineering project to build a recommendation system for Spotify music.',
      tags: ['Software Engineering', 'Python'],
      link: 'https://github.com/jeniferss/DataEngineeringStudies/tree/feat/atividade02',
    },
    {
      title: 'Medallion Architecture with AWS S3',
      description: 'Data architecture implementation using the Medallion architecture pattern with AWS S3 for data lake storage and processing.',
      tags: ['AWS S3', 'Data Lake', 'Medallion Architecture', 'Spark', 'Airflow'],
      link: 'https://github.com/jeniferss/DataEngineeringStudies/tree/feat/atividade07',
    },
  ];

  return (
    <Layout
      title={`${siteConfig.title} - Technical Learning & Notes`}
      description="Personal documentation, book notes, and technical learning resources.">
      <main className={styles.main}>
        <Hero />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact />
      </main>
    </Layout>
  );
}
