import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ComponentType } from "react";
import { Sky } from "@/components/atmosphere/Sky";
import { FloatingBots } from "@/components/bots/FloatingBots";
import { TopBar } from "@/components/hud/TopBar";
import { Dock } from "@/components/hud/Dock";
import { HomeView } from "@/components/views/HomeView";
import { StudioView } from "@/components/views/StudioView";
import { DomainsView } from "@/components/views/DomainsView";
import { GatewayView } from "@/components/views/GatewayView";
import { OwbookView } from "@/components/views/OwbookView";
import { MarketView } from "@/components/views/MarketView";
import { AgentsView } from "@/components/views/AgentsView";
import { AnalyticsView } from "@/components/views/AnalyticsView";
import { useApp } from "@/lib/store";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const view = useApp((s) => s.view);
  const [Globe, setGlobe] = useState<ComponentType | null>(null);

  useEffect(() => {
    void import("@/components/scene/GlobeCanvas").then((m) => setGlobe(() => m.GlobeCanvas));
  }, []);

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-bg text-fg">
      <Sky />
      {Globe ? <Globe /> : null}
      <TopBar />
      <main className="relative z-20 mt-2 flex min-h-0 flex-1 flex-col pb-24">
        {view === "home" ? <HomeView /> : null}
        {view === "studio" ? <StudioView /> : null}
        {view === "domains" ? <DomainsView /> : null}
        {view === "gateway" ? <GatewayView /> : null}
        {view === "owbook" ? <OwbookView /> : null}
        {view === "market" ? <MarketView /> : null}
        {view === "agents" ? <AgentsView /> : null}
        {view === "analytics" ? <AnalyticsView /> : null}
      </main>
      <div className="relative z-40 pb-3">
        <Dock />
      </div>
      <FloatingBots />
    </div>
  );
}
