import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { SplitSection, SplitItem } from "./components/SplitList";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const projects: SplitItem[] = [
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
    tags: ["n8n", "Pinecone", "FastAPI", "Gmail OAuth"],
    outcome: "Production · trilingual · zero-downtime model swap",
  },
  {
    label: "Automation",
    year: "2023–present",
    title: "AlterEco Publishing Pipeline",
    description:
      "AI pipeline automating 40+ articles per issue from PDF to Drupal CMS for an economics cooperative. Claude Vision API + n8n orchestration; taxonomy matching with accent normalization. Delivered iteratively with the client.",
    tags: ["n8n", "Claude Vision", "Drupal", "Python"],
    outcome: "30 min → under 3 min per article · 10x+ efficiency gain",
  },
];

const experience: SplitItem[] = [
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

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <SplitSection id="projects" number="§1" title="Projects" items={projects} />
      <SplitSection id="experience" number="§2" title="Experience" items={experience} />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
}
