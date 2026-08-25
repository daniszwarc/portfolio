import styles from "./Alt.module.css";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

type Row = {
  label: string;
  year: string;
  title: string;
  company?: string;
  description: string;
  tags?: string[];
  outcome?: string;
};

const projects: Row[] = [
  {
    label: "Clinical AI",
    year: "2024–present",
    title: "BeyondTheProtocol",
    description:
      "Private medical intelligence platform for a patient with ultra-rare metastatic cancer. 289+ anonymized clinical documents processed into a unified bilingual dashboard — lab trends, PET-SUV tracking, liquid biopsy panels, and a RAG-powered AI assistant with mandatory source citations and 4-layer prompt injection defense.",
    tags: ["Next.js 15", "FastAPI", "PostgreSQL/pgvector", "Anthropic API", "Docker/Traefik"],
    outcome: "RBAC · audit log · on-prem VPS · bilingual EN/ES",
  },
  {
    label: "Enterprise RAG",
    year: "2024–present",
    title: "APiWiki",
    description:
      "SOX-compliant internal knowledge platform for a Fortune 500 client. RAG-powered chat interface with on-premises LLM inference, Markdown-to-HTML pipeline, full audit log UI, and RBAC. Worked directly with internal stakeholders through iterative delivery cycles.",
    tags: ["Next.js", "FastAPI", "pgvector", "Docker", "On-prem LLM"],
    outcome: "SOX-compliant · Fortune 500 · on-premises inference",
  },
  {
    label: "MSc Research",
    year: "2024–2026",
    title: "WorkflowSynth",
    description:
      "Dissertation project converting natural language descriptions into formally verified executable workflows using a two-layer DSL and LLM-guided iterative refinement. LangGraph state machine with Lark-based grammar, 25 constrained primitives, and a verify-then-repair loop targeting n8n and LangChain output.",
    tags: ["Python", "LangChain", "LangGraph", "Lark", "n8n"],
    outcome: "82/82 unit tests · formal verification · University of Liverpool",
  },
  {
    label: "AI Agent",
    year: "2024–present",
    title: "Soccer Verdun Email Agent",
    description:
      "Multilingual AI email agent for a Montreal community soccer club. Automates responses to player and parent inquiries in EN/FR/ES using RAG over club documents. OAuth-authenticated Gmail integration deployed in production.",
    tags: ["n8n", "Pinecone", "Gmail OAuth", "NaN.builders/qwen3.6"],
    outcome: "Production · trilingual · zero-downtime model swap",
  },
  {
    label: "Automation",
    year: "2023–present",
    title: "AlterEco Publishing Pipeline",
    description:
      "AI pipeline automating 40+ articles per issue from PDF to Drupal CMS for an economics cooperative. Claude Vision API + n8n orchestration; taxonomy matching with accent normalization. Delivered iteratively with the client.",
    tags: ["n8n", "Claude Vision", "Drupal", "JavaScript"],
    outcome: "30 min → under 3 min per article · 10x+ efficiency gain",
  },
];

const experience: Row[] = [
  {
    label: "2006–present",
    year: "",
    title: "Independent Consulting",
    company: "Full-stack delivery, AI solutions architecture · Montreal",
    description:
      "End-to-end product delivery for enterprise clients across healthcare, financial services, and manufacturing. Built a mobile-first PWA for on-site nurses (ColdFusion/REST/MSSQL), a medical rehabilitation billing system (60% reduction in manual processing), and an enterprise ticketing system (40% reduction in cross-department resolution time).",
  },
  {
    label: "2014–present",
    year: "",
    title: "AI Integration & Legacy Modernization Specialist",
    company: "Fresche Solutions · Montreal",
    description:
      "Lead modernization of IBM i legacy systems for enterprise clients. Technical bridge between legacy business logic and modern stack — translating complex 4GL/COBOL workflows into Python/SQL architectures.",
  },
  {
    label: "2024–2026",
    year: "",
    title: "MSc in Artificial Intelligence",
    company: "University of Liverpool · England",
    description:
      "Dissertation: WorkflowSynth — LLM-guided programme synthesis with formal verification for enterprise workflows. Advisor: Kathleen Kelm.",
  },
];

const stackGroups = [
  { title: "AI/LLM", items: "LangChain · LangGraph · RAG · pgvector · Agentic workflows · OpenAI · Anthropic" },
  { title: "Backend", items: "Python · FastAPI · Node.js · PHP · ColdFusion · SQL · PostgreSQL · MSSQL" },
  { title: "Frontend", items: "React · Next.js · TypeScript · JavaScript · React Native · Expo" },
  { title: "Infra", items: "Docker · Traefik · GitHub Actions · VPS · CI/CD · n8n" },
  { title: "Deep Learning", items: "PyTorch · fast.ai · ResNet · ViT · MIL · WSI analysis" },
  { title: "Languages", items: "English (fluent) · Spanish (fluent) · French (basic)" },
];

const contactBlocks = [
  { label: "Email", value: "dani@daniszwarc.com", href: "mailto:dani@daniszwarc.com" },
  { label: "LinkedIn", value: "linkedin.com/in/daniszwarc", href: "https://linkedin.com/in/daniszwarc", external: true },
  { label: "GitHub", value: "github.com/daniszwarc", href: "https://github.com/daniszwarc", external: true },
  { label: "CV", value: "Download PDF", href: "/Daniel_Szwarc_CV.pdf", external: true },
];

function Section({
  id,
  title,
  count,
  rows,
}: {
  id: string;
  title: string;
  count: string;
  rows: Row[];
}) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <span className={styles.sectionCount}>{count}</span>
        </div>
        <div>
          {rows.map((row, i) => (
            <div className={styles.row} key={row.title}>
              <span className={styles.rowIndex}>{String(i + 1).padStart(2, "0")}</span>
              <div className={styles.rowMeta}>
                <span className={styles.rowLabel}>{row.label}</span>
                {row.year && <span className={styles.rowYear}>{row.year}</span>}
              </div>
              <div className={styles.rowBody}>
                <h3 className={styles.rowTitle}>{row.title}</h3>
                {row.company && <p className={styles.rowCompany}>{row.company}</p>}
                <p className={styles.rowDesc}>{row.description}</p>
                {row.tags && (
                  <div className={styles.tags}>
                    {row.tags.map((tag) => (
                      <span className={styles.tag} key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {row.outcome && <p className={styles.outcome}>{row.outcome}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AltHome() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={`${styles.wrap} ${styles.navInner}`}>
          <a href="#" className={styles.navMark}>
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

      <section className={styles.hero}>
        <span className={styles.heroWatermark} aria-hidden="true">
          AI
        </span>
        <div className={styles.wrap}>
          <div className={styles.heroGrid}>
            <div />
            <div>
              <p className={styles.heroName}>Dani Szwarc</p>
              <p className={styles.heroRole}>Montreal · AI Engineer · Full-Stack Developer</p>
              <h1 className={styles.headline}>
                I build AI systems, from idea to final product. I work best when
                I&apos;m close to the problem. Architecture, implementation, deploy,
                iterate with real users. The full loop.
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
          </div>
        </div>
      </section>

      <div className={styles.meta} style={{ borderBottom: "3px solid var(--line)" }}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Location</span>
          <span className={styles.metaValue}>Montreal, QC</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Email</span>
          <span className={styles.metaValue}>dani@daniszwarc.com</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>MSc AI</span>
          <span className={styles.metaValue}>University of Liverpool, 2026</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Open to</span>
          <span className={styles.metaValue}>Full-time · Contract</span>
        </div>
      </div>

      <Section id="projects" title="Projects" count="05 entries" rows={projects} />
      <Section id="experience" title="Experience" count="03 entries" rows={experience} />

      <section id="stack" className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Stack</h2>
            <span className={styles.sectionCount}>06 groups</span>
          </div>
          <div className={styles.stackGrid}>
            {stackGroups.map((group) => (
              <div className={styles.stackGroup} key={group.title}>
                <p className={styles.stackTitle}>{group.title}</p>
                <p className={styles.stackItems}>{group.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.section} style={{ borderBottom: "none" }}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <span className={styles.sectionCount}>04 channels</span>
          </div>
          <div className={styles.contactGrid}>
            {contactBlocks.map((block) => (
              <a
                href={block.href}
                className={styles.contactBlock}
                key={block.label}
                {...(block.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className={styles.contactLabel}>{block.label}</span>
                <span className={styles.contactValue}>{block.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`${styles.wrap} ${styles.footerInner}`}>
          <span>Daniel Szwarc · Montreal, QC · 2026</span>
          <span>daniszwarc.com</span>
        </div>
      </footer>
    </div>
  );
}
