import styles from "./Stack.module.css";

const groups = [
  { title: "AI/LLM", items: "LangChain · LangGraph · RAG · pgvector · Agentic workflows · OpenAI · Anthropic" },
  { title: "Backend", items: "Python · FastAPI · Node.js · PHP · ColdFusion · SQL · PostgreSQL · MSSQL" },
  { title: "Frontend", items: "React · Next.js · TypeScript · JavaScript · React Native · Expo" },
  { title: "Infra", items: "Docker · Traefik · GitHub Actions · VPS · CI/CD · n8n" },
  { title: "Deep Learning", items: "PyTorch · fast.ai · ResNet · ViT · MIL · WSI analysis" },
  { title: "Languages", items: "English (fluent) · Spanish (fluent) · French (basic)" },
];

export default function Stack() {
  return (
    <section id="stack" className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <span className="sectionNumber">§3</span>
          <h2 className={styles.title}>Stack</h2>
        </div>
        <div className={styles.grid}>
          {groups.map((group) => (
            <div className={styles.group} key={group.title}>
              <p className={styles.groupTitle}>{group.title}</p>
              <p className={styles.items}>{group.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
