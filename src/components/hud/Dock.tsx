import { Bot, Cpu, LayoutGrid, Settings, Sparkles, Stars, Workflow, ChartSpline } from "lucide-react";
import { useApp, type AgentId, type ViewId } from "@/lib/store";
import { cn } from "@/lib/cn";

const ITEMS: { id: AgentId; label: string; icon: typeof Cpu; view?: ViewId }[] = [
  { id: "nodes", label: "Nodes", icon: LayoutGrid, view: "home" },
  { id: "grok", label: "Grok", icon: Sparkles },
  { id: "gpt", label: "GPT", icon: Stars },
  { id: "gemini", label: "Gemini", icon: Cpu },
  { id: "claude", label: "Claude", icon: Bot },
  { id: "auto", label: "Automation", icon: Workflow, view: "agents" },
  { id: "settings", label: "Analytics", icon: ChartSpline, view: "analytics" },
];

export function Dock() {
  const agent = useApp((s) => s.agent);
  const setAgent = useApp((s) => s.setAgent);
  const setView = useApp((s) => s.setView);
  const triggerMeeting = useApp((s) => s.triggerMeeting);

  return (
    <div className="relative z-40 mx-auto mb-3 flex w-[min(920px,94vw)] items-center justify-center gap-2 rounded-full border border-cyan/30 bg-panel/80 px-3 py-2 shadow-[0_0_40px_rgba(0,229,255,0.18)] backdrop-blur-xl">
      {ITEMS.map((it) => {
        const Icon = it.icon;
        const on = agent === it.id;
        return (
          <button
            key={it.id}
            type="button"
            onClick={() => {
              setAgent(it.id);
              if (it.view) setView(it.view);
            }}
            className={cn(
              "flex min-w-14 flex-col items-center gap-1 rounded-2xl px-2 py-1.5 text-[10px] transition-transform",
              on ? "scale-110 text-cyan" : "text-muted hover:text-fg",
            )}
          >
            <span
              className={cn(
                "grid size-10 place-items-center rounded-2xl border",
                on ? "border-cyan bg-cyan/20 shadow-[0_0_18px_rgba(0,229,255,0.45)]" : "border-border bg-bg/40",
              )}
            >
              <Icon className="size-5" />
            </span>
            {it.label}
          </button>
        );
      })}
      <button
        type="button"
        onClick={triggerMeeting}
        className="flex min-w-14 flex-col items-center gap-1 rounded-2xl px-2 py-1.5 text-[10px] text-lime"
      >
        <span className="grid size-10 place-items-center rounded-2xl border border-lime/50 bg-lime/10">
          <Settings className="size-5" />
        </span>
        Rally
      </button>
    </div>
  );
}
