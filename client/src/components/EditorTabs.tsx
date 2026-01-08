import { Link, useLocation } from "wouter";
import { X, FileCode2 } from "lucide-react";

const tabs = [
  { name: "index.tsx", path: "/" },
  { name: "about.tsx", path: "/about" },
  { name: "portfolio.tsx", path: "/portfolio" },
  { name: "experience.tsx", path: "/experience" },
  { name: "contact.tsx", path: "/contact" },
];

export function EditorTabs() {
  const [location] = useLocation();

  return (
    <nav className="flex items-center bg-card border-b border-border overflow-x-auto" data-testid="nav-editor-tabs">
      <div className="flex items-center">
        {tabs.map((tab) => {
          const isActive = location === tab.path;
          return (
            <Link key={tab.path} href={tab.path}>
              <div
                className={`group flex items-center gap-2 px-4 py-2.5 border-r border-border cursor-pointer transition-colors ${
                  isActive
                    ? "bg-background border-b-2 border-b-primary text-foreground"
                    : "bg-card text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
                data-testid={`tab-${tab.name.replace(".tsx", "")}`}
              >
                <FileCode2 className={`w-4 h-4 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                <span className="font-mono text-sm whitespace-nowrap">{tab.name}</span>
                <X 
                  className="w-3.5 h-3.5 opacity-0 group-hover:opacity-50 hover:opacity-100 transition-opacity" 
                  aria-hidden="true"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
