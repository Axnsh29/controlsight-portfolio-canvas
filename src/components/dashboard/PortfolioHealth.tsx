import { HeartPulse } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";
import { DashboardPanel } from "./DashboardPanel";

type Tone = "red" | "amber" | "blue" | "green";
const fill: Record<Tone, string> = { red: "var(--danger)", amber: "var(--warning)", blue: "var(--primary)", green: "var(--success)" };
const dot: Record<Tone, string> = { red: "bg-danger", amber: "bg-warning", blue: "bg-primary", green: "bg-success" };

export function PortfolioHealth({ total, slices }: { total: number; slices: { name: string; value: number; pct: string; tone: Tone }[] }) {
  const visible = slices.filter((s) => s.value > 0);
  return (
    <DashboardPanel
      title="Portfolio Health"
      subtitle="Project status across the portfolio."
      linkLabel="View details"
      icon={<HeartPulse className="h-7 w-7 text-success" />}
    >
      <div className="relative mx-auto h-[170px] w-[170px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={visible} dataKey="value" innerRadius={52} outerRadius={82} startAngle={90} endAngle={-270} stroke="var(--card)" strokeWidth={2} isAnimationActive={false}>
              {visible.map((s) => <Cell key={s.name} fill={fill[s.tone]} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[26px] font-bold leading-none text-foreground">{total}</span>
          <span className="mt-1 text-[10.5px] text-muted-foreground">Total Projects</span>
        </div>
      </div>
      <ul className="mt-auto space-y-1.5 px-2 pt-3">
        {slices.map((s) => (
          <li key={s.name} className="flex items-center text-[12px]">
            <span className={cn("mr-2.5 h-2.5 w-2.5 rounded-full", dot[s.tone])} />
            <span className="text-foreground">{s.name}</span>
            <span className="ml-auto tabular-nums font-medium text-foreground">{s.value} ({s.pct})</span>
          </li>
        ))}
      </ul>
    </DashboardPanel>
  );
}
