import { BarChart3 } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { DashboardPanel } from "./DashboardPanel";

type Row = { name: string; budget: number; fac: number };

function Tick({ x, y, payload }: { x?: number; y?: number; payload?: { value: string } }) {
  const lines = (payload?.value ?? "").split("\n");
  return (
    <text x={x} y={(y ?? 0) + 12} textAnchor="middle" fontSize={11} fill="var(--muted-foreground)">
      {lines.map((l, i) => <tspan key={i} x={x} dy={i ? 13 : 0}>{l}</tspan>)}
    </text>
  );
}

// Custom FAC bar that also draws a red variance marker at its top when overrunning.
function FacBar(props: { x?: number; y?: number; width?: number; height?: number; payload?: Row }) {
  const { x = 0, y = 0, width = 0, height = 0, payload } = props;
  const over = payload && payload.fac > payload.budget;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={2} fill="var(--brand-light)" />
      {over && <circle cx={x - 3} cy={y + 14} r={5} fill="var(--danger)" stroke="var(--card)" strokeWidth={1.5} />}
    </g>
  );
}

export function BudgetForecastChart({ data }: { data: Row[] }) {
  return (
    <DashboardPanel
      title="Budget vs Forecast at Completion"
      subtitle="Approved budget vs. forecast at completion by project."
      linkLabel="View details"
      icon={<span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground"><BarChart3 className="h-4 w-4" /></span>}
    >
      <div className="min-h-[230px] flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 4, left: -6, bottom: 4 }} barGap={3} barCategoryGap="22%">
            <CartesianGrid vertical={false} stroke="var(--border)" />
            <XAxis dataKey="name" tick={<Tick />} tickLine={false} axisLine={{ stroke: "var(--border)" }} interval={0} height={36} />
            <YAxis ticks={[0, 20, 40, 60, 80, 100, 120]} domain={[0, 120]} tickFormatter={(v) => `£${v}m`} tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} tickLine={false} axisLine={false} width={46} />
            <Bar dataKey="budget" fill="var(--primary)" radius={[2, 2, 0, 0]} isAnimationActive={false} />
            <Bar dataKey="fac" shape={<FacBar />} isAnimationActive={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 flex items-center justify-center gap-5 text-[11.5px] text-foreground">
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-primary" />Approved Budget</span>
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-brand-light" />Forecast at Completion</span>
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-danger" />Variance</span>
      </div>
    </DashboardPanel>
  );
}
