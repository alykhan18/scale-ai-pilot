import { Search, Bell, Command } from "lucide-react";

export function Topbar() {
  return (
    <header className="h-16 shrink-0 border-b border-border bg-background/80 backdrop-blur-xl flex items-center px-6 gap-4 sticky top-0 z-20">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          placeholder="Search leads, conversations, agents…"
          className="w-full h-9 pl-9 pr-16 rounded-md bg-secondary/60 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40 focus:border-primary/40 transition"
        />
        <kbd className="absolute right-2 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center gap-1 px-1.5 h-5 rounded text-[10px] text-muted-foreground bg-background border border-border">
          <Command className="h-2.5 w-2.5" />K
        </kbd>
      </div>

      <div className="flex items-center gap-3 ml-auto">
        <div className="hidden md:flex items-center gap-3 px-3 h-9 rounded-md border border-border bg-secondary/40">
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-muted-foreground">AI</span>
            <span className="text-xs font-semibold text-foreground tabular-nums">76%</span>
          </div>
          <div className="h-3 w-px bg-border" />
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-success" />
            <span className="text-xs text-muted-foreground">Human</span>
            <span className="text-xs font-semibold text-foreground tabular-nums">24%</span>
          </div>
        </div>

        <button className="relative h-9 w-9 grid place-items-center rounded-md hover:bg-accent transition border border-transparent hover:border-border">
          <Bell className="h-4 w-4 text-muted-foreground" />
          <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-warning ring-2 ring-background" />
        </button>

        <div className="flex items-center gap-2.5 pl-3 border-l border-border">
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
