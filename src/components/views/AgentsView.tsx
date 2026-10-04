import { Glass } from "@/components/hud/Glass";
import { useApp } from "@/lib/store";

export function AgentsView() {
  const chat = useApp((s) => s.chat);
  const pushChat = useApp((s) => s.pushChat);
  const agent = useApp((s) => s.agent);

  return (
    <div className="grid min-h-0 flex-1 gap-3 px-3 pb-2 lg:grid-cols-[minmax(0,1.4fr)_320px]">
      <Glass className="flex min-h-0 flex-col p-4">
        <div className="mb-2 text-sm font-semibold">Agent mesh · {agent.toUpperCase()}</div>
        <p className="mb-3 text-xs text-muted">
          ORBWEBS, US and SPIDER exchange telemetry. Select a model in the dock to route prompts.
        </p>
        <div className="hud-scroll min-h-0 flex-1 space-y-2 overflow-auto">
          {chat.map((c) => (
            <div key={c.id} className="rounded-xl border border-border bg-bg/30 px-3 py-2 text-xs">
              <span className="mr-2 font-semibold uppercase text-cyan">{c.from}</span>
              {c.text}
            </div>
          ))}
        </div>
        <form
          className="mt-3 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const text = String(fd.get("q") || "").trim();
            if (!text) return;
            pushChat({ from: "you", text });
            pushChat({
              from: agent === "auto" ? "us" : "orb",
              text: `Routed via ${agent}: acknowledged “${text.slice(0, 80)}”.`,
            });
            e.currentTarget.reset();
          }}
        >
          <input
            name="q"
            placeholder="Message the mesh…"
            className="min-h-11 flex-1 rounded-xl border border-border bg-bg/40 px-3 text-sm"
          />
          <button type="submit" className="min-h-11 rounded-xl bg-cyan px-4 font-semibold text-bg">
            Send
          </button>
        </form>
      </Glass>
      <div className="flex flex-col gap-3">
        <Glass className="p-4 text-xs text-muted">
          <div className="mb-2 text-sm font-semibold text-fg">Movement doctrine</div>
          Idle: ORBWEBS northwest, US northeast, SPIDER offset from the cursor (~96px) and never collides. Patrol
          bob. Rally (dock) pulls all three into a triangle over the globe. Play: paper darts from corners, magenta
          shock rings on the landing. Harassment: SPIDER silk-lines the other two. Camouflage: SPIDER dissolves into
          the ORBWEBS web sigil, then the games start. Rain: they cluster under a silk canopy.
        </Glass>
        <Glass className="p-4">
          <div className="text-sm font-semibold">ORBWEBS mark</div>
          <p className="mt-1 text-xs text-muted">
            An orb at the hub of a radial identity web — cadastral threads, escrow rings, discovery arcs. When SPIDER
            hides, that same radial web is the cloak.
          </p>
        </Glass>
      </div>
    </div>
  );
}
