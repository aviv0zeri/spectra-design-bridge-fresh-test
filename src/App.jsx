import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import StatCard from "./components/StatCard.jsx";
import AnalyticsCard from "./components/AnalyticsCard.jsx";
import ActivityFeed from "./components/ActivityFeed.jsx";
import { stats } from "./data/dashboardData.js";
import "./App.css";

function App() {
  return (
    <div className="dashboard-shell">
      <Sidebar />

      <main className="dashboard-content">
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
      </main>
    </div>
  );
}

export default App;
