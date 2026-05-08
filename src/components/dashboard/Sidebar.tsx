import { LayoutDashboard, Users, Bot, MessageSquare, BarChart3, Settings, Sparkles } from "lucide-react";
import { useState } from "react";

const items = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Leads", badge: "24" },
  { icon: Bot, label: "AI Agents" },
  { icon: MessageSquare, label: "Conversations", badge: "8" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

export function Sidebar() {
  const [active, setActive] = useState("Dashboard");
  return (
    <aside className="hidden md:flex w-60 shrink-0 flex-col border-r border-border bg-sidebar">
      <div className="flex items-center gap-2.5 px-5 h-16 border-b border-border">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-[oklch(0.45_0.25_280)] shadow-[0_0_20px_oklch(0.555_0.22_264/0.4)]">
          <Sparkles className="h-4 w-4 text-white" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-foreground">Scale100x.AI</span>
          <span className="text-[10px] text-muted-foreground tracking-wider uppercase">Agent Panel</span>
        </div>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.label;
          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`group w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all ${
                isActive
                  ? "bg-accent text-foreground shadow-[inset_0_0_0_1px_oklch(1_0_0/0.06)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? "text-primary" : ""}`} />
              <span className="flex-1 text-left font-medium">{item.label}</span>
              {item.badge && (
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-primary/15 text-primary">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
      <div className="m-3 p-3 rounded-lg border border-border bg-gradient-to-br from-primary/10 to-transparent">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-medium text-foreground">System Healthy</span>
        </div>
        <p className="text-[11px] text-muted-foreground leading-relaxed">All AI agents operational. 99.98% uptime.</p>
      </div>
    </aside>
  );
}
