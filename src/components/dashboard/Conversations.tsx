import { Bot, User, UserCog, CheckCheck, Send, Paperclip, Smile } from "lucide-react";
import { useState } from "react";

type State = "ai" | "pending" | "human" | "failed";
type Conversation = {
  id: string;
  name: string;
  topic: string;
  initials: string;
  state: State;
  lastMsg: string;
  time: string;
  unread?: number;
};

const conversations: Conversation[] = [
  { id: "1", name: "Rahul Sharma", topic: "Franchise Inquiry", initials: "RS", state: "ai", lastMsg: "What's the initial investment for a Mumbai franchise?", time: "2m", unread: 2 },
  { id: "2", name: "Priya Nair", topic: "ROI Question", initials: "PN", state: "pending", lastMsg: "Need clarification on 18-month payback claim", time: "5m", unread: 1 },
  { id: "3", name: "Karan Patel", topic: "Pricing Discussion", initials: "KP", state: "human", lastMsg: "Sounds great, can we schedule a call tomorrow?", time: "12m" },
  { id: "4", name: "Ananya Iyer", topic: "Demo Request", initials: "AI", state: "ai", lastMsg: "Booked demo for Thursday 4 PM IST", time: "26m" },
  { id: "5", name: "Vikram Singh", topic: "Pricing", initials: "VS", state: "failed", lastMsg: "Escalation timed out — retry needed", time: "1h" },
];

const stateMap: Record<State, { label: string; cls: string; dot: string }> = {
  ai: { label: "AI Active", cls: "text-primary bg-primary/10 border-primary/20", dot: "bg-primary" },
  pending: { label: "Escalation Pending", cls: "text-warning bg-warning/10 border-warning/20", dot: "bg-warning animate-pulse" },
  human: { label: "Human Active", cls: "text-success bg-success/10 border-success/20", dot: "bg-success" },
  failed: { label: "Escalation Failed", cls: "text-destructive bg-destructive/10 border-destructive/20", dot: "bg-destructive" },
};

const messages = [
  { from: "lead", name: "Rahul Sharma", text: "Hi, I'm interested in opening a Scale100x franchise in Mumbai. Can you share details?", time: "10:42 AM" },
  { from: "ai", name: "AI Agent", text: "Hello Rahul! Great to hear about your interest. Our Mumbai franchise package starts at ₹18L with full setup, training, and 6 months of marketing support included.", time: "10:42 AM" },
  { from: "lead", name: "Rahul Sharma", text: "What's the typical ROI timeline?", time: "10:44 AM" },
  { from: "ai", name: "AI Agent", text: "Based on our 47 active franchises, average payback is 14–18 months with breakeven at month 9. I can share a detailed projection — would you prefer a PDF or a quick call?", time: "10:44 AM" },
  { from: "human", name: "Neha (Sales)", text: "Hi Rahul, jumping in here — I can set up a 20-min call this week to walk you through unit economics. Tomorrow 5 PM IST works?", time: "10:48 AM" },
  { from: "lead", name: "Rahul Sharma", text: "Yes, 5 PM works. Please send the calendar invite.", time: "10:49 AM" },
];

export function Conversations() {
  const [selected, setSelected] = useState("1");
  const active = conversations.find((c) => c.id === selected)!;
  const s = stateMap[active.state];

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden flex flex-col h-[640px]">
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] flex-1 min-h-0">
        {/* List */}
        <div className="border-r border-border flex flex-col min-h-0">
          <div className="px-4 py-3 border-b border-border flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Live Conversations</h3>
              <p className="text-[11px] text-muted-foreground">5 active · 2 need attention</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((c) => {
              const cs = stateMap[c.state];
              const isSel = c.id === selected;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelected(c.id)}
                  className={`w-full text-left px-4 py-3 border-b border-border/50 transition relative ${
                    isSel ? "bg-accent/60" : "hover:bg-accent/30"
                  }`}
                >
                  {isSel && <div className="absolute left-0 top-2 bottom-2 w-0.5 rounded-r bg-primary" />}
                  <div className="flex items-start gap-3">
                    <div className="relative shrink-0">
                      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-secondary to-accent grid place-items-center text-xs font-semibold text-foreground border border-border">
                        {c.initials}
                      </div>
                      <span className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-card ${cs.dot}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium text-foreground truncate">{c.name}</span>
                        <span className="text-[10px] text-muted-foreground tabular-nums">{c.time}</span>
                      </div>
                      <div className="text-[11px] text-muted-foreground mb-1">{c.topic}</div>
                      <p className="text-xs text-muted-foreground/90 line-clamp-1">{c.lastMsg}</p>
                    </div>
                    {c.unread && (
                      <span className="ml-1 mt-1 text-[10px] font-semibold h-4 min-w-4 px-1 rounded-full bg-primary text-primary-foreground grid place-items-center">
                        {c.unread}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Chat */}
        <div className="flex flex-col min-h-0">
          <div className="px-5 py-3 border-b border-border flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-secondary to-accent grid place-items-center text-xs font-semibold text-foreground border border-border">
                {active.initials}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-foreground truncate">{active.name}</div>
                <div className="text-[11px] text-muted-foreground truncate">{active.topic} · WhatsApp · +91 98xxx xxx12</div>
              </div>
            </div>
            <span className={`shrink-0 inline-flex items-center gap-1.5 text-[11px] font-medium px-2 py-1 rounded-md border ${s.cls}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
              {s.label}
            </span>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 bg-[radial-gradient(oklch(1_0_0/0.02)_1px,transparent_1px)] [background-size:20px_20px]">
            {messages.map((m, i) => {
              const isLead = m.from === "lead";
              const Icon = m.from === "ai" ? Bot : m.from === "human" ? UserCog : User;
              const tag = m.from === "ai" ? "AI Agent" : m.from === "human" ? "Human Rep" : "";
              const tagCls = m.from === "ai" ? "text-primary bg-primary/10" : "text-success bg-success/10";
              return (
                <div key={i} className={`flex gap-2.5 ${isLead ? "" : "flex-row-reverse"}`}>
                  <div className={`h-7 w-7 rounded-full grid place-items-center shrink-0 mt-0.5 ${
                    isLead ? "bg-secondary border border-border" : m.from === "ai" ? "bg-primary/15" : "bg-success/15"
                  }`}>
                    <Icon className={`h-3.5 w-3.5 ${isLead ? "text-muted-foreground" : m.from === "ai" ? "text-primary" : "text-success"}`} />
                  </div>
                  <div className={`max-w-[78%] ${isLead ? "" : "items-end flex flex-col"}`}>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[11px] font-medium text-foreground">{m.name}</span>
                      {tag && <span className={`text-[9px] px-1 py-px rounded font-semibold uppercase tracking-wider ${tagCls}`}>{tag}</span>}
                    </div>
                    <div className={`px-3.5 py-2 rounded-2xl text-sm leading-relaxed ${
                      isLead
                        ? "bg-secondary/70 text-foreground rounded-tl-sm border border-border"
                        : m.from === "ai"
                          ? "bg-primary text-primary-foreground rounded-tr-sm shadow-[0_4px_16px_-4px_oklch(0.555_0.22_264/0.5)]"
                          : "bg-[oklch(0.22_0.04_160)] text-foreground rounded-tr-sm border border-success/20"
                    }`}>
                      {m.text}
                    </div>
                    <div className="mt-1 flex items-center gap-1 text-[10px] text-muted-foreground">
                      <span className="tabular-nums">{m.time}</span>
                      {!isLead && <CheckCheck className="h-3 w-3 text-primary" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="px-4 py-3 border-t border-border">
            <div className="flex items-center gap-2 rounded-lg border border-border bg-secondary/40 pl-3 pr-1.5 py-1.5 focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-ring/30 transition">
              <Paperclip className="h-4 w-4 text-muted-foreground" />
              <input className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none py-1" placeholder="Type a message or let AI handle it…" />
              <Smile className="h-4 w-4 text-muted-foreground" />
              <button className="h-7 px-3 rounded-md bg-primary text-primary-foreground text-xs font-medium inline-flex items-center gap-1 hover:opacity-90 transition">
                <Send className="h-3 w-3" /> Send
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>AI suggested reply ready · Press Tab to insert</span>
              <span className="inline-flex items-center gap-1.5"><Bot className="h-3 w-3 text-primary" /> Auto-respond enabled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
