import { AlertTriangle, Bot, UserCog, Users, RefreshCw, Timer, ArrowRight, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";

export function HitlEscalation() {
  const [seconds, setSeconds] = useState(187);
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  const slaPct = (seconds / 300) * 100;

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="px-5 py-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-warning/15 grid place-items-center">
            <ShieldAlert className="h-4 w-4 text-warning" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Human-in-the-Loop Escalation</h3>
            <p className="text-[11px] text-muted-foreground">Conversation #2 · Priya Nair · ROI Question</p>
          </div>
        </div>
        <span className="text-[10px] font-semibold px-2 py-1 rounded bg-warning/10 text-warning border border-warning/20 uppercase tracking-wider">
          Pending
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-5 p-5">
        {/* Left: details */}
        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-background/40 p-4">
            <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground uppercase tracking-wider font-medium mb-2">
              <AlertTriangle className="h-3 w-3" /> Trigger Reason
            </div>
            <p className="text-sm text-foreground leading-relaxed">
              Lead requested specific ROI projections beyond AI's data confidence threshold (62%). Detected high-intent signals requiring human verification.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-border p-3">
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">AI Confidence</div>
              <div className="text-lg font-semibold text-warning tabular-nums">62%</div>
              <div className="h-1 w-full mt-1.5 rounded-full bg-secondary overflow-hidden">
                <div className="h-full bg-warning" style={{ width: "62%" }} />
              </div>
            </div>
            <div className="rounded-lg border border-border p-3">
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Priority</div>
              <div className="text-lg font-semibold text-destructive">P1 · Hot</div>
              <div className="text-[11px] text-muted-foreground mt-1.5">Lead score 87/100</div>
            </div>
          </div>
        </div>

        {/* Right: SLA + actions */}
        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-gradient-to-br from-warning/8 to-transparent p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground uppercase tracking-wider font-medium">
                <Timer className="h-3 w-3" /> SLA Countdown
              </div>
              <span className="text-[10px] text-muted-foreground">5 min response window</span>
            </div>
            <div className="text-3xl font-semibold text-foreground tabular-nums tracking-tight">{mm}:{ss}</div>
            <div className="mt-3 h-1.5 w-full rounded-full bg-secondary overflow-hidden">
              <div className={`h-full transition-all ${slaPct > 50 ? "bg-success" : slaPct > 25 ? "bg-warning" : "bg-destructive"}`} style={{ width: `${slaPct}%` }} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button className="h-9 rounded-md bg-primary text-primary-foreground text-xs font-medium inline-flex items-center justify-center gap-1.5 hover:opacity-90 transition">
              <Users className="h-3.5 w-3.5" /> Assign Human
            </button>
            <button className="h-9 rounded-md border border-border text-foreground text-xs font-medium inline-flex items-center justify-center gap-1.5 hover:bg-accent transition">
              <RefreshCw className="h-3.5 w-3.5" /> Retry Escalation
            </button>
          </div>
        </div>
      </div>

      {/* State flow */}
      <div className="px-5 py-4 border-t border-border bg-background/30">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-3">State Transition</div>
        <div className="flex items-center gap-2 flex-wrap">
          <FlowStep icon={Bot} label="AI Active" tone="done" />
          <ArrowRight className="h-3 w-3 text-muted-foreground" />
          <FlowStep icon={ShieldAlert} label="Escalation Pending" tone="active" />
          <ArrowRight className="h-3 w-3 text-muted-foreground" />
          <FlowStep icon={UserCog} label="Human Active" tone="todo" />
        </div>
      </div>
    </div>
  );
}

function FlowStep({ icon: Icon, label, tone }: { icon: any; label: string; tone: "done" | "active" | "todo" }) {
  const styles = {
    done: "border-primary/30 bg-primary/10 text-primary",
    active: "border-warning/40 bg-warning/15 text-warning ring-2 ring-warning/20",
    todo: "border-border bg-secondary/40 text-muted-foreground",
  }[tone];
  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-xs font-medium ${styles}`}>
      <Icon className="h-3.5 w-3.5" />
      {label}
      {tone === "active" && <span className="h-1.5 w-1.5 rounded-full bg-warning animate-pulse" />}
    </div>
  );
}
