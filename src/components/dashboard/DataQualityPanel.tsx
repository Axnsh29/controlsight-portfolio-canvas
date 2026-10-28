import { AlertCircle, AlertTriangle, CheckCircle2, Database, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { DashboardPanel } from "./DashboardPanel";

const icons = { doc: FileText, check: CheckCircle2, warn: AlertTriangle, alert: AlertCircle };
const tone = { blue: "text-primary", green: "text-success", amber: "text-warning", red: "text-danger" };

interface Props {
  metrics: { label: string; value: string; icon: keyof typeof icons; tone: keyof typeof tone }[];
  validationQuality: string;
  sources: { name: string; pct: number }[];
}

export function DataQualityPanel({ metrics, validationQuality, sources }: Props) {
  return (
    <DashboardPanel
      title="Data Quality & Validation"
      subtitle="Data ingestion and validation health across all sources."
      linkLabel="View details"
      icon={<Database className="h-7 w-7 text-primary" />}
    >
      <div className="grid grid-cols-4 gap-2">
        {metrics.map((m) => {
          const Icon = icons[m.icon];
          return (
            <div key={m.label} className="flex items-start gap-1.5">
              <Icon className={cn("mt-0.5 h-4 w-4 shrink-0", tone[m.tone])} />
              <div className="min-w-0">
                <div className="text-[16px] font-bold leading-none text-foreground">{m.value}</div>
                <div className="mt-1 truncate text-[10.5px] text-muted-foreground">{m.label}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-lg bg-success-soft px-3 py-1.5">
        <span className="text-[11.5px] font-medium text-foreground">Validation Quality</span>
        <span className="text-[13px] font-bold text-success">{validationQuality}</span>
      </div>
      <h3 className="mt-3 text-[12.5px] font-semibold text-foreground">Records by Source System</h3>
      <ul className="mt-2 space-y-2">
        {sources.map((s) => (
          <li key={s.name} className="flex items-center gap-3 text-[11.5px]">
            <span className="w-[110px] shrink-0 text-muted-foreground">{s.name}</span>
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary" style={{ width: `${s.pct}%` }} />
            </div>
            <span className="w-9 text-right tabular-nums text-foreground">{s.pct}%</span>
          </li>
        ))}
      </ul>
    </DashboardPanel>
  );
}
