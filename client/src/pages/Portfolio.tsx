import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink, Globe, TrendingUp, Users, ShoppingBag, Briefcase } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Landing Page",
    description: "Built a conversion-focused landing page for a local retail business, improving their online presence and customer acquisition.",
    tech: ["HTML", "CSS", "JavaScript", "AI Tools"],
    impact: "40% increase in online inquiries",
    icon: ShoppingBag,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 2,
    title: "Restaurant Digital Menu",
    description: "Developed an interactive digital menu system with modern UI, helping the restaurant adapt to post-pandemic dining preferences.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    impact: "Modernized customer experience",
    icon: Users,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
  },
  {
    id: 3,
    title: "Professional Services Website",
    description: "Created a clean, professional website for a consulting firm focusing on credibility and service showcase.",
    tech: ["HTML", "CSS", "JavaScript", "SEO"],
    impact: "Established online credibility",
    icon: Briefcase,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
  {
    id: 4,
    title: "Fitness Studio Landing",
    description: "Designed and developed an energetic landing page for a fitness studio with class schedules and membership information.",
    tech: ["HTML", "CSS", "JavaScript", "AI-assisted"],
    impact: "Streamlined membership signups",
    icon: TrendingUp,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
  },
  {
    id: 5,
    title: "Local Business Directory",
    description: "Built a directory website for local businesses in the community, helping customers find services easily.",
    tech: ["HTML", "CSS", "JavaScript", "Forms"],
    impact: "Connected local businesses with customers",
    icon: Globe,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-[calc(100vh-100px)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-muted-foreground text-sm mb-4">
          <span className="text-cyan-400">{"// "}</span>Portfolio
        </div>
        
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of websites and landing pages built for local businesses, 
            focusing on clear structure, business impact, and improved digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="group p-6 bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5"
              data-testid={`card-project-${project.id}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${project.bgColor}`}>
                  <project.icon className={`w-6 h-6 ${project.color}`} />
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge 
                    key={tech}
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 font-mono text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-border">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400">{project.impact}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg bg-card/50 border border-border">
          <div className="font-mono text-xs text-muted-foreground/50">
            <pre>{`// project.config.ts
export const projectApproach = {
  process: [
    "Client meeting & requirements gathering",
    "Design & development",
    "Testing & refinement",
    "Deployment with domain & hosting setup"
  ],
  tools: ["HTML", "CSS", "JavaScript", "AI-assisted development"],
  focus: "Business impact and clarity"
};`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
