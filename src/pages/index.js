import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Section from '../components/Section';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DNA/RNA Education</title>
        <meta name="description" content="An immersive, scroll-based educational website about DNA and RNA." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>The Molecular Foundations of Life: DNA and RNA Explained</h1>
        <p className={styles.description}>Explore the world of molecular biology with interactive 3D models and animations.</p>
        
        <Section title="Introduction to Molecular Biology">
          <p>DNA (Deoxyribonucleic Acid) and RNA (Ribonucleic Acid) are fundamental molecules of life, serving as the blueprint and messenger of genetic information in all living organisms. These incredible molecular structures are responsible for storing, transmitting, and expressing genetic instructions that define the characteristics of every living thing.</p>
        </Section>

        <nav className={styles.nav}>
          <ul>
            <li><Link href="/dna">DNA: The Genetic Blueprint</Link></li>
            <li><Link href="/rna">RNA: The Genetic Messenger</Link></li>
            <li><Link href="/transcription-translation">Transcription and Translation</Link></li>
            <li><Link href="/mutations">Genetic Variations and Mutations</Link></li>
            <li><Link href="/applications">Technological Applications</Link></li>
            <li><Link href="/ethics">Ethical Considerations</Link></li>
          </ul>
        </nav>
      </main>
    </div>
  );
}
