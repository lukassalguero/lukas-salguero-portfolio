import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import backgroundImage from "@assets/WhatsApp_Image_2026-01-09_at_2.38.20_PM_1767987531002.jpeg";

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

      </div>
    </div>
  );
}
