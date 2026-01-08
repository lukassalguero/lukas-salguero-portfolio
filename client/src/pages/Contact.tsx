import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone, MapPin, Send } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "lukasrexsg@gmail.com",
    href: "mailto:lukasrexsg@gmail.com",
    color: "text-red-400",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/lukassalguero",
    href: "https://linkedin.com/in/lukassalguero",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/lukassalguero",
    href: "https://github.com/lukassalguero",
    color: "text-gray-400",
    bgColor: "bg-gray-500/10",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+51 993 703 566",
    href: "tel:+51993703566",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
  },
];

export default function Contact() {
  return (
    <div className="min-h-[calc(100vh-100px)] py-12 px-4 flex items-center">
      <div className="max-w-2xl mx-auto w-full">
        <div className="font-mono text-muted-foreground text-sm mb-4">
          <span className="text-cyan-400">{"// "}</span>Contact
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground">
            Interested in working together? Let's connect and build something great.
          </p>
        </div>

        <div className="grid gap-4 mb-12">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              data-testid={`link-${method.label.toLowerCase()}`}
            >
              <Card className="p-4 bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 group">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${method.bgColor}`}>
                    <method.icon className={`w-5 h-5 ${method.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {method.value}
                    </p>
                  </div>
                  <Send className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Card>
            </a>
          ))}
        </div>

        <Card className="p-6 bg-card/50 border-border text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">Lima, Peru</span>
          </div>
          <p className="text-lg font-medium mb-6">
            Let's build something together
          </p>
          <a href="mailto:lukasrexsg@gmail.com">
            <Button size="lg" className="gap-2" data-testid="button-email-me">
              <Mail className="w-4 h-4" />
              Send Me an Email
            </Button>
          </a>
        </Card>

        <div className="mt-12 font-mono text-xs text-muted-foreground/50 p-4 bg-muted/20 rounded-lg text-center">
          <pre className="whitespace-pre-wrap">{`// Ready to collaborate
const response = await fetch("/api/connect", {
  method: "POST",
  body: JSON.stringify({
    from: "you",
    to: "lukas",
    message: "Let's work together!"
  })
});
// Status: 200 OK`}</pre>
        </div>
      </div>
    </div>
  );
}
