import styles from "./Contact.module.css";

const blocks = [
  { label: "Email", value: "dani@daniszwarc.com", href: "mailto:dani@daniszwarc.com" },
  { label: "LinkedIn", value: "linkedin.com/in/daniszwarc", href: "https://linkedin.com/in/daniszwarc" },
  { label: "GitHub", value: "github.com/daniszwarc", href: "https://github.com/daniszwarc" },
  { label: "CV", value: "Download PDF", href: "/Daniel_Szwarc_CV.pdf" },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <span className="sectionNumber">§4</span>
          <h2 className={styles.title}>Contact</h2>
        </div>
        <div className={styles.grid}>
          {blocks.map((block) => (
            <a href={block.href} className={styles.block} key={block.label}>
              <span className={styles.label}>{block.label}</span>
              <span className={styles.value}>{block.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
