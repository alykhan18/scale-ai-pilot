import {
  AlertTriangle,
  TrendingDown,
  UserCheck,
  CalendarCheck,
  Send,
  Bot,
  CheckCircle2,
} from "lucide-react";

type Activity = {
  icon: any;
  text: string;
  meta: string;
  time: string;
  tone: "warning" | "destructive" | "success" | "primary" | "muted";
};

const activities: Activity[] = [
  {
    icon: AlertTriangle,
    text: "Pricing question triggered escalation",
    meta: "Lead · Priya Nair",
    time: "Just now",
    tone: "warning",
  },
  {
    icon: TrendingDown,
    text: "AI confidence dropped to 52%",
    meta: "Conversation #2 · ROI thread",
    time: "1m ago",
    tone: "destructive",
  },
  {
    icon: UserCheck,
    text: "Human rep assigned · Neha S.",
    meta: "Response time 2m 14s",
    time: "3m ago",
    tone: "success",
  },
  {
    icon: CalendarCheck,
    text: "Demo call scheduled · Thu 4 PM IST",
    meta: "Lead · Ananya Iyer",
    time: "12m ago",
    tone: "primary",
  },
  {
    icon: Send,
    text: "WhatsApp follow-up sent automatically",
    meta: "Sequence · Day 2 nudge",
    time: "26m ago",
    tone: "muted",
  },
  {
    icon: Bot,
    text: "AI handled 14 messages without escalation",
    meta: "Agent · Sales-Bot v3.2",
    time: "41m ago",
    tone: "primary",
  },
  {
    icon: CheckCircle2,
    text: "Lead qualified · moved to Sales pipeline",
    meta: "Lead · Karan Patel",
    time: "1h ago",
    tone: "success",
  },
];

const toneMap: Record<Activity["tone"], string> = {
  warning: "text-warning bg-warning/10 border-warning/20",
  destructive: "text-destructive bg-destructive/10 border-destructive/20",
  success: "text-success bg-success/10 border-success/20",
  primary: "text-primary bg-primary/10 border-primary/20",
  muted: "text-muted-foreground bg-secondary border-border",
};

export function ActivityFeed() {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="px-5 py-4 border-b border-border flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-foreground">
            Escalation Activity
          </h3>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            Live operational events from your AI agents
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
          Live
        </div>
      </div>

      <ul className="divide-y divide-border max-h-[420px] overflow-y-auto">
        {activities.map((a, i) => {
          const Icon = a.icon;
          return (
            <li
              key={i}
              className="group flex items-start gap-3 px-5 py-3 transition hover:bg-accent/30"
            >
              <div
                className={`mt-0.5 h-7 w-7 shrink-0 rounded-md grid place-items-center border ${toneMap[a.tone]}`}
              >
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-foreground leading-snug font-medium">
                  {a.text}
                </p>
                <p className="text-[11px] text-muted-foreground mt-0.5 truncate">
                  {a.meta}
                </p>
              </div>
              <span className="text-[10px] text-muted-foreground tabular-nums whitespace-nowrap mt-0.5">
                {a.time}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="px-5 py-3 border-t border-border bg-background/30">
        <button className="text-[11px] font-medium text-primary hover:text-primary/80 transition">
          View full activity log →
        </button>
      </div>
    </div>
  );
}
