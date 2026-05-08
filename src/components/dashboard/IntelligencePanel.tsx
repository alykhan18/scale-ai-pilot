import { Flame, Target, Smile, Globe, Clock, Sparkles, MapPin, Building2 } from "lucide-react";

function Bar({ value, color = "bg-primary" }: { value: number; color?: string }) {
  return (
    <div className="h-1 w-full rounded-full bg-secondary/80 overflow-hidden">
      <div className={`h-full rounded-full ${color} transition-all`} style={{ width: `${value}%` }} />
    </div>
  );
}

export function IntelligencePanel() {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border flex items-start justify-between">
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Lead Intelligence</div>
          <div className="text-sm font-semibold text-foreground mt-1 truncate">Rahul Sharma</div>
          <div className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5">
            <MapPin className="h-3 w-3" /> Mumbai, IN
          </div>
        </div>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-warning/10 text-warning border border-warning/20 uppercase tracking-wider shrink-0">
          Hot Lead
        </span>
      </div>

      {/* Lead Score — primary metric */}
      <div className="px-5 py-4 border-b border-border">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <Flame className="h-3.5 w-3.5 text-warning" />
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">Lead Score</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-base font-semibold text-foreground tabular-nums">87</span>
            <span className="text-[10px] text-muted-foreground">/ 100</span>
          </div>
        </div>
        <Bar value={87} color="bg-gradient-to-r from-warning to-destructive" />
      </div>

      {/* Signals — Intent + Sentiment */}
      <div className="px-5 py-4 border-b border-border">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-3">Signals</div>
        <div className="space-y-3">
          <SignalRow icon={Target} label="Intent Level" value="High" pct={82} color="bg-success" valueClass="text-success" />
          <SignalRow icon={Smile} label="Sentiment" value="Positive" pct={74} color="bg-primary" valueClass="text-foreground" />
        </div>
      </div>

      {/* Context */}
      <div className="px-5 py-4 border-b border-border">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-3">Context</div>
        <div className="space-y-2 text-xs">
          <Row icon={Globe} label="Source" value="Meta Ads · Q4" />
          <Row icon={Building2} label="Industry" value="F&B Retail" />
          <Row icon={Clock} label="Last Activity" value="2 min ago" />
        </div>
      </div>

      {/* AI Confidence — emphasized footer */}
      <div className="px-5 py-4 bg-gradient-to-br from-primary/8 to-transparent border-b border-border">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">AI Confidence</span>
          </div>
          <span className="text-base font-semibold text-primary tabular-nums">94%</span>
        </div>
        <Bar value={94} color="bg-gradient-to-r from-primary to-[oklch(0.7_0.2_280)]" />
        <p className="text-[11px] text-muted-foreground mt-2.5 leading-relaxed">
          High trajectory. AI recommended to continue qualification autonomously.
        </p>
      </div>

      <div className="px-5 py-3 grid grid-cols-2 gap-2">
        <button className="h-8 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition">View Profile</button>
        <button className="h-8 rounded-md border border-border text-foreground text-xs font-medium hover:bg-accent transition">Add Note</button>
      </div>
    </div>
  );
}

function SignalRow({
  icon: Icon,
  label,
  value,
  pct,
  color,
  valueClass,
}: {
  icon: any;
  label: string;
  value: string;
  pct: number;
  color: string;
  valueClass: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Icon className="h-3 w-3" />
          <span className="text-[11px]">{label}</span>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className={`text-xs font-semibold ${valueClass}`}>{value}</span>
          <span className="text-[10px] text-muted-foreground tabular-nums">{pct}%</span>
        </div>
      </div>
      <Bar value={pct} color={color} />
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
