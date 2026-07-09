import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Play,
  FileSpreadsheet,
  Code2,
  Database,
  BarChart3,
  Presentation,
  ArrowRight,
  Lightbulb,
  Globe,
  Award,
} from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import madeEasyImage from "@assets/image_1768021374263.png";
import bypImage from "@assets/image_1767853449347.png";
import mirandaImage from "@assets/image_1767853503776.png";
import laMetaImage from "@assets/academia_la_meta_hero.png";

const quickStats = [
  { value: "5-Stage", label: "Data Pipeline", icon: Database },
  { value: "7+", label: "Projects Completed", icon: Award },
];

const keyTakeaways = [
  "End-to-end ownership — from raw data to an executive-ready presentation.",
  "SQL and Python used together to clean, query, and structure real transactional data.",
  "Dashboards and reporting designed for non-technical stakeholders to act on quickly.",
];

const pipelineSteps = [
  {
    step: 1,
    title: "Data Collection",
    tool: "Excel",
    icon: FileSpreadsheet,
    color: "bg-green-500",
    description: "Raw data gathering",
  },
  {
    step: 2,
    title: "Data Cleaning",
    tool: "Python",
    icon: Code2,
    color: "bg-yellow-500",
    description: "Transform & prepare",
  },
  {
    step: 3,
    title: "Data Analysis",
    tool: "SQL",
    icon: Database,
    color: "bg-blue-500",
    description: "Query & explore",
  },
  {
    step: 4,
    title: "Visualization",
    tool: "Power BI",
    icon: BarChart3,
    color: "bg-amber-500",
    description: "Interactive dashboard",
  },
  {
    step: 5,
    title: "Presentation",
    tool: "PowerPoint",
    icon: Presentation,
    color: "bg-red-500",
    description: "Final insights",
  },
];

const webProjects = [
  {
    id: 2,
    name: "Academia_MadeEasy - WebSite",
    client: "Academia Made Easy",
    date: "March 2025",
    description: "A website developed for MadeEasy, an academy for engineering students at PUCP, focused on showcasing the courses offered and facilitating contact between students and instructors via a WhatsApp link.",
    tech: ["HTML", "CSS", "AI Tools"],
    image: madeEasyImage,
    hasDemo: false,
    hasLive: true,
    liveUrl: "https://www.asesoriamadeeasy.com/#",
  },
  {
    id: 3,
    name: "B&P_Abogados - WEBSITE",
    client: "B&P Abogados",
    date: "January 2025",
    description: "Corporate website for B&P Abogados, a law firm specialized in education law, with extensive experience advising universities, institutes, and schools.",
    tech: ["HTML", "CSS", "AI Tools"],
    image: bypImage,
    hasDemo: false,
    hasLive: true,
    liveUrl: "https://www.bypabogados.com/",
  },
  {
    id: 4,
    name: "Miranda&Amado_Abogados - WEBSITE",
    client: "Miranda&Amado_Abogados",
    date: "October 2024",
    description: "Institutional website for a Peruvian law firm, designed to convey credibility and professional excellence. The platform presents the firm's culture, expertise, and legal team through a clean and structured layout.",
    tech: ["HTML", "CSS", "AI Tools"],
    image: mirandaImage,
    hasDemo: false,
    hasLive: true,
    liveUrl: "https://mafirma.pe/es/firma",
  },
  {
    id: 5,
    name: "Academia_La_Meta - WEBSITE",
    client: "Academia La Meta",
    date: "December 2024",
    description: "Design and development of a web platform for Academia La Meta with a focus on user experience, performance, and conversion. The site allows students to learn about the academic offerings and communicate instantly through WhatsApp integration.",
    tech: ["HTML", "AI Tools"],
    image: laMetaImage,
    hasDemo: false,
    hasLive: true,
    liveUrl: "https://www.lametalima.com/",
  },
];

const techColors: Record<string, string> = {
  "HTML": "bg-orange-500/80 text-white",
  "CSS": "bg-blue-500/80 text-white",
  "JavaScript": "bg-yellow-500/80 text-black",
  "UI/UX": "bg-pink-500/80 text-white",
  "SEO": "bg-green-500/80 text-white",
  "AI Tools": "bg-cyan-500/80 text-white",
  "Forms": "bg-indigo-500/80 text-white",
};

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Portfolio() {
  return (
    <div className="min-h-[calc(100vh-100px)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground mb-6">
            <span className="text-green-400">lukas@portfolio:</span>
            <span className="text-blue-400">~/projects$</span>
            <span>ls -la --projects</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-muted-foreground"># </span>Projects
          </h1>

          <p className="font-mono text-muted-foreground text-lg mb-8">
            {"// Innovative solutions that transform ideas into reality"}
          </p>

          {/* Quick Stats */}
          <RevealGroup className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {quickStats.map((stat) => (
              <RevealItem
                key={stat.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 border border-border font-mono text-xs"
              >
                <stat.icon className="w-3.5 h-3.5 text-primary" />
                <span className="font-bold text-foreground">{stat.value}</span>
                <span className="text-muted-foreground">{stat.label}</span>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Jump Nav, styled as editor file tabs */}
          <RevealGroup className="flex flex-wrap items-center justify-center gap-3">
            <RevealItem>
              <button
                onClick={() => scrollToId("data-analytics-section")}
                className="flex items-center gap-2 px-4 py-2 rounded-t-md bg-card border border-border border-b-2 border-b-primary font-mono text-xs text-foreground hover:bg-muted/50 transition-colors"
              >
                <Database className="w-3.5 h-3.5 text-primary" />
                data_analytics.ipynb
              </button>
            </RevealItem>
            <RevealItem>
              <button
                onClick={() => scrollToId("web-projects-section")}
                className="flex items-center gap-2 px-4 py-2 rounded-t-md bg-card/60 border border-border font-mono text-xs text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                web_projects.tsx
              </button>
            </RevealItem>
          </RevealGroup>
        </Reveal>

        {/* Featured Data Analytics Project */}
        <Reveal
          id="data-analytics-section"
          className="rounded-xl bg-card border border-border overflow-hidden mb-12 shadow-xl shadow-black/30 scroll-mt-8"
          data-testid="card-project-analytics"
        >
          <div className="p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-purple-400" />
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 font-mono text-xs">
                Featured Project
              </Badge>
            </div>

            <h3 className="font-mono text-2xl font-bold mb-2">Data_Analytics Project</h3>

            <div className="space-y-1 mb-6 font-mono text-sm">
              <p>
                <span className="text-cyan-400">TYPE:</span>{" "}
                <span className="text-primary">End-to-End Data Analysis</span>
              </p>
              <p>
                <span className="text-green-400">STATUS:</span>{" "}
                <span className="text-muted-foreground">Complete Workflow</span>
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">Analytics project based on public data from a well-known Peruvian retail company, focused on understanding customer purchasing behavior and sales dynamics. It delivers clear, business-oriented insights through an interactive dashboard and an executive-ready presentation, helping identify trends, customer segments, and opportunities to optimize commercial strategies.</p>

            {/* Pipeline Flow */}
            <div className="mb-8">
              <p className="font-mono text-sm text-muted-foreground mb-6">{"// The project follows a clear end-to-end data workflow, illustrated below:"}</p>

              <RevealGroup className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
                {pipelineSteps.map((step, index) => (
                  <RevealItem key={step.step} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl ${step.color}/20 border-2 border-dashed ${step.color.replace('bg-', 'border-')}/50 flex items-center justify-center mb-3 relative`}>
                        <step.icon className={`w-8 h-8 md:w-10 md:h-10 ${step.color.replace('bg-', 'text-')}`} />
                        <span className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center text-xs font-mono font-bold">
                          {step.step}
                        </span>
                      </div>
                      <p className="font-mono text-xs font-medium text-center">{step.tool}</p>
                      <p className="text-xs text-muted-foreground text-center hidden md:block">{step.description}</p>
                    </div>

                    {index < pipelineSteps.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-muted-foreground/50 mx-2 md:mx-4 flex-shrink-0" />
                    )}
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            {/* Tech Stack */}
            <RevealGroup className="flex flex-wrap gap-2 mb-6">
              <RevealItem><Badge className="bg-green-600/80 text-white font-mono text-xs border-0">Excel</Badge></RevealItem>
              <RevealItem><Badge className="bg-yellow-500/80 text-black font-mono text-xs border-0">Python</Badge></RevealItem>
              <RevealItem><Badge className="bg-blue-600/80 text-white font-mono text-xs border-0">SQL</Badge></RevealItem>
              <RevealItem><Badge className="bg-amber-500/80 text-white font-mono text-xs border-0">Power BI</Badge></RevealItem>
              <RevealItem><Badge className="bg-red-500/80 text-white font-mono text-xs border-0">PowerPoint</Badge></RevealItem>
            </RevealGroup>

            {/* Key Takeaways */}
            <div className="mb-6 p-4 rounded-lg bg-muted/20 border border-border/50 shadow-sm shadow-black/20">
              <p className="font-mono text-xs text-cyan-400 mb-3 flex items-center gap-2">
                <Lightbulb className="w-3.5 h-3.5" />
                {"// Key Takeaways"}
              </p>
              <ul className="space-y-2">
                {keyTakeaways.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary font-mono mt-0.5">{">"}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <RevealGroup className="flex flex-wrap gap-3">
              <RevealItem>
                <Button
                  variant="outline"
                  size="sm"
                  className="font-mono text-xs gap-2 bg-muted/50 border-border"
                  asChild
                >
                  <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQCour3YM_DTQ1dMtJx7cVpOA103HftiQ5CntQpGFqyVV3EWjA6uh4FVou-AZyP5IBHEQXANZ2EpCoj/pubhtml?gid=511207772&single=true" target="_blank" rel="noopener noreferrer">
                    <FileSpreadsheet className="w-3 h-3" />
                    open - CSV
                  </a>
                </Button>
              </RevealItem>
              <RevealItem>
                <Button
                  variant="outline"
                  size="sm"
                  className="font-mono text-xs gap-2 bg-muted/50 border-border"
                  asChild
                >
                  <a href="https://nbviewer.org/github/lukassalguero/analyticsProject/blob/main/Customer_Shopping_Behavior_Analysis.ipynb" target="_blank" rel="noopener noreferrer">
                    <Code2 className="w-3 h-3" />
                    open - PYTHON
                  </a>
                </Button>
              </RevealItem>
              <RevealItem>
                <Button
                  variant="outline"
                  size="sm"
                  className="font-mono text-xs gap-2 bg-muted/50 border-border"
                  asChild
                >
                  <a href="https://raw.githubusercontent.com/lukassalguero/analyticsProject/refs/heads/main/customer_behavior_sql_queries.sql" target="_blank" rel="noopener noreferrer">
                    <Database className="w-3 h-3" />
                    open - SQL
                  </a>
                </Button>
              </RevealItem>
              <RevealItem>
                <Button
                  variant="outline"
                  size="sm"
                  className="font-mono text-xs gap-2 bg-muted/50 border-border"
                  asChild
                >
                  <a href="https://raw.githubusercontent.com/lukassalguero/analyticsProject/refs/heads/main/CustomerBehavior_DashBoard.png" target="_blank" rel="noopener noreferrer">
                    <BarChart3 className="w-3 h-3" />
                    open - DASHBOARD
                  </a>
                </Button>
              </RevealItem>
              <RevealItem>
                <Button
                  variant="outline"
                  size="sm"
                  className="font-mono text-xs gap-2 bg-muted/50 border-border"
                  asChild
                >
                  <a href="https://docs.google.com/presentation/d/e/2PACX-1vQIXB-GXgUsBm-lVM4e0C4w0d1fpZnmw9UqzGGttr0Ea3x1GJ0n8Nwnd2u3mK6vN0c1Vb7_bqrjcRdG/pub?start=false&loop=false&delayms=3000" target="_blank" rel="noopener noreferrer">
                    <Presentation className="w-3 h-3" />
                    open - PRESENTATION
                  </a>
                </Button>
              </RevealItem>
            </RevealGroup>
          </div>
        </Reveal>

        {/* Divider */}
        <Reveal id="web-projects-section" className="flex items-center gap-4 my-16 scroll-mt-8">
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-sm text-muted-foreground">{"// web_development_projects"}</span>
          <div className="flex-1 h-px bg-border" />
        </Reveal>

        {/* Web Development Projects */}
        <RevealGroup className="grid md:grid-cols-2 gap-6">
          {webProjects.map((project) => (
            <RevealItem
              key={project.id}
              className="group rounded-xl bg-card border border-border overflow-hidden shadow-lg shadow-black/20 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-cyan-400" />
                  <h3 className="font-mono text-lg font-bold">{project.name}</h3>
                </div>

                <div className="space-y-1 mb-4 font-mono text-sm">
                  <p>
                    <span className="text-cyan-400">CLIENT:</span>{" "}
                    <span className="text-primary">{project.client}</span>
                  </p>
                  <p>
                    <span className="text-green-400">DATE:</span>{" "}
                    <span className="text-muted-foreground">{project.date}</span>
                  </p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      className={`${techColors[tech] || "bg-gray-500/80 text-white"} font-mono text-xs border-0`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <p className="flex items-start gap-2 font-mono text-xs text-muted-foreground/70 mb-4">
                  <span className="text-cyan-400 mt-0.5">{">"}</span>
                  <span>Full-cycle delivery: client discovery, design, development, domain & hosting setup.</span>
                </p>

                <div className="flex flex-wrap gap-3 mt-auto pt-2">
                  {project.hasLive && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="font-mono text-xs gap-2 bg-muted/50 border-border"
                      asChild
                    >
                      <a href={project.liveUrl || "#"} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3" />
                        open - WEBSITE
                      </a>
                    </Button>
                  )}
                  {project.hasDemo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="font-mono text-xs gap-2 bg-muted/50 border-border"
                    >
                      <Play className="w-3 h-3" />
                      ./demo --video
                    </Button>
                  )}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Closing CTA */}
        <Reveal className="mt-16 text-center rounded-xl bg-card/50 border border-border p-10 shadow-xl shadow-black/30">
          <p className="font-mono text-sm text-cyan-400 mb-3">{"// "}Next Steps</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Have a project in mind?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            I'd love to hear about it — let's talk shop.
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
