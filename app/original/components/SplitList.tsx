import styles from "./SplitList.module.css";

export type SplitItem = {
  label: string;
  year: string;
  title: string;
  company?: string;
  description: string;
  tags?: string[];
  outcome?: string;
};

export function SplitSection({
  id,
  number,
  title,
  items,
}: {
  id: string;
  number: string;
  title: string;
  items: SplitItem[];
}) {
  return (
    <section id={id} className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <span className="sectionNumber">{number}</span>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div>
          {items.map((item) => (
            <div className={styles.row} key={item.title}>
              <div className={styles.left}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.year}>{item.year}</span>
              </div>
              <div className={styles.right}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                {item.company && <p className={styles.company}>{item.company}</p>}
                <p className={styles.desc}>{item.description}</p>
                {item.tags && (
                  <div className={styles.tags}>
                    {item.tags.map((tag) => (
                      <span className={styles.tag} key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {item.outcome && <p className={styles.outcome}>{item.outcome}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
