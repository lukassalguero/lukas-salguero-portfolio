import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Building2, Code2, FlaskConical, Award, Users } from "lucide-react";
import bcpTeamImage from "@assets/image_1767855533853.png";

const experiences = [
  {
    id: 1,
    role: "Business Intelligence Intern",
    company: "BCP (Alternative Channels Area)",
    period: "May 2025 - January 2026",
    icon: Building2,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    highlights: [
      "Designed and maintained dashboards for tracking daily/weekly performance, operational failures, and commercial results across 3+ major channels",
      "Extracted and transformed data from KTCO database using SQL and Databricks to monitor real-time ATM activity and generate structured reports",
      "Proposed initiative to automate ATM incident reporting, centralizing incidents in real-time dashboard to reduce manual work",
      "Contributed to channel strategy by comparing POS and ATM performance to identify optimal investment allocation",
    ],
    skills: ["SQL", "Databricks", "Power BI", "Data Analysis"],
    teamImage: bcpTeamImage,
    certificateUrl: "#",
  },
  {
    id: 2,
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "December 2024 - Present",
    icon: Code2,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    highlights: [
      "Built functional websites for small businesses, focused on clear structure and strong digital presence. Developed using HTML, CSS, and AI tools to deliver faster and more efficient solutions.",
      "Managed full project cycle: client meetings, requirements gathering, development, and delivery with domain/hosting setup",
    ],
    skills: ["HTML", "CSS", "AI Tools", "Client Management"],
  },
  {
    id: 3,
    role: "Data Analytics Intern",
    company: "InnovaLab",
    period: "January 2024 - May 2024",
    icon: FlaskConical,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    highlights: [
      "Participated in university-led engineering project supporting a public healthcare center",
      "Created SQL queries to extract and segment patient data by demographic groups, service type, enabling deeper comparisons. And performed data cleaning using Python (Pandas).",
    ],
    skills: ["SQL", "Python"],
  },
];

export default function Experience() {
  return (
    <div className="min-h-[calc(100vh-100px)] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-muted-foreground text-sm mb-4">
          <span className="text-cyan-400">{"// "}</span>Experience
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
          <p className="text-lg text-muted-foreground">My professional journey in business and technology.</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative" data-testid={`experience-${exp.id}`}>
                <div className="md:pl-20">
                  <div className="absolute left-0 top-6 hidden md:flex items-center justify-center">
                    <div className={`p-3 rounded-lg ${exp.bgColor} border-4 border-background relative z-10`}>
                      <exp.icon className={`w-5 h-5 ${exp.color}`} />
                    </div>
                  </div>

                  <Card className="p-6 bg-card/50 border-border">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
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

                    <div className="flex flex-wrap gap-2 mb-4">
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

                    {(exp.teamImage || exp.certificateUrl) && (
                      <div className="pt-4 border-t border-border/50">
                        <div className="flex flex-wrap items-center gap-3">
                          {exp.teamImage && (
                            <Dialog>
                              <DialogTrigger asChild>
                                <button 
                                  className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/30 border border-border/50 transition-all duration-200 hover-elevate"
                                  data-testid="button-view-team"
                                >
                                  <div className="relative w-10 h-10 rounded-md overflow-hidden">
                                    <img 
                                      src={exp.teamImage} 
                                      alt="Team photo" 
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <Users className="w-3.5 h-3.5 text-muted-foreground" />
                                    <span className="text-xs text-muted-foreground font-mono">Team</span>
                                  </div>
                                </button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl p-2 bg-card border-border">
                                <img 
                                  src={exp.teamImage} 
                                  alt="BCP Team" 
                                  className="w-full h-auto rounded-lg"
                                />
                                <p className="text-center text-sm text-muted-foreground mt-2 font-mono">
                                  {"// "}<span className="text-cyan-400">With the BCP team</span>
                                </p>
                              </DialogContent>
                            </Dialog>
                          )}
                          
                          {exp.certificateUrl && (
                            <a
                              href={exp.certificateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-testid="link-certificate"
                            >
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="gap-2 font-mono text-xs text-muted-foreground"
                              >
                                <Award className="w-3.5 h-3.5" />
                                View Certificate
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
