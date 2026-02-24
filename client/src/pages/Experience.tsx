import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Code2, Award, Plane } from "lucide-react";
import bcpTeamImage1 from "@assets/image_1767855533853.png";
import bcpTeamImage2 from "@assets/image_1767890527899.png";
import freelanceImage from "@assets/image_1767891188314.png";
import kalahariImage1 from "@assets/WhatsApp_Image_2026-01-09_at_3.03.49_PM_1767989149380.jpeg";
import kalahariImage2 from "@assets/WhatsApp_Image_2026-01-09_at_3.03.49_PM_(1)_1767989145452.jpeg";

const experiences = [
  {
    id: 1,
    role: "Business Intelligence Intern",
    company: "Banco de Crédito del Perú (BCP)",
    period: "September 2025 - February 2026",
    icon: Building2,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    highlights: [
      "Data ETL & Revenue Monitoring: Extracted DCC Visa data via SQL/Databricks to build dashboards for tracking real-time revenue and improving the accuracy of weekly commercial projections.",
      "Stakeholder Management: Partnered with business units a to align daily revenue performance with financial targets and ensure 100% reporting accuracy, providing visibility of commercial Dashboards.",
      "Market expansion strategy: Developed presentations of the national ATM portfolio to identify high-ROI locations and growth opportunities.",
    ],
    skills: ["SQL", "Databricks", "Power BI", "Data Analysis"],
    teamImages: [bcpTeamImage1, bcpTeamImage2],
    certificateUrl: "https://raw.githubusercontent.com/lukassalguero/analyticsProject/main/BCP_CertificadoLaboral.pdf",
  },
  {
    id: 2,
    role: "Digital Solutions Consultant | Freelancer",
    company: "Self-Employed",
    period: "April 2025 - September 2025",
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
  {
    id: 4,
    role: "Work and Travel Experience",
    company: "Banquet Attendant - Kalahari Resorts",
    period: "December 2024 - March 2025",
    icon: Plane,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    highlights: [
      "Multicultural Work: Participated in the Peru - Work and Travel program as a banquet attendant at Kalahari Resorts (Sandusky, Ohio), collaborating within multicultural teams, improving my adaptability and intercultural communication skills.",
      "English language: Improved my English communication skills through daily interaction with clients, managers and the team, developing confidence, responsibility, and cultural awareness.",
    ],
    skills: ["International experience", "English communication"],
    teamImages: [kalahariImage1, kalahariImage2],
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
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1 min-w-0">
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
                    </div>
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
