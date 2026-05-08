import { Users, Zap, AlertTriangle, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

const metrics = [
  { icon: Users, label: "Active Leads", value: "1,284", trend: "+12.4%", up: true, accent: "text-primary", bg: "bg-primary/10" },
  { icon: Zap, label: "AI Response Rate", value: "94.2%", trend: "+3.1%", up: true, accent: "text-success", bg: "bg-success/10" },
  { icon: AlertTriangle, label: "Human Escalations", value: "38", trend: "-8.2%", up: false, accent: "text-warning", bg: "bg-warning/10" },
  { icon: TrendingUp, label: "Conversion %", value: "27.6%", trend: "+5.7%", up: true, accent: "text-primary", bg: "bg-primary/10" },
];

export function MetricCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {metrics.map((m) => {
        const Icon = m.icon;
        const TrendIcon = m.up ? ArrowUpRight : ArrowDownRight;
        return (
          <div
            key={m.label}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-[0_0_0_1px_oklch(0.555_0.22_264/0.2),0_8px_24px_-12px_oklch(0.555_0.22_264/0.4)]"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-start justify-between mb-4">
              <div className={`h-9 w-9 rounded-lg grid place-items-center ${m.bg}`}>
                <Icon className={`h-4 w-4 ${m.accent}`} />
              </div>
              <span className={`inline-flex items-center gap-0.5 text-[11px] font-medium px-1.5 py-0.5 rounded ${m.up ? "text-success bg-success/10" : "text-warning bg-warning/10"}`}>
                <TrendIcon className="h-3 w-3" />
                {m.trend}
              </span>
            </div>
            <div className="space-y-1">
              <div className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">{m.label}</div>
              <div className="text-2xl font-semibold text-foreground tabular-nums tracking-tight">{m.value}</div>
            </div>
            <div className="mt-3 flex items-center gap-1 h-1">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="flex-1 rounded-full bg-border" style={{ height: `${4 + Math.sin(i + m.label.length) * 2 + 4}px`, background: i < 14 ? "oklch(0.555 0.22 264 / 0.5)" : "oklch(1 0 0 / 0.05)" }} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
