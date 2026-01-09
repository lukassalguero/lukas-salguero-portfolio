import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Code2, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import backgroundImage from "@assets/image_1767937795155.png";

const titles = [
  "Business Insights Builder",
  "Data Analytics",
  "Tech-Driven Thinker",
];

const highlights = [
  {
    icon: Zap,
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
    title: "Tech-Driven Thinker",
    description: "Applying technology to solve real business problems.",
  },
  {
    icon: Terminal,
    iconColor: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    title: "Data & BI",
    description: "Transforming data into actionable insights",
  },
  {
    icon: Code2,
    iconColor: "text-purple-400",
    bgColor: "bg-purple-500/10",
    title: "Creative & Innovative Mind",
    description: "Creative mindset, open to learning and new challenges.",
  },
];

export default function Home() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleManualNav = useCallback((direction: 'prev' | 'next') => {
    setIsPaused(true);
    if (direction === 'prev') {
      setCurrentSlide((prev) => (prev - 1 + highlights.length) % highlights.length);
    } else {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }
    setTimeout(() => setIsPaused(false), 10000);
  }, []);

  const handleDotClick = useCallback((index: number) => {
    setIsPaused(true);
    setCurrentSlide(index);
    setTimeout(() => setIsPaused(false), 10000);
  }, []);

  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0a1628]/75 to-[#050a14]/85" />
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/60 via-transparent to-[#0a1628]/60" />

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

        <div className="max-w-md mx-auto">
          <div className="relative overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 p-6 bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className={`p-3 rounded-lg ${item.bgColor}`}>
                      <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-white/70 text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={() => handleManualNav('prev')}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
              data-testid="button-prev-highlight"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {highlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? "bg-primary w-6" 
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  data-testid={`button-highlight-dot-${index}`}
                />
              ))}
            </div>

            <button
              onClick={() => handleManualNav('next')}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
              data-testid="button-next-highlight"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
