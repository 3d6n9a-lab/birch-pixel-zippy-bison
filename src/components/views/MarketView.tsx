import { useMemo, useState } from "react";
import { Glass, Chip, Metric } from "@/components/hud/Glass";
import { useApp, type Cat } from "@/lib/store";

const NAMES: Record<Cat, string> = { trad: "Traditional", dig: "Digital", re: "Real estate" };
const FIELDS: Record<Cat, string[]> = {
  trad: ["Material & origin", "Heritage certificate"],
  dig: ["File / license type", "Chain address"],
  re: ["Cadastral parcel", "Area (m²)"],
};

export function MarketView() {
  const listings = useApp((s) => s.listings);
  const addListing = useApp((s) => s.addListing);
  const credit = useApp((s) => s.credit);
  const setCredit = useApp((s) => s.setCredit);
  const [cat, setCat] = useState<"all" | Cat>("all");
  const [q, setQ] = useState("");
  const [stCat, setStCat] = useState<Cat>("trad");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [hash, setHash] = useState("");
  const [assess, setAssess] = useState<number | null>(null);
  const [swapAmt, setSwapAmt] = useState(100);
  const [pair, setPair] = useState(12450);
  const [hafez, setHafez] = useState("");
  const poems = [
    "Tell the cupbearer to pass the wine — the age put my name in your hands.",
    "No one sees a friend in anyone — what spring can treat this wound?",
    "Plant the tree of friendship, it will bear the heart's desire.",
  ];

  const shown = useMemo(
    () =>
      listings.filter(
        (p) => (cat === "all" || p.cat === cat) && (!q || p.title.toLowerCase().includes(q.toLowerCase())),
      ),
    [listings, cat, q],
  );

  function publish() {
    const h = "CAD-" + Math.random().toString(16).slice(2, 10).toUpperCase();
    setHash(h);
    addListing({
      id: Date.now(),
      title: title || "Untitled asset",
      cat: stCat,
      price: Number(price) || 0,
      date: 1404000,
      score: 70,
      tags: ["New", "Tokenized"],
    });
  }

  return (
    <div className="hud-scroll grid min-h-0 flex-1 gap-3 overflow-auto px-3 pb-2 md:grid-cols-2 xl:grid-cols-3">
      <Glass className="p-4 md:col-span-2 xl:col-span-1">
        <h3 className="mb-2 text-sm font-semibold text-cyan">Explorer</h3>
        <div className="mb-2 flex flex-wrap gap-1">
          {(["all", "trad", "dig", "re"] as const).map((c) => (
            <Chip key={c} active={cat === c} onClick={() => setCat(c)}>
              {c === "all" ? "All" : NAMES[c]}
            </Chip>
          ))}
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Live search…"
          className="mb-3 min-h-11 w-full rounded-xl border border-border bg-bg/40 px-3 text-sm"
        />
        <div className="grid gap-2">
          {shown.slice(0, 6).map((p) => (
            <div key={p.id} className="rounded-xl border border-border bg-bg/30 p-3">
              <div className="text-sm font-semibold">{p.title}</div>
              <Metric label="Nature" value={NAMES[p.cat]} />
              <Metric label="Price" value={`${p.price.toLocaleString()} T`} />
              <Metric label="Engine score" value={String(p.score)} tone="cyan" />
            </div>
          ))}
        </div>
      </Glass>

      <Glass className="p-4">
        <h3 className="mb-2 text-sm font-semibold text-mag">Post Studio</h3>
        <select
          value={stCat}
          onChange={(e) => setStCat(e.target.value as Cat)}
          className="min-h-11 w-full rounded-xl border border-border bg-bg/40 px-3 text-sm"
        >
          <option value="trad">Traditional</option>
          <option value="dig">Digital</option>
          <option value="re">Real estate</option>
        </select>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="mt-2 min-h-11 w-full rounded-xl border border-border bg-bg/40 px-3 text-sm"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price (Toman)"
          className="mt-2 min-h-11 w-full rounded-xl border border-border bg-bg/40 px-3 text-sm"
        />
        {FIELDS[stCat].map((f) => (
          <input
            key={f}
            placeholder={f}
            className="mt-2 min-h-11 w-full rounded-xl border border-border bg-bg/40 px-3 text-sm"
          />
        ))}
        <button type="button" onClick={publish} className="mt-3 min-h-11 w-full rounded-xl bg-cyan font-semibold text-bg">
          Publish + cadastral JSON-LD
        </button>
        {hash ? <p className="mt-2 font-mono text-[11px] text-lime">Cadastral {hash}</p> : null}
      </Glass>

      <Glass className="p-4">
        <h3 className="mb-2 text-sm font-semibold text-cyan">Triple-engine assessment</h3>
        <button
          type="button"
          onClick={() => setAssess(listings[0]?.score ?? 72)}
          className="min-h-11 w-full rounded-xl border border-cyan/40 text-sm text-cyan"
        >
          Run engines
        </button>
        {assess !== null ? (
          <div className="mt-3 space-y-2">
            {[
              ["Audience & sentiment", assess],
              ["Search impressions", Math.min(98, assess + 6)],
              ["Chain integrity", Math.max(55, assess - 4)],
            ].map(([l, v]) => (
              <div key={String(l)}>
                <div className="mb-1 flex justify-between text-[11px] text-muted">
                  {l}
                  <span className="text-fg">{v}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-bg/50">
                  <div className="h-full bg-gradient-to-r from-cyan to-mag" style={{ width: `${v}%` }} />
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </Glass>

      <Glass className="p-4">
        <h3 className="mb-2 text-sm font-semibold text-mag">Logistics hub</h3>
        <div className="grid gap-2">
          {[
            ["Tipax", "Intercity · 30-day escrow"],
            ["Snapp", "Local courier · instant"],
            ["VIP Driver", "3-month trial / 1-year"],
          ].map(([n, d]) => (
            <button
              key={n}
              type="button"
              onClick={() => setCredit(740 + Math.floor(Math.random() * 40))}
              className="rounded-xl border border-border p-3 text-left hover:border-cyan"
            >
              <div className="text-sm font-semibold">{n}</div>
              <div className="text-[11px] text-muted">{d}</div>
            </button>
          ))}
        </div>
        <Metric label="Credit score" value={`${credit} / 850`} tone="cyan" />
        <Metric label="30-day escrow" value="100% locked" />
      </Glass>

      <Glass className="p-4">
        <h3 className="mb-2 text-sm font-semibold text-cyan">OWB Tokenomics</h3>
        <Metric label="OWB / TOMAN" value="12,450" />
        <Metric label="OWB / BRICS" value="1.84" />
        <Metric label="OWB / EUR" value="0.27" />
        <div className="mt-2 flex gap-2">
          <input
            type="number"
            value={swapAmt}
            onChange={(e) => setSwapAmt(Number(e.target.value))}
            className="min-h-11 w-24 rounded-xl border border-border bg-bg/40 px-2 text-sm"
          />
          <select
            value={pair}
            onChange={(e) => setPair(Number(e.target.value))}
            className="min-h-11 flex-1 rounded-xl border border-border bg-bg/40 px-2 text-sm"
          >
            <option value={12450}>OWB → TOMAN</option>
            <option value={1.84}>OWB → BRICS</option>
            <option value={0.27}>OWB → EUR</option>
          </select>
        </div>
        <div className="mt-2 text-sm text-cyan tabular-nums">= {(swapAmt * pair).toLocaleString()}</div>
        <button
          type="button"
          onClick={() => setHafez(poems[Math.floor(Math.random() * poems.length)]!)}
          className="mt-3 min-h-11 w-full rounded-xl border border-mag/40 text-sm text-mag"
        >
          Hafez omen · 2 OWB
        </button>
        {hafez ? <p className="mt-2 text-xs text-muted">{hafez}</p> : null}
      </Glass>

      <Glass className="p-4">
        <h3 className="mb-2 text-sm font-semibold">Weekly inventory audit</h3>
        <AuditTable />
        <p className="mt-2 text-[11px] text-muted">License 1821167 · Enamad 26799686 · 30-day refund</p>
      </Glass>
    </div>
  );
}

function AuditTable() {
  const listings = useApp((s) => s.listings);
  const [rows, setRows] = useState<Array<{ t: string; sys: number; real: number; d: number }> | null>(null);
  return (
    <>
      <button
        type="button"
        onClick={() =>
          setRows(
            listings.slice(0, 5).map((p) => {
              const sys = Math.floor(Math.random() * 50 + 10);
              const real = sys + (Math.random() < 0.3 ? Math.floor(Math.random() * 5 - 2) : 0);
              return { t: p.title, sys, real, d: real - sys };
            }),
          )
        }
        className="min-h-11 w-full rounded-xl border border-border text-sm"
      >
        Run this week
      </button>
      {rows ? (
        <table className="mt-2 w-full text-left text-[11px]">
          <thead className="text-muted">
            <tr>
              <th>Asset</th>
              <th>Sys</th>
              <th>Real</th>
              <th>Δ</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.t} className="border-t border-border/40">
                <td className="py-1">{r.t}</td>
                <td>{r.sys}</td>
                <td>{r.real}</td>
                <td className={r.d ? "text-mag" : "text-lime"}>{r.d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </>
  );
}
