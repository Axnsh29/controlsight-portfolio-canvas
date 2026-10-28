import { AlertCircle, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AttentionRow } from "@/data/portfolioData";
import { DashboardPanel } from "./DashboardPanel";

function scoreClass(s: number) {
  if (s >= 90) return "bg-danger-soft text-danger";
  if (s >= 70) return "bg-warning-soft text-warning";
  return "bg-warning-softer text-warning";
}

export function ManagementAttention({ rows }: { rows: AttentionRow[] }) {
  return (
    <DashboardPanel
      title="Management Attention"
      subtitle="Projects ranked by combined risk, forecast variance, schedule and data quality signals."
      linkLabel="View all projects"
      icon={<AlertCircle className="h-7 w-7 fill-danger text-card" strokeWidth={2.2} />}
    >
      <table className="w-full table-fixed text-left">
        <colgroup>
          <col className="w-[30px]" /><col /><col className="w-[64px]" /><col className="w-[130px]" /><col className="w-[72px]" /><col className="w-[24px]" />
        </colgroup>
        <thead>
          <tr className="border-b border-border bg-muted/60 text-[11.5px] font-semibold text-foreground">
            <th className="py-2 pl-2">#</th><th>Project</th><th>Score</th><th>Primary Driver</th><th>Variance</th><th />
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.rank} className="cursor-pointer border-b border-border transition-colors last:border-0 hover:bg-accent/60">
              <td className="py-2.5 pl-2 text-[12.5px] font-medium text-foreground">{r.rank}</td>
              <td className="py-2.5 pr-2">
                <div className="truncate text-[12.5px] font-semibold text-foreground">{r.project}</div>
                <div className="truncate text-[11px] text-muted-foreground">{r.sector} <span className="mx-1 text-border">|</span> {r.region}</div>
              </td>
              <td><span className={cn("inline-flex h-6 w-10 items-center justify-center rounded-md text-[12.5px] font-bold", scoreClass(r.score))}>{r.score}</span></td>
              <td className="truncate pr-2 text-[12px] text-muted-foreground">{r.driver}</td>
              <td className="text-[12px] font-semibold leading-tight text-danger">
                {r.variance}<div className="text-[11px] font-medium">{r.variancePct}</div>
              </td>
              <td><ChevronRight className="h-4 w-4 text-muted-foreground" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardPanel>
  );
}
