import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Code2, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import backgroundImage from "@assets/WhatsApp_Image_2026-01-09_at_12.57.40_AM_1767938871723.jpeg";

const titles = [
  "Business Insights Builder",
  "Data Analytics",
  "Tech-Driven Thinker",
];

export default function Home() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;
    let pauseTimeout: ReturnType<typeof setTimeout>;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          pauseTimeout = setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => {
      clearTimeout(timeout);
      clearTimeout(pauseTimeout);
    };
  }, [displayText, isDeleting, titleIndex]);

  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "35% center"
        }}
      />
      
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      <div className="absolute top-10 left-10 text-white/10 font-mono text-xs hidden lg:block z-10">
        <pre>{`// Home.tsx
import { Developer } from "@/lukas";

export default function Home() {
  return <Developer />;
}`}</pre>
      </div>

      <div className="text-center z-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-sm text-white/90">Available for opportunities</span>
        </div>

        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-lg"
          data-testid="text-name"
        >
          LUKAS SALGUERO
        </h1>

        <div className="h-12 md:h-14 flex items-center justify-center mb-8">
          <span className="font-mono text-xl md:text-2xl text-primary drop-shadow-md">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-sm">
          Building intelligent, business-driven digital solutions. 
          I transform complex data and processes into practical tools that deliver real impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/portfolio">
            <Button size="lg" className="gap-2" data-testid="button-view-work">
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" data-testid="button-contact">
              Get In Touch
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card/60 backdrop-blur-sm border border-border/50">
            <div className="p-3 rounded-lg bg-primary/10">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-white">Tech-Driven Thinker</h3>
            <p className="text-sm text-white/70 text-center">
              Applying technology to solve real business problems.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card/60 backdrop-blur-sm border border-border/50">
            <div className="p-3 rounded-lg bg-cyan-500/10">
              <Terminal className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="font-semibold text-white">Data & BI</h3>
            <p className="text-sm text-white/70 text-center">
              Transforming data into actionable insights
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card/60 backdrop-blur-sm border border-border/50">
            <div className="p-3 rounded-lg bg-purple-500/10">
              <Code2 className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="font-semibold text-white">Creative & Innovative Mind</h3>
            <p className="text-sm text-white/70 text-center">
              Creative mindset, open to learning and new challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
