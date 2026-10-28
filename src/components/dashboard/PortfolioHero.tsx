import hero from "@/assets/hero-mountains.jpg";

export function PortfolioHero() {
  return (
    <section className="relative h-[124px] overflow-hidden rounded-xl">
      <img src={hero} alt="Alpine mountains above a lake" width={1600} height={560} className="absolute right-0 top-0 h-full w-[68%] object-cover object-center" />
      <div className="hero-fade absolute inset-0" />
      <div className="quote-fade absolute inset-y-0 right-0 hidden w-[300px] lg:block" />
      <div className="relative flex h-full items-center justify-between pl-1 pr-8">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">Portfolio Control</div>
          <h1 className="mt-1 text-[34px] font-extrabold leading-tight tracking-tight text-foreground">Portfolio Overview</h1>
          <p className="mt-1 text-[13.5px] text-muted-foreground">
            Project controls intelligence across cost, progress, schedule, procurement and data quality.
          </p>
        </div>
        <blockquote className="hidden text-[15px] font-medium leading-snug text-primary-foreground lg:block">
          “Greater visibility.<br />Stronger decisions.<br />Better outcomes.”
          <div className="mt-2 h-0.5 w-10 rounded bg-brand-light" />
        </blockquote>
      </div>
    </section>
  );
}
