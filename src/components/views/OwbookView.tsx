import { BookOpen } from "lucide-react";
import { Glass, Metric } from "@/components/hud/Glass";

const TITLES = ["Atlas of Light", "Castle Protocol", "Root Ledger", "Sigil Market", "Owbook Core"];

export function OwbookView() {
  return (
    <div className="relative flex min-h-0 flex-1 flex-col px-3 pb-2">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <div className="text-xs tracking-[0.3em] text-muted">OWBOOK</div>
          <div className="text-sm font-semibold">NFT Library · Digital Books Collection</div>
        </div>
        <Glass className="px-3 py-2 text-[11px]">
          <div className="tabular-nums text-fg">Assets 12,843</div>
          <div className="text-muted">Online 3,672 · ETH / Polygon</div>
        </Glass>
      </div>
      <div className="relative grid flex-1 place-items-center">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {TITLES.map((t, i) => (
            <div
              key={t}
              className="glass-panel glow-cyan flex h-36 w-24 flex-col items-center justify-center p-2 md:h-44 md:w-28"
              style={{ transform: `translateY(${i === 2 ? -12 : (i % 2) * 10}px)` }}
            >
              <BookOpen className="mb-2 size-8 text-cyan" />
              <div className="text-center text-[10px] font-semibold">{t}</div>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
          <div className="text-2xl font-extrabold tracking-[0.35em]">OWBOOK</div>
          <div className="text-[10px] text-muted">NFT LIBRARY · OWN A BOOK · OWN A UNIVERSE</div>
        </div>
      </div>
      <div className="mt-2 grid gap-3 md:grid-cols-3">
        <Glass className="p-3">
          <div className="mb-1 text-xs font-semibold">Network Nodes</div>
          <Metric label="Ethereum" value="Online" tone="lime" />
          <Metric label="Polygon" value="Online" tone="lime" />
          <Metric label="Arbitrum" value="Online" />
          <Metric label="Solana" value="Online" tone="cyan" />
        </Glass>
        <Glass className="p-3">
          <div className="mb-1 text-xs font-semibold">Data Stream</div>
          <Metric label="NFT Minting" value="100%" tone="lime" />
          <Metric label="Metadata Sync" value="100%" />
          <Metric label="IPFS Storage" value="100%" />
          <Metric label="Network Load" value="32%" />
        </Glass>
        <Glass className="p-3 text-xs text-muted">
          Read · Collect · Explore. Books are tokenized artifacts on the BAZARID identity lattice.
        </Glass>
      </div>
    </div>
  );
}
