// Mock data for the ControlSight Portfolio Overview.
// Replace these objects with API responses (e.g. from FastAPI) later.

export type Tone = "blue" | "green" | "red" | "amber" | "violet";

export interface Kpi {
  id: string;
  label: string;
  value: string;
  trend: string;
  trendDir: "up" | "down";
  trendTone: "good" | "bad";
  caption: string;
  captionHighlight?: string; // portion of caption rendered red
  spark: number[];
  sparkTone: "blue" | "green" | "red";
  icon: "budget" | "cost" | "forecast" | "variance" | "progress" | "quality";
  iconTone: Tone;
}

export const portfolios = [
  "Global Infrastructure Portfolio",
  "UK Projects",
  "Healthcare Programme",
  "Energy Programme",
];
export const periods = ["Jun 2026", "Jul 2026", "Aug 2026", "Sep 2026"];

export const currentUser = { name: "Sarah Mitchell", role: "Portfolio Owner", notifications: 3 };

export const kpis: Kpi[] = [
  { id: "budget", label: "Approved Budget", value: "£283.0m", trend: "2.3%", trendDir: "up", trendTone: "good", caption: "vs. prior period", spark: [3, 4, 3.6, 4.8, 4.4, 5.6, 5.2, 6.4, 6, 7.2], sparkTone: "blue", icon: "budget", iconTone: "blue" },
  { id: "actual", label: "Actual Cost", value: "£260.7m", trend: "4.1%", trendDir: "up", trendTone: "good", caption: "92.1% of budget", spark: [2, 3, 2.6, 3.8, 3.2, 4.6, 4.2, 5.4, 5.1, 6.6], sparkTone: "green", icon: "cost", iconTone: "blue" },
  { id: "fac", label: "Forecast at Completion", value: "£301.2m", trend: "6.4%", trendDir: "up", trendTone: "bad", caption: "£18.2m ", captionHighlight: "over budget", spark: [2, 2.8, 2.4, 3.6, 3.1, 4.4, 4, 5.3, 4.9, 6.5], sparkTone: "red", icon: "forecast", iconTone: "blue" },
  { id: "variance", label: "Forecast Variance", value: "-£18.2m", trend: "12%", trendDir: "down", trendTone: "good", caption: "-6.4% vs. budget", spark: [2.5, 3.2, 2.8, 4, 3.5, 4.8, 4.3, 5.5, 5, 6.3], sparkTone: "green", icon: "variance", iconTone: "violet" },
  { id: "progress", label: "Portfolio Progress", value: "69.8%", trend: "4.6%", trendDir: "up", trendTone: "good", caption: "vs. 65.2% last period", spark: [2, 3, 2.5, 3.9, 3.4, 4.7, 4.1, 5.6, 5.2, 6.4], sparkTone: "blue", icon: "progress", iconTone: "blue" },
  { id: "quality", label: "Validation Quality", value: "99.59%", trend: "0.3%", trendDir: "up", trendTone: "good", caption: "of records accepted", spark: [3, 3.8, 3.3, 4.5, 4, 5, 4.6, 5.7, 5.3, 6.2], sparkTone: "blue", icon: "quality", iconTone: "green" },
];

export interface AttentionRow {
  rank: number; project: string; sector: string; region: string;
  score: number; driver: string; variance: string; variancePct: string;
}
export const attentionProjects: AttentionRow[] = [
  { rank: 1, project: "St Anne Hospital Expansion", sector: "Healthcare", region: "UK", score: 92, driver: "Schedule delay", variance: "+£4.3m", variancePct: "+14%" },
  { rank: 2, project: "Riverside Residential", sector: "Residential", region: "UK", score: 78, driver: "Cost growth", variance: "+£3.1m", variancePct: "+9%" },
  { rank: 3, project: "Atlas Data Centre", sector: "Data Centres", region: "UK", score: 72, driver: "Procurement risk", variance: "+£2.8m", variancePct: "+8%" },
  { rank: 4, project: "Helios Energy Facility", sector: "Energy", region: "USA", score: 68, driver: "Data quality", variance: "+£1.9m", variancePct: "+6%" },
  { rank: 5, project: "Phoenix Industrial Facility", sector: "Industrial", region: "Canada", score: 64, driver: "Resource constraint", variance: "+£1.6m", variancePct: "+5%" },
];

export const budgetVsForecast = [
  { name: "St Anne\nHospital", budget: 82, fac: 108 },
  { name: "Riverside\nResidential", budget: 48, fac: 60 },
  { name: "Atlas\nData Centre", budget: 29, fac: 35 },
  { name: "Helios\nEnergy", budget: 24, fac: 31 },
  { name: "Phoenix\nIndustrial", budget: 19, fac: 20 },
];

export const portfolioHealth = {
  total: 18,
  slices: [
    { name: "Critical", value: 5, pct: "28%", tone: "red" as const },
    { name: "Watch", value: 3, pct: "17%", tone: "amber" as const },
    { name: "Review", value: 0, pct: "0%", tone: "blue" as const },
    { name: "Stable", value: 10, pct: "56%", tone: "green" as const },
  ],
};

export const insights = [
  { title: "Forecast overrun increasing", body: "Portfolio FAC is 6.4% over budget (+£18.2m), up from 4.1% last period, driven by St Anne Hospital Expansion and Riverside Residential.", icon: "trend" as const, tone: "red" as const },
  { title: "Schedule risk elevated", body: "3 projects are critical with potential > 6 months delay, primarily due to permitting and resource constraints.", icon: "calendar" as const, tone: "amber" as const },
  { title: "Data quality remains strong", body: "Validation quality at 99.59% (+0.3%), with continued improvement in procurement and cost data.", icon: "chart" as const, tone: "blue" as const },
  { title: "Good progress on delivery", body: "Portfolio progress at 69.8% (+4.6%), supported by strong delivery in Energy and Data Centre projects.", icon: "leaf" as const, tone: "green" as const },
];

export type ActionStatus = "Overdue" | "In Progress" | "Open" | "Not Started";
export const nextActions: { action: string; owner: string; due: string; status: ActionStatus }[] = [
  { action: "Review recovery plan for St Anne Hospital", owner: "J. Carter", due: "28 Aug 2026", status: "Overdue" },
  { action: "Address procurement risk – Atlas Data Centre", owner: "A. Khan", due: "02 Sep 2026", status: "In Progress" },
  { action: "Confirm resource plan – Riverside", owner: "L. Chen", due: "05 Sep 2026", status: "Open" },
  { action: "Validate cost data – Helios Energy Facility", owner: "S. Patel", due: "10 Sep 2026", status: "Open" },
  { action: "Prepare rebaseline options – Phoenix", owner: "M. Wilson", due: "15 Sep 2026", status: "Not Started" },
];

export const dataQuality = {
  metrics: [
    { label: "Source Records", value: "2,415", icon: "doc" as const, tone: "blue" as const },
    { label: "Accepted Records", value: "2,405", icon: "check" as const, tone: "green" as const },
    { label: "Quarantined", value: "10", icon: "warn" as const, tone: "amber" as const },
    { label: "Issue Events", value: "13", icon: "alert" as const, tone: "red" as const },
  ],
  validationQuality: "99.59%",
  sources: [
    { name: "Cost Data", pct: 99 },
    { name: "Progress Data", pct: 100 },
    { name: "Schedule Data", pct: 99 },
    { name: "Procurement Data", pct: 98 },
    { name: "Other", pct: 99 },
  ],
};
