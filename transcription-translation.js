import Head from 'next/head';
import styles from '../styles/Page.module.css';
import Section from '../components/Section';

export default function TranscriptionTranslation() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Transcription and Translation</title>
        <meta name="description" content="Explaining the processes of transcription and translation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Transcription and Translation</h1>
        
        <Section title="Transcription Process">
          <ol>
            <li>DNA unwinds</li>
            <li>RNA polymerase reads DNA</li>
            <li>Complementary RNA strand created</li>
            <li>mRNA moves from nucleus to cytoplasm</li>
          </ol>
        </Section>

        <Section title="Translation Process">
          <ol>
            <li>mRNA arrives at ribosome</li>
            <li>tRNA brings amino acids</li>
            <li>Proteins assembled based on genetic instructions</li>
            <li>Completed protein released</li>
          </ol>
        </Section>
      </main>
    </div>
  );
}