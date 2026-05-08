import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";
import { MetricCards } from "@/components/dashboard/MetricCards";
import { Conversations } from "@/components/dashboard/Conversations";
import { IntelligencePanel } from "@/components/dashboard/IntelligencePanel";
import { HitlEscalation } from "@/components/dashboard/HitlEscalation";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Scale100x.AI — WhatsApp AI Agent Panel" },
      { name: "description", content: "Premium dashboard for managing WhatsApp AI agents, lead intelligence and human-in-the-loop escalations." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background text-foreground dark">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="flex-1 p-6 space-y-6 overflow-x-hidden">
          <div className="flex items-end justify-between flex-wrap gap-3">
            <div>
              <h1 className="text-xl font-semibold tracking-tight text-foreground">Dashboard</h1>
              <p className="text-sm text-muted-foreground mt-0.5">Real-time view of your AI agents, leads, and escalations.</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="h-8 px-3 rounded-md border border-border text-xs font-medium text-foreground hover:bg-accent transition">Last 24 hours</button>
              <button className="h-8 px-3 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition">Export Report</button>
            </div>
          </div>

          <MetricCards />

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6">
            <div className="space-y-6 min-w-0">
              <Conversations />
              <HitlEscalation />
            </div>
            <div className="space-y-6">
              <IntelligencePanel />
              <ActivityFeed />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
