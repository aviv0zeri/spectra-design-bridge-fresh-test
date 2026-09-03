export const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "dashboard", to: "/" },
  { id: "reports", label: "Reports", icon: "reports", to: "/reports" },
  { id: "audience", label: "Audience", icon: "audience" },
  { id: "settings", label: "Settings", icon: "settings" },
];

export const currentUser = {
  name: "Jordan Lee",
  role: "Product Analyst",
  initials: "JL",
};

export const stats = [
  {
    id: "revenue",
    label: "Total Revenue",
    value: "$48,230",
    change: 12.4,
    trend: "up",
    icon: "revenue",
  },
  {
    id: "users",
    label: "Active Users",
    value: "3,482",
    change: 8.1,
    trend: "up",
    icon: "users",
  },
  {
    id: "conversion",
    label: "Conversion Rate",
    value: "4.6%",
    change: -1.2,
    trend: "down",
    icon: "target",
  },
];

export const weeklyActivity = [
  { day: "Mon", value: 62 },
  { day: "Tue", value: 78 },
  { day: "Wed", value: 55 },
  { day: "Thu", value: 91 },
  { day: "Fri", value: 84 },
  { day: "Sat", value: 40 },
  { day: "Sun", value: 33 },
];

export const reportsSummary = {
  week: { label: "Sessions this week", value: "1,204" },
  month: { label: "Sessions this month", value: "5,842" },
};

export const recentActivity = [
  {
    id: 1,
    initials: "MC",
    color: "#4f46e5",
    text: "Maya Chen published a new report",
    detail: "Q3 Growth Summary",
    time: "5 min ago",
  },
  {
    id: 2,
    initials: "DK",
    color: "#06b6d4",
    text: "Devon Kaur invited a teammate",
    detail: "sam@northstar.io",
    time: "38 min ago",
  },
  {
    id: 3,
    initials: "RP",
    color: "#16a34a",
    text: "Riya Patel hit a new milestone",
    detail: "10,000 monthly active users",
    time: "2 hr ago",
  },
  {
    id: 4,
    initials: "TN",
    color: "#f59e0b",
    text: "Theo Novak updated a dashboard",
    detail: "Audience Retention",
    time: "5 hr ago",
  },
  {
    id: 5,
    initials: "AS",
    color: "#dc2626",
    text: "Amara Singh flagged an anomaly",
    detail: "Checkout conversion drop",
    time: "Yesterday",
  },
];
