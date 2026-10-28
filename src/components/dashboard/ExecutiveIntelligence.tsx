import { BarChart3, CalendarDays, Leaf, Lightbulb, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { DashboardPanel, toneIcon } from "./DashboardPanel";

const icons = { trend: TrendingUp, calendar: CalendarDays, chart: BarChart3, leaf: Leaf };

export function ExecutiveIntelligence({ items }: { items: { title: string; body: string; icon: keyof typeof icons; tone: keyof typeof toneIcon }[] }) {
  return (
    <DashboardPanel
      title="Executive Intelligence"
      subtitle="Key insights from portfolio data and emerging trends."
      linkLabel="Generate Report"
      icon={<span className="flex h-7 w-7 items-center justify-center rounded-full bg-warning text-primary-foreground"><Lightbulb className="h-4 w-4" /></span>}
    >
      <ul className="space-y-3">
        {items.map((i) => {
          const Icon = icons[i.icon];
          return (
            <li key={i.title} className="flex gap-3">
              <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-lg", toneIcon[i.tone])}><Icon className="h-4 w-4" /></span>
              <div>
                <div className="text-[12.5px] font-semibold text-foreground">{i.title}</div>
                <p className="mt-0.5 text-[11.5px] leading-snug text-muted-foreground">{i.body}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </DashboardPanel>
  );
}
