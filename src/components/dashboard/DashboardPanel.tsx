import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const toneIcon = {
  blue: "bg-info-soft text-primary",
  green: "bg-success-soft text-success",
  red: "bg-danger-soft text-danger",
  amber: "bg-warning-soft text-warning",
  violet: "bg-violet-soft text-violet",
} as const;

interface Props {
  title: string;
  subtitle: string;
  icon: ReactNode;
  linkLabel?: string;
  children: ReactNode;
  className?: string;
}

export function DashboardPanel({ title, subtitle, icon, linkLabel, children, className }: Props) {
  return (
    <section className={cn("panel flex flex-col p-4", className)}>
      <header className="mb-3 flex items-start gap-3">
        <div className="mt-0.5 shrink-0">{icon}</div>
        <div className="min-w-0 flex-1">
          <h2 className="text-[16px] font-bold leading-tight text-foreground">{title}</h2>
          <p className="mt-1 text-[11.5px] leading-snug text-muted-foreground">{subtitle}</p>
        </div>
        {linkLabel && (
          <a href="#" className="group flex shrink-0 items-center gap-1 text-[11.5px] font-medium text-primary hover:underline">
            {linkLabel}
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        )}
      </header>
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
    </section>
  );
}
