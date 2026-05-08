import { Flame, Target, Smile, Globe, Clock, Sparkles, MapPin, Building2 } from "lucide-react";

function Bar({ value, color = "bg-primary" }: { value: number; color?: string }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
      <div className={`h-full rounded-full ${color} transition-all`} style={{ width: `${value}%` }} />
    </div>
  );
}

export function IntelligencePanel() {
  return (
    <div className="rounded-xl border border-border bg-card p-5 space-y-5">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">Lead Intelligence</div>
          <div className="text-base font-semibold text-foreground mt-0.5">Rahul Sharma</div>
          <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
            <MapPin className="h-3 w-3" /> Mumbai, IN
          </div>
        </div>
        <span className="text-[10px] font-semibold px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">HOT</span>
      </div>

      {/* Lead Score */}
      <div className="rounded-lg border border-border bg-background/40 p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Flame className="h-3.5 w-3.5 text-warning" />
            <span className="text-xs text-muted-foreground">Lead Score</span>
          </div>
          <span className="text-xs font-semibold text-foreground tabular-nums">87 / 100</span>
        </div>
        <Bar value={87} color="bg-gradient-to-r from-warning to-destructive" />
      </div>

      {/* Intent + Sentiment grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-border p-3">
          <div className="flex items-center gap-1.5 mb-2 text-muted-foreground"><Target className="h-3 w-3" /><span className="text-[11px]">Intent</span></div>
          <div className="text-sm font-semibold text-success">High</div>
          <Bar value={82} color="bg-success" />
        </div>
        <div className="rounded-lg border border-border p-3">
          <div className="flex items-center gap-1.5 mb-2 text-muted-foreground"><Smile className="h-3 w-3" /><span className="text-[11px]">Sentiment</span></div>
          <div className="text-sm font-semibold text-foreground">Positive</div>
          <Bar value={74} color="bg-primary" />
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2.5 text-xs">
        <Row icon={Globe} label="Source" value="Meta Ads · Franchise Q4" />
        <Row icon={Building2} label="Industry" value="F&B Retail" />
        <Row icon={Clock} label="Last Activity" value="2 min ago" />
      </div>

      {/* AI Confidence */}
      <div className="rounded-lg border border-primary/20 bg-gradient-to-br from-primary/8 to-transparent p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-foreground">AI Confidence</span>
          </div>
          <span className="text-sm font-semibold text-primary tabular-nums">94%</span>
        </div>
        <Bar value={94} color="bg-gradient-to-r from-primary to-[oklch(0.7_0.2_280)]" />
        <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">High confidence in current trajectory. Recommend AI continues lead qualification.</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button className="h-8 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition">View Full Profile</button>
        <button className="h-8 rounded-md border border-border text-foreground text-xs font-medium hover:bg-accent transition">Add Note</button>
      </div>
    </div>
  );
}

function Row({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <Icon className="h-3 w-3" />
        <span>{label}</span>
      </div>
      <span className="text-foreground font-medium">{value}</span>
    </div>
  );
}
