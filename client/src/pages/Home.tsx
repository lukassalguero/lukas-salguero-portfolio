import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import backgroundImage from "@assets/WhatsApp_Image_2026-01-09_at_2.38.20_PM_1767987531002.jpeg";

const titles = [
  "Data Analytics",
  "Business Insights Builder",
  "Creative Mindset",
];

const fullName = "LUKAS SALGUERO";

export default function Home() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [nameText, setNameText] = useState("");
  const [nameComplete, setNameComplete] = useState(false);

  useEffect(() => {
    if (nameComplete) return;
    
    if (nameText.length < fullName.length) {
      const timeout = setTimeout(() => {
        setNameText(fullName.slice(0, nameText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setNameComplete(true);
    }
  }, [nameText, nameComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center center"
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
          {nameText}
          {!nameComplete && <span className="animate-pulse">|</span>}
        </h1>

        <div className="h-12 md:h-14 flex items-center justify-center mb-8">
          <span 
            key={titleIndex}
            className="font-mono text-xl md:text-2xl text-primary drop-shadow-md animate-fade-in"
          >
            {titles[titleIndex]}
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

      </div>
    </div>
  );
}
