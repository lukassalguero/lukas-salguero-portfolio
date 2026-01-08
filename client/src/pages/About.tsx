import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle, Briefcase, Code, TrendingUp, BarChart3, Zap } from "lucide-react";
import { SiPython, SiDatabricks, SiPostgresql } from "react-icons/si";
import profileImage from "@assets/FotoDePerfilNew_1767892057825.jpeg";

const technologies = [
  { name: "Python", icon: SiPython, color: "text-yellow-400" },
  { name: "SQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "Databricks", icon: SiDatabricks, color: "text-red-500" },
  { name: "Power BI", icon: BarChart3, color: "text-yellow-500" },
  { name: "Power Automate", icon: Zap, color: "text-blue-500" },
];

const stats = [
  { value: "20k+", label: "Social Media Followers", icon: TrendingUp },
  { value: "1+", label: "Years Industrial Experience", icon: Briefcase },
  { value: "5", label: "Projects Completed", icon: Code },
];

export default function About() {
  return (
    <div className="min-h-[calc(100vh-100px)] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">About Me</h1>
          <p className="text-muted-foreground text-lg">
            Industrial Engineering Student & AI Enthusiast
          </p>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-10 items-start">
          <div className="space-y-6">
            <div className="relative">
              <div className="rounded-lg overflow-hidden border border-border/50 bg-muted/20 shadow-lg">
                <img
                  src={profileImage}
                  alt="Lukas Salguero"
                  className="w-full h-auto object-cover"
                  data-testid="img-profile"
                />
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <Badge className="w-full justify-center gap-2 py-1.5 bg-green-500/90 text-white border-0 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Available for projects
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Card className="p-4 bg-card/50 border-border text-center">
                <p className="text-2xl font-bold text-primary">20k+</p>
                <p className="text-xs text-muted-foreground">Social Followers</p>
              </Card>
              <Card className="p-4 bg-card/50 border-border text-center">
                <p className="text-2xl font-bold text-primary">3+</p>
                <p className="text-xs text-muted-foreground">Years Coding</p>
              </Card>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-medium">Lukas Salguero</span>, a 20-year-old{" "}
                <span className="text-primary">Industrial Engineering</span> student at{" "}
                <span className="text-cyan-400">PUCP</span> with hands-on experience in Business Intelligence, 
                data analysis, and process optimization.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm also a <span className="text-primary">content creator</span> with 20k+ followers, sharing 
                insights about engineering and student life. I enjoy turning complex information into clear 
                insights and building simple digital solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Interested in joining companies expanding into <span className="text-cyan-400">LATAM</span>, 
                where I can learn fast, take ownership early, and contribute with analytical thinking and creativity.
              </p>
            </div>

            <div>
              <h3 className="font-mono text-sm text-cyan-400 mb-4">{"// "}Technologies</h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {technologies.map((tech) => (
                  <Card 
                    key={tech.name}
                    className="p-4 bg-card/50 border-border flex flex-col items-center gap-2"
                  >
                    <tech.icon className={`w-7 h-7 ${tech.color}`} />
                    <span className="text-xs text-muted-foreground">{tech.name}</span>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-sm text-cyan-400 mb-4">{"// "}In Numbers</h3>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 font-mono text-sm text-muted-foreground p-6 bg-muted/20 rounded-lg border border-border/50">
          <p className="mb-2">
            <span className="text-green-400">$</span>{" "}
            <span className="text-cyan-400">cat</span> ~/career/highlights.json
          </p>
          <p className="text-muted-foreground/60 animate-pulse">
            Loading professional milestones...
          </p>
        </div>
      </div>
    </div>
  );
}
