import Header from "../components/Header.jsx";
import StatCard from "../components/StatCard.jsx";
import AnalyticsCard from "../components/AnalyticsCard.jsx";
import ActivityFeed from "../components/ActivityFeed.jsx";
import { stats } from "../data/dashboardData.js";

function Dashboard() {
  return (
    <>
      <Header />

      <section className="stats-grid" aria-label="Key metrics">
        {stats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </section>

      <section className="insights-grid">
        <AnalyticsCard />
        <ActivityFeed />
      </section>
    </>
  );
}

export default Dashboard;
