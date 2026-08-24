import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>Daniel Szwarc · Montreal, QC · 2026</span>
        <span>daniszwarc.com</span>
      </div>
    </footer>
  );
}
