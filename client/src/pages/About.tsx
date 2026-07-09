import { useState, useEffect, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Briefcase, Code, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
import { SiPython, SiSalesforce, SiSlack, SiPostgresql } from "react-icons/si";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import profileImage from "@assets/FotoDePerfilNew_1767892057825.jpeg";
import highlightImage1 from "@assets/WhatsApp_Image_2026-01-08_at_12.30.17_PM_(1)_1767893932207.jpeg";
import highlightImage2 from "@assets/WhatsApp_Image_2026-01-08_at_12.44.08_PM_1767894301281.jpeg";
import highlightImage3 from "@assets/image_1767897159767.png";

const technologies = [
  { name: "Python", icon: SiPython, color: "text-yellow-400" },
  { name: "SQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "Salesforce", icon: SiSalesforce, color: "text-blue-400" },
  { name: "Power BI", icon: BarChart3, color: "text-yellow-500" },
  { name: "Slack", icon: SiSlack, color: "text-purple-400" },
];

const stats = [
  { value: "2+", label: "Year Professional Experience", icon: Briefcase },
  { value: "7+", label: "Projects Completed", icon: Code },
];

const highlights = [
  {
    id: 1,
    category: "Academic Education",
    code: {
      university: "Pontificia Universidad Católica del Perú",
      city: "Lima, Peru",
      year: "2020-2024",
      Degree: "Industrial Engineering",
    },
    title: "Academic Education",
    description: "Engineering student with a strong interest in problem-solving, data analysis, and understanding how technology supports better business decisions.",
    tags: [],
    image: highlightImage1,
    command: "./view_experience.sh",
  },
  {
    id: 2,
    category: "Current Job Position",
    code: {
      company: "Siemens Energy",
      role: "Project Management Office",
      year: "June 2025 – Present",
      "Business Area": "Gas Services",
    },
    title: "Professional Experience",
    description: "Supporting major gas-turbine maintenance (outages) for clients such as ENGIE, Kallpa, Orygen, and Termochilca. Involved in solution architecture, client sales opportunities, and end-to-end project ownership: From planning and execution to service closeout.",
    tags: ["Project Mgmt", "Sales", "Solution Architect"],
    image: highlightImage2,
    command: "./view_career.sh",
  },
  {
    id: 3,
    category: "Sport Achievements",
    code: {
      title: "Federation Football Player",
      club: "Aelu",
      year: "2020",
      skills: "Team work and Discipline",
    },
    title: "Sport Achievements",
    description: "Played in Copa Federación with club AELU until the age of 16, growing through competitive football while developing discipline, teamwork, and a strong passion for the sport.",
    tags: [],
    image: highlightImage3,
    command: "./view_content.sh",
  },
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % highlights.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + highlights.length) % highlights.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleManualNav = useCallback((direction: 'prev' | 'next') => {
    setIsPaused(true);
    if (direction === 'prev') {
      prevSlide();
    } else {
      nextSlide();
    }
    setTimeout(() => setIsPaused(false), 10000);
  }, [prevSlide, nextSlide]);

  const handleDotClick = useCallback((index: number) => {
    setIsPaused(true);
    setCurrentSlide(index);
    setTimeout(() => setIsPaused(false), 10000);
  }, []);

  const currentHighlight = highlights[currentSlide];

  return (
    <div className="min-h-[calc(100vh-100px)] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">About Me</h1>
          <p className="text-muted-foreground text-lg">
            Industrial Engineering & Tech-Project Management
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[300px_1fr] gap-10 items-start">
          <Reveal className="space-y-4">
            <div className="rounded-lg overflow-hidden border border-border/50 bg-muted/20 shadow-lg">
              <img
                src={profileImage}
                alt="Alessandro Salguero"
                className="w-full h-auto object-cover"
                data-testid="img-profile"
              />
            </div>
            <Badge className="w-full justify-center gap-2 py-2 bg-green-500/90 text-white border-0 font-medium">
              <CheckCircle className="w-4 h-4" />
              Open to Work
            </Badge>
          </Reveal>

          <div className="space-y-8">
            <Reveal className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-medium">Alessandro Salguero</span>, an{" "}
                <span className="text-primary">Industrial Engineer</span> focused on Project Management
                and Sales & Business Operations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I like bringing structure to complex work: Aligning teams, keeping priorities clear, and
                making sure projects move forward and deliver real results. I like to understand how things
                really work before acting, so the solutions I build are practical and actually stick.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm looking to join international companies operating in{" "}
                <span className="text-cyan-400">LATAM</span>, where I can take ownership early, learn
                quickly, and support teams across project management, sales, and strategy.
              </p>
            </Reveal>

            <div>
              <h3 className="font-mono text-sm text-cyan-400 mb-4">{"// "}Technologies</h3>
              <RevealGroup className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {technologies.map((tech) => (
                  <RevealItem key={tech.name}>
                    <Card className="p-4 bg-card/50 border-border flex flex-col items-center gap-2">
                      <tech.icon className={`w-7 h-7 ${tech.color}`} />
                      <span className="text-xs text-muted-foreground">{tech.name}</span>
                    </Card>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            <div>
              <h3 className="font-mono text-sm text-cyan-400 mb-4">{"// "}In Numbers</h3>
              <RevealGroup className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {stats.map((stat) => (
                  <RevealItem key={stat.label} className="text-center">
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </div>

        <Reveal className="mt-12 font-mono text-sm text-muted-foreground p-4 bg-muted/20 rounded-lg border border-border/50">
          <p className="mb-2">
            <span className="text-green-400">$</span>{" "}
            <span className="text-cyan-400">cat</span> ~/career/highlights.json
          </p>
          <p className="text-muted-foreground/60 animate-pulse">
            Loading professional milestones...
          </p>
        </Reveal>

        <Reveal>
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

          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {highlights.map((highlight) => (
                <div 
                  key={highlight.id}
                  className="w-full flex-shrink-0"
                >
                  <div className="grid md:grid-cols-2 gap-0 min-h-[320px]">
                    <div className="p-6 space-y-3 flex flex-col justify-center">
                      <div className="font-mono text-xs space-y-1">
                        <p className="text-muted-foreground/60 text-[14px]">{"// "}{highlight.category}</p>
                        {Object.entries(highlight.code).map(([key, value]) => (
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
                          {highlight.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {highlight.tags.map((tag) => (
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
                        src={highlight.image}
                        alt={highlight.title}
                        className="w-full h-full object-contain object-center"
                        style={{ minHeight: '320px' }}
                        data-testid={`img-highlight-${highlight.id}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 py-4 border-t border-border bg-muted/20">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => handleManualNav('prev')}
              data-testid="button-prev-slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">[</span>
              {highlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                  data-testid={`button-slide-${index}`}
                />
              ))}
              <span className="text-muted-foreground">]</span>
            </div>

            <Button
              size="icon"
              variant="ghost"
              onClick={() => handleManualNav('next')}
              data-testid="button-next-slide"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </Card>
        </Reveal>
      </div>
    </div>
  );
}
