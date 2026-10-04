import { Check, Globe, Link2, Search, Shield } from "lucide-react";
import { Glass, Metric } from "@/components/hud/Glass";
import { useApp } from "@/lib/store";

export function DomainsView() {
  const q = useApp((s) => s.domainQuery);
  const setQ = useApp((s) => s.setDomainQuery);
  const available = q.toLowerCase().endsWith(".dob") || q.length > 3;

  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 px-3 pb-2 lg:grid-cols-[240px_minmax(0,1fr)_280px]">
      <Glass className="hidden p-3 lg:block">
        {["Home", "Domains", "Identity", "Web3 Routing", "Bridge", "Settings"].map((x, i) => (
          <div
            key={x}
            className={`rounded-xl px-3 py-2 text-sm ${i === 1 ? "bg-cyan/15 text-cyan" : "text-muted"}`}
          >
            {x}
          </div>
        ))}
      </Glass>

      <div className="flex flex-col gap-3">
        <Glass className="p-4">
          <div className="mb-1 text-xs uppercase tracking-wider text-muted">Domain Registration</div>
          <div className="mb-3 text-4xl font-extrabold text-cyan">.dob</div>
          <p className="mb-3 max-w-lg text-xs text-muted">
            Decentralized Open Blockchain — the next generation TLD for digital ownership, identity and Web3
            interoperability.
          </p>
          <div className="flex gap-2">
            <div className="flex min-h-12 flex-1 items-center gap-2 rounded-2xl border border-border bg-bg/40 px-3">
              <Search className="size-4 text-muted" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="h-11 flex-1 bg-transparent text-sm outline-none"
              />
            </div>
            <span className="hidden items-center gap-1 rounded-2xl border border-lime/40 px-3 text-xs text-lime sm:flex">
              <Check className="size-3.5" />
              {available ? "Available & Verified on-chain" : "Checking"}
            </span>
          </div>
        </Glass>
        <div className="grid gap-3 md:grid-cols-2">
          <Glass className="p-4">
            <div className="mb-2 flex items-center justify-between text-sm font-semibold">
              DNS Smart Routing <span className="text-[10px] text-lime">ACTIVE</span>
            </div>
            <Metric label="Global Anycast Network" value="Online" tone="lime" />
            <Metric label="Multi-Chain Resolution" value="Online" tone="lime" />
            <Metric label="DDoS Protection" value="Enabled" />
            <Metric label="IPFS + Web3 Routing" value="Active" tone="cyan" />
            <div className="mt-2 text-[10px] text-muted">Latency 12ms · Uptime 99.99%</div>
          </Glass>
          <Glass className="p-4">
            <div className="mb-2 flex items-center justify-between text-sm font-semibold">
              ENS / Handshake Bridge <span className="text-[10px] text-lime">BRIDGE ACTIVE</span>
            </div>
            <Metric label="ENS Integration" value="Connected" tone="lime" />
            <Metric label="Handshake Support" value="Connected" />
            <Metric label="Bidirectional Sync" value="Active" />
            <Metric label="Name Resolution" value="Operational" tone="cyan" />
            <div className="mt-3 flex gap-3 text-[11px] text-muted">
              <span className="flex items-center gap-1">
                <Link2 className="size-3" /> ENS
              </span>
              <span>Handshake</span>
            </div>
          </Glass>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Glass className="p-4">
          <div className="mb-2 flex items-center justify-between text-sm font-semibold">
            Base Sepolia Escrow <span className="text-[10px] text-lime">VERIFIED</span>
          </div>
          <Metric label="Escrow Contract" value="Deployed" tone="lime" />
          <Metric label="Domain Locked" value="Confirmed" />
          <Metric label="Base Sepolia Network" value="Active" />
          <Metric label="Verification Status" value="On-chain" tone="cyan" />
          <div className="mt-2 font-mono text-[10px] text-muted">Tx 0x9f4e…3c7a</div>
        </Glass>
        <Glass className="p-4">
          <div className="mb-2 text-sm font-semibold">Domain Details</div>
          <Metric label="Domain Name" value={q || "orbwebs.dob"} />
          <Metric label="Status" value="Available & Verified" tone="lime" />
          <Metric label="TLD" value=".dob" />
          <Metric label="Chain" value="Base Sepolia" />
          <Metric label="Registration" value="Not Registered" />
          <Metric label="Ownership" value="Open" />
        </Glass>
        <Glass className="glow-lime p-4" glow="lime">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Shield className="size-4 text-lime" /> Own your digital future
          </div>
          <p className="mt-1 text-[11px] text-muted">.dob · BAZARID Identity Network · Web3</p>
        </Glass>
        <div className="hidden text-center xl:block">
          <Globe className="mx-auto size-8 text-cyan/40" />
        </div>
      </div>
    </div>
  );
}
