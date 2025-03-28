import Head from 'next/head';
import styles from '../styles/Page.module.css';
import Section from '../components/Section';

export default function Applications() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Technological Applications</title>
        <meta name="description" content="Modern research and applications of DNA and RNA technology." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Technological Applications</h1>
        
        <Section title="Modern Research">
          <ul>
            <li>CRISPR gene editing</li>
            <li>Personalized medicine</li>
            <li>Genetic disease research</li>
            <li>COVID-19 mRNA vaccines</li>
          </ul>
        </Section>
      </main>
    </div>
  );
}