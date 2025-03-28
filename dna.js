import Head from 'next/head';
import styles from '../styles/Page.module.css';
import Section from '../components/Section';

export default function DNA() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DNA: The Genetic Blueprint</title>
        <meta name="description" content="DNA structure, functions, and types." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>DNA: The Genetic Blueprint</h1>
        
        <Section title="Molecular Structure">
          <p>DNA is a complex molecule composed of two intertwined strands that form the iconic double helix. Each strand is made up of:</p>
          <ul>
            <li>Nucleotides: The basic building blocks of DNA</li>
            <li>Phosphate groups</li>
            <li>Deoxyribose sugar</li>
            <li>Nitrogenous bases: Adenine (A), Thymine (T), Guanine (G), and Cytosine (C)</li>
          </ul>

          <h3>Base Pairing Rules</h3>
          <ul>
            <li>Adenine (A) always pairs with Thymine (T)</li>
            <li>Guanine (G) always pairs with Cytosine (C)</li>
            <li>These specific pairings create the genetic code's fundamental stability</li>
          </ul>
        </Section>

        <Section title="DNA Functions">
          <h3>1. Genetic Information Storage</h3>
          <ul>
            <li>Stores hereditary information</li>
            <li>Contains instructions for protein synthesis</li>
            <li>Determines inherited characteristics</li>
          </ul>

          <h3>2. Replication Process</h3>
          <ul>
            <li>Self-replication during cell division</li>
            <li>Ensures genetic information is passed to new cells</li>
            <li>Maintains genetic consistency across generations</li>
          </ul>

          <h3>Replication Steps</h3>
          <ol>
            <li>DNA Unwinding</li>
            <li>Strand Separation</li>
            <li>Complementary Base Pairing</li>
            <li>New Strand Formation</li>
            <li>Proofreading and Repair</li>
          </ol>
        </Section>

        <Section title="Types of DNA">
          <ul>
            <li>Nuclear DNA</li>
            <li>Mitochondrial DNA</li>
            <li>Circular DNA in Prokaryotes</li>
            <li>Plasmid DNA</li>
          </ul>
        </Section>
      </main>
    </div>
  );
}