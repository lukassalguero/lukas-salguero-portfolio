import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Briefcase, Code, TrendingUp, BarChart3, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { SiPython, SiDatabricks, SiPostgresql } from "react-icons/si";
import profileImage from "@assets/FotoDePerfilNew_1767892057825.jpeg";
import highlightImage1 from "@assets/WhatsApp_Image_2026-01-08_at_12.30.17_PM_(1)_1767893932207.jpeg";
import highlightImage2 from "@assets/WhatsApp_Image_2026-01-08_at_12.44.08_PM_1767894301281.jpeg";
import highlightImage3 from "@assets/WhatsApp_Image_2026-01-08_at_12.28.19_PM_1767894074581.jpeg";

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

const highlights = [
  {
    id: 1,
    category: "Academic Education",
    code: {
      university: "Pontificia Universidad Católica del Perú",
      city: "Lima, Peru",
      year: "2022-2026",
      Degree: "Industrial Engineering",
    },
    title: "Academic Exchange",
    description: "Engineering student with a strong interest in problem-solving, data analysis, and understanding how technology supports better business decisions.",
    tags: [],
    image: highlightImage1,
    command: "./view_experience.sh",
  },
  {
    id: 2,
    category: "Professional Experience",
    code: {
      company: "BCP",
      role: "BI Intern",
      year: "Sep 2025 - Feb 2026",
      area: "Alternative Channels",
    },
    title: "Business Intelligence",
    description: "Analyzing ATM and POS operations, transforming performance data into actionable insights. Supported decision-making by identifying patterns, inefficiencies, and opportunities to improve channels performance through data analysis.",
    tags: ["Data", "Analytics", "Banking"],
    image: highlightImage2,
    command: "./view_career.sh",
  },
  {
    id: 3,
    category: "Content creation",
    code: {
      platform: "Social Media",
      followers: "20k+",
      year: 2024,
      impact: "community_building",
    },
    title: "Content Creator",
    description: "Sharing insights about engineering, student life, and professional development with a growing community.",
    tags: ["Creator", "Engineering", "Community"],
    image: highlightImage3,
    command: "./view_content.sh",
  },
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % highlights.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + highlights.length) % highlights.length);
  };

  const currentHighlight = highlights[currentSlide];

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
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden border border-border/50 bg-muted/20 shadow-lg">
              <img
                src={profileImage}
                alt="Lukas Salguero"
                className="w-full h-auto object-cover"
                data-testid="img-profile"
              />
            </div>
            <Badge className="w-full justify-center gap-2 py-2 bg-green-500/90 text-white border-0 font-medium">
              <CheckCircle className="w-4 h-4" />
              Open to Work
            </Badge>
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
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
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

        <div className="mt-12 font-mono text-sm text-muted-foreground p-4 bg-muted/20 rounded-lg border border-border/50">
          <p className="mb-2">
            <span className="text-green-400">$</span>{" "}
            <span className="text-cyan-400">cat</span> ~/career/highlights.json
          </p>
          <p className="text-muted-foreground/60 animate-pulse">
            Loading professional milestones...
          </p>
        </div>

        <Card className="mt-6 bg-card/80 border-border overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs text-muted-foreground ml-2">highlights.json</span>
            <span className="text-xs text-muted-foreground/50 ml-auto">~/career/</span>
          </div>

          <div className="grid md:grid-cols-2 gap-0 min-h-[320px]">
            <div className="p-6 space-y-3 flex flex-col justify-center">
              <div className="font-mono text-xs space-y-1">
                <p className="text-muted-foreground/60 text-[14px]">{"// "}{currentHighlight.category}</p>
                {Object.entries(currentHighlight.code).map(([key, value]) => (
                  <p key={key} className="text-[13px]">
                    <span className="text-cyan-400">"{key}"</span>
                    <span className="text-muted-foreground">: </span>
                    <span className="text-green-400">"{value}"</span>
                  </p>
                ))}
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="text-cyan-400">{">"}</span>
                  {currentHighlight.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {currentHighlight.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {currentHighlight.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary"
                    className="bg-muted text-muted-foreground font-mono text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              
            </div>

            <div className="relative bg-gradient-to-br from-muted/20 to-muted/5 flex items-stretch">
              <img
                src={currentHighlight.image}
                alt={currentHighlight.title}
                className="w-full h-full object-contain object-center"
                style={{ minHeight: '320px' }}
                data-testid={`img-highlight-${currentHighlight.id}`}
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 py-4 border-t border-border bg-muted/20">
            <Button
              size="icon"
              variant="ghost"
              onClick={prevSlide}
              data-testid="button-prev-slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">[</span>
              {highlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  data-testid={`button-slide-${index}`}
                />
              ))}
              <span className="text-muted-foreground">]</span>
            </div>

            <Button
              size="icon"
              variant="ghost"
              onClick={nextSlide}
              data-testid="button-next-slide"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
