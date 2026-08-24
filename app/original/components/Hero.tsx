import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.inner}`}>
          <p className={styles.name}>Dani Szwarc</p>
          <p className={styles.eyebrow}>Montreal · AI Engineer · Full-Stack Developer</p>
          <h1 className={styles.headline}>
            I build AI systems, from idea to final product. I work best when I&apos;m close
            to the problem. Architecture, implementation, deploy, iterate with real users.
            The full loop.
          </h1>
          <p className={styles.subtext}>
            I&apos;ve spent two decades building enterprise software in environments where
            reliability isn&apos;t optional. Over the last few years I shifted focus to AI
            systems, not because it&apos;s trendy, but because that&apos;s where the hard
            problems are right now.
          </p>
          <p className={styles.subtext}>
            Most of my recent work sits at the intersection of document intelligence, RAG
            pipelines, and agentic automation. A recurring theme: AI systems that behave
            predictably under real operating conditions.
          </p>
          <div className={styles.ctas}>
            <a href="#contact" className={`${styles.cta} ${styles.primary}`}>
              Get in touch
            </a>
            <a href="#projects" className={`${styles.cta} ${styles.ghost}`}>
              View projects
            </a>
            <a
              href="/Daniel_Szwarc_CV.pdf"
              className={`${styles.cta} ${styles.ghost}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
      <div className="container">
        <div className={styles.meta}>
          <span className={styles.metaItem}>
            Location: <strong>Montreal, QC</strong>
          </span>
          <span className={styles.metaItem}>
            Email: <strong>dani@daniszwarc.com</strong>
          </span>
          <span className={styles.metaItem}>
            MSc AI: <strong>University of Liverpool, 2026</strong>
          </span>
          <span className={styles.metaItem}>
            Open to: <strong>Full-time · Contract</strong>
          </span>
        </div>
      </div>
    </>
  );
}
