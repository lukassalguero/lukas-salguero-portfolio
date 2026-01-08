import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GraduationCap, Target, Lightbulb, Users, Globe, Award } from "lucide-react";

const skills = {
  technical: [
    "Python (Pandas, Automation)",
    "SQL (Intermediate)",
    "Power BI (Advanced)",
    "Databricks (ETL)",
    "Microsoft Azure",
    "n8n",
    "Power Automate",
    "HTML/CSS/JavaScript",
  ],
  soft: [
    "Effective Communication",
    "Professional Ethics",
    "Analytical Thinking",
    "Creative Problem Solving",
  ],
};

const interests = [
  { icon: Target, label: "AI & Machine Learning" },
  { icon: Lightbulb, label: "Business Optimization" },
  { icon: Globe, label: "LATAM Expansion" },
  { icon: Users, label: "Team Collaboration" },
];

export default function About() {
  return (
    <div className="min-h-[calc(100vh-100px)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-muted-foreground text-sm mb-8">
          <span className="text-cyan-400">{"// "}</span>About Me
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6">
                Industrial Engineering Student & Tech Enthusiast
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a 20-year-old Industrial Engineering student at PUCP with hands-on experience 
                in Business Intelligence, data analysis, and process optimization.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy turning complex information into clear insights, building simple digital 
                solutions, and proposing creative ways to improve operations. I'm especially 
                interested in joining companies that are expanding their operations into LATAM, 
                where I can learn fast, take ownership early, and contribute with a mix of 
                analytical thinking, creativity, and a strong drive to grow.
              </p>
            </div>

            <Card className="p-6 bg-card/50 border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Education</h3>
                  <p className="font-medium">Industrial Engineering</p>
                  <p className="text-muted-foreground text-sm">
                    Pontificia Universidad Catolica del Peru (PUCP)
                  </p>
                  <p className="text-muted-foreground text-sm">2022 - Present</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan-500/10">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Certification</h3>
                  <p className="font-medium">Summer Camp - Business and Data Analytics</p>
                  <p className="text-muted-foreground text-sm">
                    Stanford Engineering and Business School
                  </p>
                  <p className="text-muted-foreground text-sm">June 2025</p>
                </div>
              </div>
            </Card>

            <div>
              <h3 className="font-mono text-sm text-cyan-400 mb-4">{"// "}Focus Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest) => (
                  <div 
                    key={interest.label}
                    className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 border border-border"
                  >
                    <interest.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm">{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="p-6 bg-card/50 border-border">
              <h3 className="font-mono text-sm text-cyan-400 mb-6">{"// "}Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill) => (
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

            <Card className="p-6 bg-card/50 border-border">
              <h3 className="font-mono text-sm text-cyan-400 mb-6">{"// "}Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="bg-muted text-muted-foreground font-mono text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-border">
              <h3 className="font-mono text-sm text-cyan-400 mb-6">{"// "}Languages</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Spanish</span>
                    <span className="text-muted-foreground">Native</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "100%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>English</span>
                    <span className="text-muted-foreground">Advanced (B2 - First Certificate)</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "85%" }} />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-border">
              <h3 className="font-mono text-sm text-cyan-400 mb-4">{"// "}Fun Fact</h3>
              <p className="text-muted-foreground">
                Content creator for university students with 20k+ followers on social media, 
                sharing insights about engineering and student life.
              </p>
            </Card>

            <div className="font-mono text-xs text-muted-foreground/50 p-4 bg-muted/20 rounded-lg">
              <pre>{`const lukas = {
  location: "Lima, Peru",
  status: "Open to opportunities",
  passion: "Building practical solutions",
  motto: "Learn fast, take ownership"
};`}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
