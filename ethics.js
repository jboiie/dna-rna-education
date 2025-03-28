import Head from 'next/head';
import styles from '../styles/Page.module.css';
import Section from '../components/Section';

export default function Ethics() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ethical Considerations</title>
        <meta name="description" content="Ethical considerations in genetic research and biotechnology." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Ethical Considerations</h1>
        
        <Section title="Ethical Considerations">
          <ul>
            <li>Genetic privacy</li>
            <li>Gene therapy</li>
            <li>Biotechnological advancements</li>
            <li>Moral implications of genetic research</li>
          </ul>
        </Section>
      </main>
    </div>
  );
}