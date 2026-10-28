import { useEffect, useRef, useState } from "react";
import { Bell, Briefcase, ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import avatar from "@/assets/avatar-sarah.jpg";
import { currentUser, periods, portfolios } from "@/data/portfolioData";

function Select({ value, options, onChange, icon, className }: {
  value: string; options: string[]; onChange: (v: string) => void; icon?: React.ReactNode; className?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn("flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-3 text-[12.5px] font-semibold text-foreground transition-colors hover:border-primary/40", className)}
      >
        {icon}
        <span className="truncate">{value}</span>
        <ChevronDown className={cn("ml-auto h-3.5 w-3.5 text-muted-foreground transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <ul className="absolute left-0 top-full z-40 mt-1 min-w-full overflow-hidden rounded-lg border border-border bg-popover py-1 shadow-card-hover">
          {options.map((o) => (
            <li key={o}>
              <button
                onClick={() => { onChange(o); setOpen(false); }}
                className={cn("w-full whitespace-nowrap px-3 py-1.5 text-left text-[12.5px] hover:bg-accent", o === value ? "font-semibold text-primary" : "text-foreground")}
              >
                {o}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function TopBar() {
  const [portfolio, setPortfolio] = useState(portfolios[0]);
  const [period, setPeriod] = useState("Aug 2026");
  const [comparison, setComparison] = useState("Jul 2026");

  return (
    <header className="sticky top-0 z-20 flex h-[58px] items-center gap-4 border-b border-border bg-card px-5">
      <Select value={portfolio} options={portfolios} onChange={setPortfolio} className="w-[232px]" icon={<Briefcase className="h-4 w-4 text-primary" />} />
      <div className="hidden items-center gap-2 xl:flex">
        <span className="text-[11.5px] text-muted-foreground">Reporting Period</span>
        <Select value={period} options={periods} onChange={setPeriod} className="w-[110px]" />
      </div>
      <div className="hidden items-center gap-2 xl:flex">
        <span className="text-[11.5px] text-muted-foreground">Comparison Period</span>
        <Select value={comparison} options={periods} onChange={setComparison} className="w-[110px]" />
      </div>
      <div className="relative min-w-[180px] max-w-[340px] flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          placeholder="Search projects, risks, vendors, or anything..."
          className="h-9 w-full rounded-lg border border-border bg-card pl-9 pr-3 text-[12.5px] text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <div className="ml-auto flex items-center gap-5">
        <div className="hidden items-center gap-1.5 text-[12px] font-medium text-foreground md:flex">
          <span className="h-2 w-2 rounded-full bg-success" /> Connected
        </div>
        <button className="relative rounded-lg p-1.5 text-muted-foreground hover:bg-muted" aria-label="Notifications">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-danger text-[9.5px] font-bold text-primary-foreground">
            {currentUser.notifications}
          </span>
        </button>
        <button className="flex items-center gap-2.5">
          <img src={avatar} alt={currentUser.name} loading="lazy" width={816} height={816} className="h-9 w-9 rounded-full object-cover" />
          <div className="hidden text-left leading-tight md:block">
            <div className="text-[12.5px] font-semibold text-foreground">{currentUser.name}</div>
            <div className="text-[11px] text-muted-foreground">{currentUser.role}</div>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
}
