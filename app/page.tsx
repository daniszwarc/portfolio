import styles from "./Alt.module.css";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
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
  link?: { href: string; label: string };
};

const projects: Row[] = [
  {
    label: "MSc Research",
    year: "2024–present",
    title: "WorkflowSynth",
    description:
      "Dissertation project converting natural language descriptions into formally verified executable workflows using a two-layer DSL and LLM-guided iterative refinement. LangGraph state machine with Lark-based grammar, 25 constrained primitives, and a verify-then-repair loop targeting n8n and LangChain output.",
    tags: ["Python", "LangChain", "LangGraph", "PyYAML", "n8n"],
    outcome: "82/82 unit tests · formal verification · University of Liverpool",
    link: { href: "https://github.com/daniszwarc/workflowsynth", label: "View on GitHub →" },
  },
  {
    label: "Enterprise RAG",
    year: "2025–present",
    title: "APiWiki",
    description:
      "SOX-compliant internal knowledge platform for a Fortune 500 client. RAG-powered chat interface with on-premises LLM inference, Markdown-to-HTML pipeline, full audit log UI, and RBAC. Worked directly with internal stakeholders through iterative delivery cycles.",
    tags: ["Next.js", "FastAPI", "pgvector", "Docker/Traefik", "On-prem LLM"],
    outcome: "SOX-compliant · Fortune 500 · on-premises inference",
  },
  {
    label: "Clinical AI",
    year: "2026–present",
    title: "BeyondTheProtocol",
    description:
      "Production clinical AI platform processing 289+ anonymized medical documents into a unified intelligence dashboard with RAG-powered assistant, mandatory source citations, and 4-layer prompt injection defense.",
    tags: ["Next.js 15", "FastAPI", "PostgreSQL/pgvector", "Anthropic API", "Docker/Traefik"],
    outcome: "RBAC · audit log · on-prem VPS · bilingual EN/ES",
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
    year: "2026–present",
    title: "AlterEco Publishing Pipeline",
    description:
      "AI pipeline automating 40+ articles per issue from PDF to Drupal CMS for an economics cooperative. Claude Vision API + n8n orchestration; taxonomy matching with accent normalization. Delivered iteratively with the client.",
    tags: ["n8n", "Claude Vision", "Drupal", "JavaScript"],
    outcome: "30 min → under 3 min per article · 10x+ efficiency gain",
  },
  {
    label: "Personal Project",
    year: "2025–present",
    title: "FitTrack",
    description:
      "Full-stack mobile fitness tracking app with AI food label scanning (vision model), workout logging, and progress stats. Built end to end as a personal product.",
    tags: ["React Native", "Expo", "TypeScript", "Supabase", "AI Vision"],
    outcome: "Personal product · end-to-end ownership · AI vision integration",
  },
  {
    label: "Healthcare AI",
    year: "2025–present",
    title: "MedSynth",
    description:
      "Platform ingesting patient medical histories (PDFs) into structured clinical knowledge wikis using adversarial dual-model iteration (Claude Opus + GPT-4o) until clinical findings converge. Taken private; shared as architectural case study.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Next.js", "Docker"],
    outcome: "80% LLM cost reduction · adversarial dual-model · compliance-by-design",
  },
  {
    label: "Personal Project",
    year: "2025–present",
    title: "Lecteur FR",
    description:
      "Installable offline-capable PWA that extracts and reads French academic PDFs aloud. pdf.js handles client-side text extraction with heading detection based on font-size ratios. A FastAPI microservice on a self-managed VPS proxies extracted text to an LLM for semantic cleanup before playback via the browser's native Web Speech API, with real-time sentence-by-sentence highlighting.",
    tags: ["Vanilla JS", "pdf.js", "Web Speech API", "FastAPI", "Docker/Traefik", "NaN API"],
    outcome: "PWA installable · offline-capable · GitHub Pages + self-managed VPS",
    link: { href: "https://daniszwarc.github.io/lecteur-fr/", label: "View project →" },
  },
];

const principles = [
  {
    label: "Close to the problem.",
    text: "I stay close to the user through the entire delivery. The system has to fit how people actually work, and that only happens through iteration.",
  },
  {
    label: "Reliability over features.",
    text: "Audit logs, RBAC, prompt injection defense, anonymization pipelines. In the environments I work in, these are part of the architecture from day one.",
  },
  {
    label: "Production first.",
    text: "Every project I build runs on real infrastructure. Docker, Traefik, CI/CD, self-managed VPS. Deployed and maintained.",
  },
  {
    label: "Iterative with real users.",
    text: "Every project in this portfolio evolved through direct feedback cycles with the people who use it. That is just how good software gets built.",
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
      "Lead modernization of legacy systems for enterprise clients. Technical bridge between legacy business logic and modern stack — translating complex 4GL/COBOL workflows into PHP/JavaScript/SQL architectures.",
  },
];

const education: Row[] = [
  {
    label: "Expected 2026",
    year: "",
    title: "MSc in Artificial Intelligence (Expected 2026)",
    company: "University of Liverpool",
    description:
      "Dissertation: WorkflowSynth — LLM-guided programme synthesis with formal verification for enterprise workflows",
  },
  {
    label: "1999–2001",
    year: "",
    title: "Microcomputer Programming & Web Developer Certificates",
    company: "Centennial College, Toronto",
    description: "",
  },
];

const certifications = ["Agentic RAG Specialization · Coursera", "AI & Automation Specializations · Coursera / Udemy"];

const stackGroups = [
  { title: "AI / LLM", items: "LangChain · LangGraph · RAG · pgvector · Agentic workflows · OpenAI · Anthropic · n8n" },
  { title: "Production", items: "FastAPI · PostgreSQL · Docker · Traefik · CI/CD · GitHub Actions" },
  { title: "Frontend", items: "React · Next.js · TypeScript · JavaScript · React Native · Expo" },
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
                {row.link && (
                  <a
                    href={row.link.href}
                    className={styles.rowLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {row.link.label}
                  </a>
                )}
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
              <p className={styles.heroRole}>Montreal · AI Systems Engineer</p>
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
          <span className={styles.metaValue}>University of Liverpool (Expected 2026)</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Open to</span>
          <span className={styles.metaValue}>Full-time · Contract</span>
        </div>
      </div>

      <section id="how-i-work" className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>How I work</h2>
          </div>
          <div className={styles.principles}>
            {principles.map((p) => (
              <p className={styles.principle} key={p.label}>
                <strong className={styles.principleLabel}>{p.label}</strong> {p.text}
              </p>
            ))}
          </div>
        </div>
      </section>

      <Section id="projects" title="Projects" count="08 entries" rows={projects} />
      <Section id="experience" title="Experience" count="02 entries" rows={experience} />

      <section id="education" className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Education &amp; Certifications</h2>
            <span className={styles.sectionCount}>02 + 02</span>
          </div>
          <div>
            {education.map((edu, i) => (
              <div className={styles.row} key={edu.title}>
                <span className={styles.rowIndex}>{String(i + 1).padStart(2, "0")}</span>
                <div className={styles.rowMeta}>
                  <span className={styles.rowLabel}>{edu.label}</span>
                </div>
                <div className={styles.rowBody}>
                  <h3 className={styles.rowTitle}>{edu.title}</h3>
                  {edu.company && <p className={styles.rowCompany}>{edu.company}</p>}
                  {edu.description && <p className={styles.rowDesc}>{edu.description}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.certBlock}>
            <p className={styles.stackTitle}>Certifications</p>
            <ul className={styles.certList}>
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="stack" className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Stack</h2>
            <span className={styles.sectionCount}>04 groups</span>
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
          <span>Daniel Szwarc · 2026</span>
          <a href="/privacy">Privacy Policy</a>
          <span>daniszwarc.com</span>
        </div>
      </footer>
    </div>
  );
}
