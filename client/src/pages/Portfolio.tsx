import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Ecommerce_Landing.exe",
    client: "Local Retail Business",
    date: "November 2024",
    description: "Landing page desarrollada para un negocio de retail local, enfocada en conversiones y mejora de presencia digital. Diseño responsive con optimización para dispositivos móviles.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    hasDemo: true,
    hasLive: true,
  },
  {
    id: 2,
    name: "Restaurant_Menu.exe",
    client: "Gastrobar Lima",
    date: "October 2024",
    description: "Sistema de menú digital interactivo para restaurante. Interfaz moderna con categorías dinámicas, imágenes de alta calidad y experiencia de usuario optimizada post-pandemia.",
    tech: ["HTML", "CSS", "JavaScript", "UI/UX"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    hasDemo: true,
    hasLive: true,
  },
  {
    id: 3,
    name: "Consulting_Web.exe",
    client: "Business Consulting Firm",
    date: "September 2024",
    description: "Website profesional para firma de consultoría empresarial. Enfoque en credibilidad corporativa, presentación de servicios y generación de leads calificados.",
    tech: ["HTML", "CSS", "JavaScript", "SEO"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    hasDemo: false,
    hasLive: true,
  },
  {
    id: 4,
    name: "Fitness_Studio.exe",
    client: "PowerFit Gym",
    date: "August 2024",
    description: "Landing page energética para estudio de fitness. Incluye horarios de clases, información de membresías y sistema de contacto directo con integración a WhatsApp.",
    tech: ["HTML", "CSS", "JavaScript", "AI Tools"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    hasDemo: true,
    hasLive: true,
  },
  {
    id: 5,
    name: "Local_Directory.exe",
    client: "Community Project",
    date: "July 2024",
    description: "Directorio web para negocios locales de la comunidad. Plataforma que conecta comercios con clientes, incluyendo búsqueda por categorías y formularios de contacto.",
    tech: ["HTML", "CSS", "JavaScript", "Forms"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    hasDemo: true,
    hasLive: false,
  },
];

const techColors: Record<string, string> = {
  "HTML": "bg-orange-500/80 text-white",
  "CSS": "bg-blue-500/80 text-white",
  "JavaScript": "bg-yellow-500/80 text-black",
  "Responsive": "bg-purple-500/80 text-white",
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

        <div className="space-y-8">
          {projects.map((project) => (
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
                        className="font-mono text-xs gap-2 bg-muted/50 border-border hover:bg-primary/20 hover:text-primary hover:border-primary/50"
                      >
                        <ExternalLink className="w-3 h-3" />
                        ./deploy --live
                      </Button>
                    )}
                    {project.hasDemo && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="font-mono text-xs gap-2 bg-muted/50 border-border hover:bg-primary/20 hover:text-primary hover:border-primary/50"
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

        <div className="mt-12 p-6 rounded-xl bg-card/50 border border-border">
          <div className="font-mono text-xs text-muted-foreground/70">
            <pre className="whitespace-pre-wrap">{`// project.config.ts
export const workflowProcess = {
  steps: [
    "Initial meeting & requirements gathering",
    "Design mockups & client approval", 
    "Development with AI-assisted tools",
    "Testing & quality assurance",
    "Deployment with domain & hosting setup"
  ],
  avgDeliveryTime: "2-3 weeks",
  satisfaction: "100%"
};`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
