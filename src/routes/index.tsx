import { createFileRoute } from "@tanstack/react-router";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { TopBar } from "@/components/layout/TopBar";
import { PortfolioHero } from "@/components/dashboard/PortfolioHero";
import { KpiGrid } from "@/components/dashboard/KpiCard";
import { ManagementAttention } from "@/components/dashboard/ManagementAttention";
import { BudgetForecastChart } from "@/components/dashboard/BudgetForecastChart";
import { PortfolioHealth } from "@/components/dashboard/PortfolioHealth";
import { ExecutiveIntelligence } from "@/components/dashboard/ExecutiveIntelligence";
import { NextActions } from "@/components/dashboard/NextActions";
import { DataQualityPanel } from "@/components/dashboard/DataQualityPanel";
import {
  attentionProjects, budgetVsForecast, dataQuality, insights, kpis, nextActions, portfolioHealth,
} from "@/data/portfolioData";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio Overview — ControlSight" },
      { name: "description", content: "Project controls intelligence across cost, progress, schedule, procurement and data quality." },
      { property: "og:title", content: "Portfolio Overview — ControlSight" },
      { property: "og:description", content: "What needs management attention right now, and why." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Overview,
});

function Overview() {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar active="Overview" />
      <div className="lg:pl-[222px]">
        <TopBar />
        <main className="space-y-3 p-4 2xl:p-5">
          <PortfolioHero />
          <KpiGrid kpis={kpis} />
          <div className="grid gap-3 xl:grid-cols-[40fr_35fr_25fr]">
            <ManagementAttention rows={attentionProjects} />
            <BudgetForecastChart data={budgetVsForecast} />
            <PortfolioHealth {...portfolioHealth} />
          </div>
          <div className="grid gap-3 xl:grid-cols-[32fr_32fr_36fr]">
            <ExecutiveIntelligence items={insights} />
            <NextActions rows={nextActions} />
            <DataQualityPanel {...dataQuality} />
          </div>
        </main>
      </div>
    </div>
  );
}
