import { CheckSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ActionStatus } from "@/data/portfolioData";
import { DashboardPanel } from "./DashboardPanel";

const pill: Record<ActionStatus, string> = {
  Overdue: "bg-danger-soft text-danger",
  "In Progress": "bg-info-soft text-primary",
  Open: "bg-warning-soft text-warning",
  "Not Started": "bg-slate-soft text-muted-foreground",
};

export function NextActions({ rows }: { rows: { action: string; owner: string; due: string; status: ActionStatus }[] }) {
  return (
    <DashboardPanel
      title="Next Actions"
      subtitle="Key actions requiring focus."
      linkLabel="View all actions"
      icon={<span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground"><CheckSquare className="h-4 w-4" /></span>}
    >
      <table className="w-full table-fixed text-left">
        <colgroup><col /><col className="w-[72px]" /><col className="w-[86px]" /><col className="w-[92px]" /></colgroup>
        <thead>
          <tr className="border-b border-border bg-muted/60 text-[11.5px] font-semibold text-foreground">
            <th className="py-2 pl-2">Action</th><th>Owner</th><th>Due Date</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.action} className="cursor-pointer border-b border-border transition-colors last:border-0 hover:bg-accent/60">
              <td className="py-2 pl-2 pr-3 text-[12px] leading-snug text-foreground">{r.action}</td>
              <td className="whitespace-nowrap text-[11.5px] text-muted-foreground">{r.owner}</td>
              <td className="whitespace-nowrap text-[11.5px] text-muted-foreground">{r.due}</td>
              <td><span className={cn("inline-block whitespace-nowrap rounded-md px-2 py-1 text-[11px] font-semibold", pill[r.status])}>{r.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardPanel>
  );
}
