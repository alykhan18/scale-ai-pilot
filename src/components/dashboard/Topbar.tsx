import { Search, Bell, Command, TrendingUp, AlertTriangle } from "lucide-react";

export function Topbar() {
  return (
    <header className="h-16 shrink-0 border-b border-border bg-background/80 backdrop-blur-xl flex items-center px-4 md:px-6 gap-3 md:gap-4 sticky top-0 z-20">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          placeholder="Search leads, conversations, agents…"
          className="w-full h-9 pl-9 pr-16 rounded-md bg-secondary/60 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-primary/40 transition"
        />
        <kbd className="absolute right-2 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center gap-1 px-1.5 h-5 rounded text-[10px] text-muted-foreground bg-background border border-border">
          <Command className="h-2.5 w-2.5" />K
        </kbd>
      </div>

      <div className="flex items-center gap-2 md:gap-3 ml-auto">
        {/* Operational KPI badges */}
        <div className="hidden lg:flex items-stretch gap-1.5">
          <KpiBadge
            icon={TrendingUp}
            label="AI Resolution Rate"
            value="76%"
            tone="primary"
          />
          <KpiBadge
            icon={AlertTriangle}
            label="Human Escalations"
            value="24%"
            tone="warning"
          />
        </div>

        <button className="relative h-9 w-9 grid place-items-center rounded-md hover:bg-accent transition border border-transparent hover:border-border">
          <Bell className="h-4 w-4 text-muted-foreground" />
          <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-warning ring-2 ring-background" />
        </button>

        <div className="flex items-center gap-2.5 pl-2 md:pl-3 border-l border-border">
          <div className="text-right hidden sm:block leading-tight">
            <div className="text-xs font-medium text-foreground">Arjun Mehta</div>
            <div className="text-[10px] text-muted-foreground">Admin · Scale100x</div>
          </div>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-[oklch(0.5_0.2_300)] grid place-items-center text-xs font-semibold text-white ring-2 ring-border">
            AM
          </div>
        </div>
      </div>
    </header>
  );
}

function KpiBadge({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: any;
  label: string;
  value: string;
  tone: "primary" | "warning";
}) {
  const toneCls =
    tone === "primary"
      ? "text-primary bg-primary/10 border-primary/20"
      : "text-warning bg-warning/10 border-warning/20";
  return (
    <div className="flex items-center gap-2 h-9 pl-2 pr-2.5 rounded-md border border-border bg-secondary/40 hover:bg-secondary/70 transition">
      <div className={`h-5 w-5 rounded grid place-items-center border ${toneCls}`}>
        <Icon className="h-3 w-3" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium">
          {label}
        </span>
        <span className="text-xs font-semibold text-foreground tabular-nums mt-0.5">
          {value}
        </span>
      </div>
    </div>
  );
}
