import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.inner}`}>
          <p className={styles.eyebrow}>Montreal · AI Engineer · Full-Stack Developer</p>
          <h1 className={styles.headline}>
            I build AI systems that <em>work in production</em>, not just in demos.
          </h1>
          <p className={styles.subtext}>
            25+ years of enterprise delivery. MSc in Artificial Intelligence (University of
            Liverpool, 2026). I own products end to end — from architecture and API design to
            frontend, deployment, and iteration with real users.
          </p>
          <div className={styles.ctas}>
            <a href="#contact" className={`${styles.cta} ${styles.primary}`}>
              Get in touch
            </a>
            <a href="#projects" className={`${styles.cta} ${styles.ghost}`}>
              View projects
            </a>
            <a href="/Daniel_Szwarc_CV.pdf" className={`${styles.cta} ${styles.ghost}`}>
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
