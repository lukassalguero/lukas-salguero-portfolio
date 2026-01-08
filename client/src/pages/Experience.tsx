import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Building2, Code2, FlaskConical } from "lucide-react";

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
    skills: ["SQL", "Databricks", "Power BI", "Data Analysis", "Dashboard Design"],
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
      "Built functional websites for small local businesses, focusing on clear structure to improve their digital presence using HTML, CSS and AI tools to speed up development and solve technical tasks more efficiently.",
      "Managed full project cycle: client meetings, requirements gathering, development, and delivery with domain/hosting setup",
    ],
    skills: ["HTML", "CSS", "JavaScript", "AI Tools", "Client Management"],
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
    skills: ["SQL", "Python", "Pandas", "Data Cleaning", "Healthcare Analytics"],
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
