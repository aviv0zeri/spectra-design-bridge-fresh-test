import { weeklyActivity } from "../data/dashboardData.js";
import "./AnalyticsCard.css";

function AnalyticsCard() {
  const max = Math.max(...weeklyActivity.map((d) => d.value));

  return (
    <div className="analytics-card">
      <div className="analytics-card-header">
        <div>
          <h2>Weekly Activity</h2>
          <p>Sessions across all channels</p>
        </div>
        <div className="analytics-legend">
          <span className="legend-dot" />
          Sessions
        </div>
      </div>

      <div className="analytics-chart">
        {weeklyActivity.map((point) => (
          <div className="analytics-bar-column" key={point.day}>
            <div className="analytics-bar-track">
              <div
                className="analytics-bar-fill"
                style={{ height: `${(point.value / max) * 100}%` }}
                title={`${point.day}: ${point.value}`}
              />
            </div>
            <span className="analytics-bar-label">{point.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnalyticsCard;
