import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Briefcase, Building2, Code2, Award, Clock, Layers, Camera, Sparkles, ArrowRight } from "lucide-react";
import bcpTeamImage1 from "@assets/image_1767855533853.png";
import bcpTeamImage2 from "@assets/image_1767890527899.png";
import freelanceImage from "@assets/image_1767891188314.png";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

const quickStats = [
  { value: "3", label: "Roles", icon: Briefcase },
  { value: "2+", label: "Years Experience", icon: Clock },
  { value: "3", label: "Industries", icon: Layers },
];

const experiences = [
  {
    id: 1,
    role: "Project Management Office",
    company: "Siemens Energy",
    period: "June 2025 – Present",
    current: true,
    icon: Briefcase,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    highlights: [
      "Cross-border client engagement: Coordinated end-to-end execution project of Energy Plants outages (parts, tooling logistics, engineering, EHS, system software architecture upgrades and deployment).",
      "Executive Reporting: Produced high-impact presentations for clients (Engie, Kallpa, Orygen) tracking sales performance, project status, and customer NPS, adopted by LATAM North leadership for weekly commercial reviews.",
      "CRM & Pipeline execution: Managed account updates and project milestones in Salesforce while coordinating internal stakeholders during hardware/software deployments, and maintenance operations to ensure on-time execution.",
    ],
    skills: ["Project Execution", "B2B Sales", "Risk Management"],
    pendingPhoto: true,
  },
  {
    id: 2,
    role: "Sales Development Representative",
    company: "Banco de Crédito del Perú (BCP)",
    period: "January 2024 – May 2025",
    icon: Building2,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    highlights: [
      "Commercial Analytics & Reporting: Automated SQL queries across commercial databases of 50K+ records and built Power BI dashboards, giving the commercial team real-time visibility into VISA transactions and KPIs.",
      "Salesforce Pipeline Management: Used Salesforce to map and qualify revenue opportunities across the ATM network, targeting high-volume VISA transaction points to grow fee income.",
    ],
    skills: ["Salesforce", "Power BI", "Business Operations"],
    teamImages: [bcpTeamImage1, bcpTeamImage2],
    certificateUrl: "https://raw.githubusercontent.com/lukassalguero/analyticsProject/main/BCP_CertificadoLaboral.pdf",
  },
  {
    id: 3,
    role: "Digital Solutions Consultant | Freelancer",
    company: "Self-Employed",
    period: "June 2024 - April 2025",
    icon: Code2,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    highlights: [
      "Digital Growth and Solutions: Developed custom websites for local businesses to increase their digital presence. I used AI tools to optimize development and deliver high quality solutions that helped clients boost their brand and online sales.",
      "Managed a full business operation: First meeting with clients, identifying client needs, negotiating prices and finally the web development, ensuring the domain and hosting were set up correctly for a perfect launch.",
    ],
    skills: ["AI Tools", "Business Operations", "Client Management"],
    teamImages: [freelanceImage],
    teamLabel: "Projects",
  },
];

const coreStrengths = Array.from(new Set(experiences.flatMap((exp) => exp.skills)));

export default function Experience() {
  return (
    <div className="min-h-[calc(100vh-100px)] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-muted-foreground text-sm mb-4">
          <span className="text-cyan-400">{"// "}</span>Experience
        </div>

        <Reveal className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
          <p className="text-lg text-muted-foreground">My professional journey in business and technology.</p>
        </Reveal>

        {/* Quick Stats */}
        <RevealGroup className="flex flex-wrap items-center gap-3 mb-12">
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

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-border hidden md:block" />

          <RevealGroup className="space-y-8">
            {experiences.map((exp) => (
              <RevealItem key={exp.id} className="relative" data-testid={`experience-${exp.id}`}>
                <div className="md:pl-20">
                  <div className="absolute left-0 top-6 hidden md:flex items-center justify-center">
                    <div className={`p-3 rounded-lg ${exp.bgColor} border-4 border-background relative z-10`}>
                      <exp.icon className={`w-5 h-5 ${exp.color}`} />
                    </div>
                  </div>

                  <Card className="p-6 bg-card/50 border-border hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-xl font-semibold">{exp.role}</h3>
                              {exp.current && (
                                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-green-400">
                                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                  Current
                                </span>
                              )}
                            </div>
                            <p className="text-primary">{exp.company}</p>
                          </div>
                          <Badge
                            variant="secondary"
                            className="w-fit bg-muted text-muted-foreground font-mono text-xs"
                          >
                            {exp.period}
                          </Badge>
                        </div>

                        <div className="space-y-3 mb-6">
                          {exp.highlights.map((highlight, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/50"
                            >
                              <span className="text-primary font-mono text-sm mt-0.5">{">"}</span>
                              <p className="text-sm text-muted-foreground leading-relaxed">{highlight}</p>
                            </div>
                          ))}
                        </div>

                        <p className="font-mono text-xs text-cyan-400 mb-2">{"// "}Skills</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-primary/10 text-primary border-primary/20 font-mono text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        {exp.certificateUrl && (
                          <div className="mt-4 pt-4 border-t border-border/50">
                            <a
                              href={exp.certificateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-testid="link-certificate"
                            >
                              <Button
                                variant="default"
                                size="sm"
                                className="gap-2 font-mono text-xs bg-primary/20 text-primary border border-primary/30"
                              >
                                <Award className="w-3.5 h-3.5" />
                                open CERTIFICATE
                              </Button>
                            </a>
                          </div>
                        )}
                      </div>

                      {exp.teamImages && exp.teamImages.length > 0 && (
                        <aside className={`md:w-44 lg:w-52 shrink-0 mx-auto md:mx-0 ${exp.teamImages.length === 1 ? 'md:self-center' : 'md:pt-2'}`}>
                          <div className="font-mono text-xs text-muted-foreground mb-2 text-center md:text-left">
                            <span className="text-cyan-400">{"// "}</span>{exp.teamLabel || "Team"}
                          </div>
                          <div className="space-y-3">
                            {exp.teamImages.map((img, idx) => (
                              <div
                                key={idx}
                                className="rounded-lg overflow-hidden border border-border/50 bg-muted/20 shadow-sm"
                              >
                                <img
                                  src={img}
                                  alt={`Team ${idx + 1}`}
                                  className="w-full h-auto object-cover max-w-[200px] md:max-w-none mx-auto"
                                  data-testid={`img-team-${exp.id}-${idx + 1}`}
                                />
                              </div>
                            ))}
                          </div>
                        </aside>
                      )}

                      {exp.pendingPhoto && (
                        <aside className="md:w-44 lg:w-52 shrink-0 mx-auto md:mx-0 md:self-center">
                          <div className="font-mono text-xs text-muted-foreground mb-2 text-center md:text-left">
                            <span className="text-cyan-400">{"// "}</span>Team
                          </div>
                          <div
                            className="rounded-lg overflow-hidden border border-dashed border-border/70 bg-muted/10 aspect-[4/5] flex flex-col items-center justify-center gap-2 text-muted-foreground/60"
                            data-testid={`img-placeholder-${exp.id}`}
                          >
                            <Camera className="w-6 h-6" />
                            <p className="text-[11px] font-mono text-center px-3">Photo coming soon</p>
                          </div>
                        </aside>
                      )}
                    </div>
                  </Card>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* Core Strengths */}
        <Reveal className="mt-12 p-6 rounded-xl bg-muted/20 border border-border/50">
          <p className="font-mono text-sm text-cyan-400 mb-4 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            {"// Core Strengths"}
          </p>
          <RevealGroup className="flex flex-wrap gap-2">
            {coreStrengths.map((skill) => (
              <RevealItem key={skill}>
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 font-mono text-xs"
                >
                  {skill}
                </Badge>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>

        {/* Closing CTA */}
        <Reveal className="mt-8 text-center rounded-xl bg-card/50 border border-border p-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Like what you see?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Let's talk about how I can help your team move faster.
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              Let's Connect
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
