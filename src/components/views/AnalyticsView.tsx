import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Glass, Metric } from "@/components/hud/Glass";

const data = [
  { t: "Mon", v: 4200 },
  { t: "Tue", v: 5100 },
  { t: "Wed", v: 4800 },
  { t: "Thu", v: 6300 },
  { t: "Fri", v: 7100 },
  { t: "Sat", v: 6400 },
  { t: "Sun", v: 7800 },
];

export function AnalyticsView() {
  return (
    <div className="grid min-h-0 flex-1 gap-3 px-3 pb-2 md:grid-cols-3">
      <Glass className="p-4 md:col-span-2">
        <div className="mb-2 text-sm font-semibold">Global discovery impressions</div>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00e5ff" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="#00e5ff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="t" stroke="#8ea3bf" fontSize={11} />
              <YAxis stroke="#8ea3bf" fontSize={11} />
              <Tooltip
                contentStyle={{ background: "#08162c", border: "1px solid rgba(0,229,255,.3)", borderRadius: 12 }}
              />
              <Area type="monotone" dataKey="v" stroke="#00e5ff" fill="url(#g)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Glass>
      <Glass className="p-4">
        <Metric label="Live preview" value="Online" tone="lime" />
        <Metric label="Global traffic" value="+32.4%" tone="cyan" />
        <Metric label="Agent success" value="99.8%" />
        <Metric label="Escrow TVL" value="100% locked" />
        <Metric label=".dob resolver" value="Healthy" tone="lime" />
      </Glass>
    </div>
  );
}
