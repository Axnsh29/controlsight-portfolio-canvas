import { useId } from "react";
import { ArrowDown, ArrowUp, BarChart3, Coins, PieChart, ShieldCheck, Target, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Kpi } from "@/data/portfolioData";
import { toneIcon } from "./DashboardPanel";

const icons = { budget: Coins, cost: BarChart3, forecast: TrendingUp, variance: Target, progress: PieChart, quality: ShieldCheck };
const sparkColor = { blue: "var(--primary)", green: "var(--success)", red: "var(--danger)" };

function Sparkline({ data, color }: { data: number[]; color: string }) {
  const id = useId();
  const w = 84, h = 30;
  const max = Math.max(...data), min = Math.min(...data);
  const pts = data.map((v, i) => [(i / (data.length - 1)) * w, h - 2 - ((v - min) / (max - min)) * (h - 4)]);
  const line = pts.map((p) => p.join(",")).join(" ");
  return (
    <svg width={w} height={h} className="shrink-0">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.22" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,${h} ${line} ${w},${h}`} fill={`url(#${id})`} />
      <polyline points={line} fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function KpiCard({ kpi }: { kpi: Kpi }) {
  const Icon = icons[kpi.icon];
  const Arrow = kpi.trendDir === "up" ? ArrowUp : ArrowDown;
  return (
    <div className="panel p-4 hover:-translate-y-0.5">
      <div className="flex items-center gap-2.5">
        <span className={cn("flex h-7 w-7 items-center justify-center rounded-md", toneIcon[kpi.iconTone])}>
          <Icon className="h-4 w-4" />
        </span>
        <span className="truncate text-[12.5px] font-medium text-foreground">{kpi.label}</span>
      </div>
      <div className="mt-3 flex items-baseline gap-2.5">
        <span className="whitespace-nowrap text-[25px] font-bold leading-none tracking-tight text-foreground">{kpi.value}</span>
        <span className={cn("flex items-center gap-0.5 whitespace-nowrap text-[11.5px] font-semibold", kpi.trendTone === "good" ? "text-success" : "text-danger")}>
          <Arrow className="h-3 w-3" strokeWidth={2.5} />{kpi.trend}
        </span>
      </div>
      <div className="mt-2 flex items-end justify-between gap-2">
        <span className="truncate pb-1 text-[11.5px] text-muted-foreground">
          {kpi.caption}
          {kpi.captionHighlight && <span className="text-danger">{kpi.captionHighlight}</span>}
        </span>
        <Sparkline data={kpi.spark} color={sparkColor[kpi.sparkTone]} />
      </div>
    </div>
  );
}

export function KpiGrid({ kpis }: { kpis: Kpi[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 2xl:grid-cols-6">
      {kpis.map((k) => <KpiCard key={k.id} kpi={k} />)}
    </div>
  );
}
