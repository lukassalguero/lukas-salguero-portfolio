import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, FileSpreadsheet, Code2, Database, BarChart3, Presentation, ArrowRight, Github } from "lucide-react";
import { SiPython, SiPowerbi } from "react-icons/si";
import kickboxingImage from "@assets/image_1767853381689.png";
import bypImage from "@assets/image_1767853449347.png";
import mirandaImage from "@assets/image_1767853503776.png";

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
    name: "Kickboxing_School - WebSite",
    client: "Sarria Kickboxing Center",
    date: "March 2025",
    description: "A complete website for a Kickboxing school, designed to promote the sport and support its digital growth in Peru. The site includes information about classes, trainers, and a contact system for new students.",
    tech: ["HTML", "CSS", "JavaScript", "AI Tools"],
    image: kickboxingImage,
    hasDemo: false,
    hasLive: true,
    liveUrl: "https://skc-react-agzc.vercel.app/",
  },
  {
    id: 3,
    name: "B&P_Abogados - WEBSITE",
    client: "B&P Abogados",
    date: "January 2025",
    description: "Corporate website for B&P Abogados, a law firm specialized in education law, with extensive experience advising universities, institutes, and schools.",
    tech: ["HTML", "CSS"],
    image: bypImage,
    hasDemo: false,
    hasLive: true,
    liveUrl: "https://www.bypabogados.com/",
  },
  {
    id: 4,
    name: "Miranda&Amado_Abogados - WEBSITE",
    client: "Miranda&Amado_Abogados",
    date: "December 2024",
    description: "Institutional website for a Peruvian law firm, designed to convey credibility and professional excellence. The platform presents the firm's culture, expertise, and legal team through a clean and structured layout.",
    tech: ["HTML", "CSS"],
    image: mirandaImage,
    hasDemo: false,
    hasLive: true,
    liveUrl: "https://mafirma.pe/es/firma",
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

export default function Portfolio() {
  return (
    <div className="min-h-[calc(100vh-100px)] py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground mb-6">
            <span className="text-green-400">lukas@portfolio:</span>
            <span className="text-blue-400">~/projects$</span>
            <span>ls -la --projects</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-muted-foreground"># </span>Projects
          </h1>
          
          <p className="font-mono text-muted-foreground text-lg">
            {"// Innovative solutions that transform ideas into reality"}
          </p>
        </div>

        {/* Featured Data Analytics Project */}
        <div 
          className="rounded-xl bg-card border border-border overflow-hidden mb-8"
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
            
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">Analytics project based on public data from a well-known Peruvian retail company, focused on understanding customer purchasing behavior and sales dynamics.                                                          It delivers clear, business-oriented insights through an interactive dashboard and an executive-ready presentation, helping identify trends, customer segments, and opportunities to optimize commercial strategies.</p>

            {/* Pipeline Flow */}
            <div className="mb-8">
              <p className="font-mono text-sm text-muted-foreground mb-6">{"// The project follows a clear end-to-end data workflow, illustrated below:"}</p>
              
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
                {pipelineSteps.map((step, index) => (
                  <div key={step.step} className="flex items-center">
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
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-green-600/80 text-white font-mono text-xs border-0">Excel</Badge>
              <Badge className="bg-yellow-500/80 text-black font-mono text-xs border-0">Python</Badge>
              <Badge className="bg-blue-600/80 text-white font-mono text-xs border-0">SQL</Badge>
              <Badge className="bg-amber-500/80 text-white font-mono text-xs border-0">Power BI</Badge>
              <Badge className="bg-red-500/80 text-white font-mono text-xs border-0">PowerPoint</Badge>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
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
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-12">
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-sm text-muted-foreground">{"// web_development_projects"}</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Web Development Projects */}
        <div className="space-y-8">
          {webProjects.map((project) => (
            <div 
              key={project.id}
              className="rounded-xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-colors"
              data-testid={`card-project-${project.id}`}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-cyan-400" />
                      <h3 className="font-mono text-xl font-bold">{project.name}</h3>
                    </div>
                    
                    <div className="space-y-1 mb-6 font-mono text-sm">
                      <p>
                        <span className="text-cyan-400">CLIENT:</span>{" "}
                        <span className="text-primary">{project.client}</span>
                      </p>
                      <p>
                        <span className="text-green-400">DATE:</span>{" "}
                        <span className="text-muted-foreground">{project.date}</span>
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech}
                          className={`${techColors[tech] || "bg-gray-500/80 text-white"} font-mono text-xs border-0`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
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
                
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-card/80 hidden md:block" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
