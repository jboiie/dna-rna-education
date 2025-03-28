import Head from 'next/head';
import styles from '../styles/Page.module.css';
import Section from '../components/Section';

export default function Mutations() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Genetic Variations and Mutations</title>
        <meta name="description" content="Different types of genetic mutations and their effects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Genetic Variations and Mutations</h1>
        
        <Section title="DNA Mutations">
          <ul>
            <li>Point mutations</li>
            <li>Insertions</li>
            <li>Deletions</li>
            <li>Chromosomal rearrangements</li>
          </ul>
        </Section>

        <Section title="RNA Modifications">
          <ul>
            <li>RNA editing</li>
            <li>Chemical modifications</li>
            <li>Regulatory changes</li>
          </ul>
        </Section>
      </main>
    </div>
  );
}