import type { Metadata } from "next";
import styles from "../Alt.module.css";
import privacyStyles from "./Privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — Dani Szwarc",
  description: "Privacy policy for daniszwarc.com.",
};

const navLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#stack", label: "Stack" },
  { href: "/#contact", label: "Contact" },
];

const sections = [
  {
    label: "What this site collects",
    text: "This site uses Umami Analytics, a privacy-friendly, cookie-free analytics tool. Umami collects anonymous usage data including page views and referrer information. No personally identifiable information is collected. No cookies are set.",
  },
  {
    label: "Contact form",
    text: "This site does not have a contact form. If you reach out by email, your email address is used solely to respond to your message and is not shared with third parties.",
  },
  {
    label: "Third-party links",
    text: "This site links to GitHub, LinkedIn, and a downloadable CV. Once you leave this site, this privacy policy no longer applies.",
  },
  {
    label: "Changes",
    text: "This policy may be updated occasionally. The date at the top of this page reflects the most recent revision.",
  },
  {
    label: "Contact",
    text: "For any questions: dani@daniszwarc.com",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={`${styles.wrap} ${styles.navInner}`}>
          <a href="/" className={styles.navMark}>
            Dani Szwarc
          </a>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className={privacyStyles.hero}>
        <div className={styles.wrap}>
          <h1 className={privacyStyles.title}>Privacy Policy</h1>
          <p className={privacyStyles.updated}>Last updated: August 2026</p>
        </div>
      </section>

      <section className={styles.section} style={{ borderBottom: "none", paddingTop: 0 }}>
        <div className={styles.wrap}>
          {sections.map((s) => (
            <div className={privacyStyles.policySection} key={s.label}>
              <p className={privacyStyles.policyLabel}>{s.label}</p>
              <p className={styles.principle}>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`${styles.wrap} ${styles.footerInner}`}>
          <span>Daniel Szwarc · 2026</span>
          <a href="/privacy">Privacy Policy</a>
          <span>daniszwarc.com</span>
        </div>
      </footer>
    </div>
  );
}
