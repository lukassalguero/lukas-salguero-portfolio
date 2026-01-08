import { useState, useEffect } from "react";
import { Terminal, Check, Zap, Database, Cpu } from "lucide-react";

const messages = [
  { text: "AI workflows running...", icon: Cpu, color: "text-cyan-400" },
  { text: "Projects deployed successfully", icon: Check, color: "text-green-400" },
  { text: "Database optimized", icon: Database, color: "text-cyan-400" },
  { text: "Automation active", icon: Zap, color: "text-yellow-400" },
  { text: "System status: operational", icon: Terminal, color: "text-green-400" },
];

export function TerminalBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentMessage = messages[currentIndex];
  const Icon = currentMessage.icon;

  return (
    <footer 
      className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border z-50"
      data-testid="terminal-bar"
    >
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">terminal</span>
        </div>
        
        <div 
          className={`flex items-center gap-2 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <Icon className={`w-4 h-4 ${currentMessage.color}`} />
          <span className={`font-mono text-sm ${currentMessage.color}`}>
            {currentMessage.text}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
          <span>UTF-8</span>
          <span className="text-primary">TypeScript React</span>
        </div>
      </div>
    </footer>
  );
}
