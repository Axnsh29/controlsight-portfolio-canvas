import {
  Home, ClipboardList, BarChart3, Database, CalendarDays, ShoppingCart, ShieldCheck,
  CloudUpload, Bell, LineChart, FileText, ArrowLeftRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import bridge from "@/assets/sidebar-bridge.jpg";
import { Logo } from "./Logo";

const nav = [
  { label: "Overview", icon: Home },
  { label: "Projects", icon: ClipboardList },
  { label: "Performance", icon: BarChart3 },
  { label: "Cost", icon: Database },
  { label: "Schedule", icon: CalendarDays },
  { label: "Procurement", icon: ShoppingCart },
  { label: "Data Quality", icon: ShieldCheck },
  { label: "Upload Data", icon: CloudUpload },
  { label: "Attention Tuning", icon: Bell },
  { label: "Risk & Cash Flow", icon: LineChart },
  { label: "Report Pack", icon: FileText },
  { label: "Change Control", icon: ArrowLeftRight },
];

export function AppSidebar({ active = "Overview" }: { active?: string }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[222px] flex-col bg-navy-deep lg:flex">
      <div className="flex items-center gap-2.5 px-5 pb-6 pt-5">
        <Logo className="h-8 w-8" />
        <div className="leading-tight">
          <div className="text-[19px] font-bold tracking-tight text-primary-foreground">ControlSight</div>
          <div className="text-[10.5px] font-medium text-sidebar-muted">Project Intelligence</div>
        </div>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto px-3">
        {nav.map(({ label, icon: Icon }) => {
          const isActive = label === active;
          return (
            <a
              key={label}
              href="#"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13.5px] font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground shadow-active"
                  : "text-sidebar-muted hover:bg-primary-foreground/5 hover:text-primary-foreground",
              )}
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
              {label}
            </a>
          );
        })}
      </nav>
      <div className="p-3">
        <div className="relative h-[230px] overflow-hidden rounded-xl border border-primary-foreground/10">
          <img src={bridge} alt="Suspension bridge at dusk" loading="lazy" width={736} height={912} className="absolute inset-0 h-full w-full object-cover" />
          <div className="sidebar-card-fade absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="text-[14px] font-medium leading-snug text-primary-foreground">
              Turning project data into clearer decisions.
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-primary-foreground/10 pt-3">
              <div className="flex items-center gap-1.5">
                <Logo className="h-4 w-4" />
                <span className="text-[11.5px] font-medium text-primary-foreground/90">ControlSight</span>
              </div>
              <span className="text-[11px] text-sidebar-muted">v2.4.0</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
