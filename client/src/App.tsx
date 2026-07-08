import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { EditorTabs } from "@/components/EditorTabs";
import { TerminalBar } from "@/components/TerminalBar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Portfolio from "@/pages/Portfolio";
import Experience from "@/pages/Experience";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/experience" component={Experience} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-dev-grid text-foreground flex flex-col">
          <div className="h-9 bg-[hsl(222,30%,12%)] border-b border-border flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
            </div>
            <span className="font-mono text-sm text-muted-foreground">alessandro-salguero-portfolio</span>
            <span className="font-mono text-xs text-muted-foreground/60">~/portfolio/src/pages</span>
          </div>
          <EditorTabs />
          <main className="flex-1 overflow-auto pb-12">
            <Router />
          </main>
          <TerminalBar />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
