import Head from 'next/head';
import styles from '../styles/Page.module.css';
import Section from '../components/Section';

export default function RNA() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RNA: The Genetic Messenger</title>
        <meta name="description" content="RNA structure, functions, and types." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>RNA: The Genetic Messenger</h1>
        
        <Section title="Molecular Structure">
          <p>Unlike DNA's double helix, RNA is typically single-stranded with:</p>
          <ul>
            <li>Nucleotides composed of:</li>
            <ul>
              <li>Phosphate groups</li>
              <li>Ribose sugar</li>
              <li>Nitrogenous bases: Adenine (A), Uracil (U), Guanine (G), and Cytosine (C)</li>
            </ul>
          </ul>

          <h3>Key Differences from DNA</h3>
          <ul>
            <li>Contains Uracil instead of Thymine</li>
            <li>Single-stranded structure</li>
            <li>More flexible and less stable</li>
            <li>Primarily involved in protein synthesis</li>
          </ul>
        </Section>

        <Section title="Types of RNA">
          <h3>1. Messenger RNA (mRNA)</h3>
          <ul>
            <li>Carries genetic instructions from DNA</li>
            <li>Serves as a template for protein synthesis</li>
            <li>Transient and rapidly changing</li>
          </ul>

          <h3>2. Transfer RNA (tRNA)</h3>
          <ul>
            <li>Transports amino acids during protein synthesis</li>
            <li>Interprets genetic code</li>
            <li>Helps in protein formation</li>
          </ul>

          <h3>3. Ribosomal RNA (rRNA)</h3>
          <ul>
            <li>Structural component of ribosomes</li>
            <li>Assists in protein synthesis</li>
            <li>Forms the cellular protein-making machinery</li>
          </ul>

          <h3>4. Small Nuclear RNA (snRNA)</h3>
          <ul>
            <li>Involved in gene splicing</li>
            <li>Helps modify RNA before protein production</li>
          </ul>

          <h3>5. MicroRNA (miRNA)</h3>
          <ul>
            <li>Regulates gene expression</li>
            <li>Controls protein production</li>
            <li>Plays crucial role in cellular processes</li>
          </ul>
        </Section>

        <Section title="RNA Functions">
          <h3>1. Protein Synthesis</h3>
          <ul>
            <li>Transcribes DNA instructions</li>
            <li>Translates genetic code into proteins</li>
            <li>Essential for cellular function</li>
          </ul>

          <h3>2. Gene Regulation</h3>
          <ul>
            <li>Controls gene expression</li>
            <li>Modifies cellular responses</li>
            <li>Adapts to environmental changes</li>
          </ul>
        </Section>
      </main>
    </div>
  );
}
