import { Glass, Metric } from "@/components/hud/Glass";

const ROWS = [
  { type: "A", name: "@", content: "185.199.110.42", proxy: true },
  { type: "CNAME", name: "www", content: "bazarid.ir", proxy: true },
  { type: "CNAME", name: "*.dob", content: "bazarid-gateway.dwebs.dob", proxy: true },
];

export function GatewayView() {
  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 px-3 pb-2 lg:grid-cols-[200px_minmax(0,1fr)_260px]">
      <Glass className="hidden p-2 lg:block">
        {[
          "Overview",
          "Analytics",
          "DNS",
          "Email",
          "SSL/TLS",
          "Security",
          "Access",
          "Speed",
          "Caching",
          "Workers",
          "Rules",
          "Network",
          "Traffic",
        ].map((x, i) => (
          <div key={x} className={`rounded-lg px-3 py-2 text-xs ${i === 2 ? "bg-cyan/15 text-cyan" : "text-muted"}`}>
            {x}
          </div>
        ))}
      </Glass>

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <div className="text-lg font-bold">bazarid.ir</div>
            <div className="text-xs text-muted">DNS management</div>
          </div>
          <Glass className="px-3 py-2 text-[11px]">
            <div className="font-semibold text-lime">Base Sepolia Escrow · CONNECTED</div>
            <div className="font-mono text-muted">Chain 11155111 · 0x9f4a…3c7a</div>
          </Glass>
        </div>
        <Glass className="flex items-center justify-between p-4">
          <div>
            <div className="text-sm font-semibold">DNS is active</div>
            <div className="text-xs text-muted">All changes are deployed and live.</div>
          </div>
          <div className="text-right text-[11px] text-muted">
            dara.ns.cloudflare.com
            <br />
            lila.ns.cloudflare.com
          </div>
        </Glass>
        <Glass className="p-4">
          <div className="mb-3 text-sm font-semibold">DNS Records</div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[540px] text-left text-xs">
              <thead className="text-muted">
                <tr>
                  <th className="pb-2 font-medium">Type</th>
                  <th className="pb-2 font-medium">Name</th>
                  <th className="pb-2 font-medium">Content</th>
                  <th className="pb-2 font-medium">Proxy</th>
                  <th className="pb-2 font-medium">TTL</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.name} className="border-t border-border/50">
                    <td className="py-2 text-cyan">{r.type}</td>
                    <td>{r.name}</td>
                    <td className="font-mono">{r.content}</td>
                    <td className="text-gold">Proxied</td>
                    <td className="text-muted">Auto</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Glass>
        <Glass className="p-4">
          <div className="text-sm font-semibold text-cyan">BAZARID Web3 Domain Gateway</div>
          <div className="mt-2 flex flex-wrap gap-4 text-[11px] text-muted">
            <span>Wallets Connected</span>
            <span>Domains Active</span>
            <span>Resolve On-chain</span>
          </div>
        </Glass>
      </div>

      <div className="flex flex-col gap-3">
        <Glass className="p-4">
          <div className="mb-1 text-sm font-semibold">Web3 Identity · Domain · Ownership</div>
          <p className="text-[11px] text-muted">Decentralized globe overlay for .dob resolution.</p>
        </Glass>
        <Glass className="p-4">
          <div className="mb-2 flex items-center justify-between text-sm font-semibold">
            SSL/TLS <span className="text-[10px] text-lime">ACTIVE</span>
          </div>
          <Metric label="Certificate" value="Valid" tone="lime" />
          <Metric label="HSTS" value="Enabled" />
          <Metric label="TLS" value="1.3" />
          <Metric label="Always Encrypted" value="On" tone="cyan" />
        </Glass>
        <Glass className="p-4">
          <div className="mb-2 text-sm font-semibold">Decentralized .dob Resolver</div>
          <Metric label="Status" value="Operational" tone="lime" />
          <Metric label="Resolver Network" value="BAZARID Gateway" />
          <Metric label="TLD" value=".dob" />
          <Metric label="Health" value="Healthy" tone="lime" />
        </Glass>
      </div>
    </div>
  );
}
