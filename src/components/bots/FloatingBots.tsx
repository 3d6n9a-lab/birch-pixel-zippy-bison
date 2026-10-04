import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { OrbwebsMark, SpiderMark, SpiderWebMark, UsMark } from "@/components/bots/icons";
import { useApp, type BotId } from "@/lib/store";
import { cn } from "@/lib/cn";

const LINES: Record<BotId, string[]> = {
  orb: ["Mesh stable.", "ORBWEBS lattice locked.", "Cadastral hash verified.", "Escrow ping OK."],
  us: ["US corridor open.", "We stay linked.", "Logistics hop synced.", "Identity bridge live."],
  spider: ["?? who is there", "silk out…", "not too close", "hide in the web?", "games?"],
};

function PaperPlane() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 11.5 21 3l-7.5 18-2.7-6.8L3 11.5Z" fill="#00e5ff" opacity="0.9" />
    </svg>
  );
}

export function FloatingBots() {
  const meeting = useApp((s) => s.meeting);
  const endMeeting = useApp((s) => s.endMeeting);
  const pushChat = useApp((s) => s.pushChat);
  const spiderRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 200, y: 400 });
  const [hide, setHide] = useState(false);
  const [bubble, setBubble] = useState<{ who: BotId; text: string } | null>(null);
  const [fx, setFx] = useState<Array<{ id: string; kind: "rocket" | "bomb" | "web"; x: number; y: number; tx?: number; ty?: number }>>(
    [],
  );

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    let raf = 0;
    const loop = () => {
      const el = spiderRef.current;
      if (el && !hide && !meeting) {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = mouse.current.x - cx;
        const dy = mouse.current.y - cy;
        const dist = Math.hypot(dx, dy);
        if (dist > 110) {
          const a = Math.atan2(dy, dx);
          const tx = mouse.current.x - Math.cos(a) * 96;
          const ty = mouse.current.y - Math.sin(a) * 96;
          el.style.left = `${Math.max(12, Math.min(window.innerWidth - 76, tx))}px`;
          el.style.top = `${Math.max(64, Math.min(window.innerHeight - 140, ty))}px`;
          el.style.bottom = "auto";
          el.style.transform = "none";
          if (Math.random() < 0.04) {
            spawn("web", cx, cy, mouse.current.x, mouse.current.y);
          }
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [hide, meeting]);

  function spawn(
    kind: "rocket" | "bomb" | "web",
    x: number,
    y: number,
    tx = (Math.random() - 0.5) * 480,
    ty = -180 - Math.random() * 220,
  ) {
    const id = crypto.randomUUID();
    setFx((f) => [...f.slice(-16), { id, kind, x, y, tx, ty }]);
    setTimeout(() => setFx((f) => f.filter((p) => p.id !== id)), 1400);
  }

  function speak(who: BotId) {
    const text = LINES[who][Math.floor(Math.random() * LINES[who].length)]!;
    setBubble({ who, text });
    pushChat({ from: who, text });
    setTimeout(() => setBubble((b) => (b?.text === text ? null : b)), 2600);
  }

  useEffect(() => {
    const t = setInterval(() => {
      const who = (["orb", "us", "spider"] as BotId[])[Math.floor(Math.random() * 3)]!;
      speak(who);
    }, 11000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      if (meeting) return;
      const r = Math.random();
      if (r < 0.3) {
        spawn("rocket", 80, 120);
        spawn("rocket", window.innerWidth - 90, 130);
      } else if (r < 0.45) {
        spawn("bomb", window.innerWidth / 2, window.innerHeight * 0.42);
      } else if (r < 0.7) {
        spawn("web", window.innerWidth * 0.5, window.innerHeight * 0.7, 80, 140);
      }
    }, 16000);
    return () => clearInterval(t);
  }, [meeting]);

  useEffect(() => {
    if (!meeting) return;
    speak("orb");
    const a = setTimeout(() => speak("us"), 700);
    const b = setTimeout(() => speak("spider"), 1400);
    const c = setTimeout(() => {
      setHide(true);
      speak("spider");
      spawn("rocket", window.innerWidth / 2 - 80, window.innerHeight / 2);
      spawn("rocket", window.innerWidth / 2 + 80, window.innerHeight / 2);
      spawn("bomb", window.innerWidth / 2, window.innerHeight * 0.38);
    }, 3200);
    const d = setTimeout(() => {
      setHide(false);
      endMeeting();
    }, 7800);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
      clearTimeout(c);
      clearTimeout(d);
    };
  }, [meeting, endMeeting]);

  const pos = meeting
    ? {
        orb: { left: "calc(50% - 90px)", top: "42%" },
        us: { left: "calc(50% + 30px)", top: "42%" },
        spider: { left: "calc(50% - 28px)", top: "56%" },
      }
    : {
        orb: { left: "18px", top: "22%" },
        us: { right: "18px", top: "22%", left: "auto" },
        spider: { left: "50%", bottom: "118px" },
      };

  return (
    <>
      <BotShell
        id="orb"
        label="ORBWEBS"
        style={pos.orb}
        onClick={() => speak("orb")}
        bubble={bubble?.who === "orb" ? bubble.text : null}
      >
        <OrbwebsMark className="size-9" />
      </BotShell>
      <BotShell
        id="us"
        label="US"
        style={pos.us}
        onClick={() => speak("us")}
        bubble={bubble?.who === "us" ? bubble.text : null}
      >
        <UsMark className="size-9" />
      </BotShell>
      <div
        ref={spiderRef}
        className={cn(
          "float-bot fixed z-50 flex size-16 items-center justify-center rounded-full border border-lime/40 bg-panel/80 shadow-[0_0_22px_rgba(157,255,122,0.25)] transition-all duration-500",
          hide && "border-cyan/30 bg-transparent shadow-none",
        )}
        style={meeting || hide ? pos.spider : { left: "50%", bottom: "118px", transform: "translateX(-50%)" }}
        onClick={() => speak("spider")}
        role="button"
        tabIndex={0}
        aria-label="SPIDER"
      >
        {hide ? <SpiderWebMark className="size-10 opacity-80" /> : <SpiderMark className="size-9" />}
        <span className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-bg/70 px-2 py-0.5 text-[10px] text-lime">
          SPIDER 🌱🕸️
        </span>
        {bubble?.who === "spider" ? <Bubble text={bubble.text} /> : null}
      </div>

      {fx.map((p) =>
        p.kind === "bomb" ? (
          <span
            key={p.id}
            className="pointer-events-none fixed z-40 size-10 rounded-full bg-[radial-gradient(circle,#ff2fd6,transparent_70%)]"
            style={{ left: p.x, top: p.y, animation: "boom 0.7s ease-out forwards" }}
          />
        ) : p.kind === "web" ? (
          <span
            key={p.id}
            className="pointer-events-none fixed z-40 w-0.5 origin-top bg-gradient-to-b from-lime/70 to-transparent"
            style={{
              left: p.x,
              top: p.y,
              height: 80,
              transform: `rotate(${Math.atan2((p.ty ?? 0) - p.y, (p.tx ?? 0) - p.x) * 57}deg)`,
              animation: "web-fade 1.1s forwards",
            }}
          />
        ) : (
          <span
            key={p.id}
            className="pointer-events-none fixed z-40"
            style={{
              left: p.x,
              top: p.y,
              animation: "fly-out 1.8s ease-out forwards",
              ["--tx" as string]: `${p.tx}px`,
              ["--ty" as string]: `${p.ty}px`,
              ["--rot" as string]: `${Math.random() * 400 - 200}deg`,
            }}
          >
            <PaperPlane />
          </span>
        ),
      )}
    </>
  );
}

function BotShell({
  id,
  label,
  style,
  onClick,
  bubble,
  children,
}: {
  id: string;
  label: string;
  style: CSSProperties;
  onClick: () => void;
  bubble: string | null;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      id={`bot-${id}`}
      onClick={onClick}
      className="float-bot fixed z-50 flex size-16 items-center justify-center rounded-full border border-cyan/35 bg-panel/80 shadow-[0_0_22px_rgba(0,229,255,0.22)] transition-all duration-500"
      style={style}
      aria-label={label}
    >
      {children}
      <span className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-bg/70 px-2 py-0.5 text-[10px] text-fg">
        {label}
      </span>
      {bubble ? <Bubble text={bubble} /> : null}
    </button>
  );
}

function Bubble({ text }: { text: string }) {
  return (
    <span className="glass-panel absolute bottom-[72px] left-1/2 z-60 w-36 -translate-x-1/2 px-2 py-1.5 text-center text-[11px] text-fg">
      {text}
    </span>
  );
}
