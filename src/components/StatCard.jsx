import Icon from "./Icon.jsx";
import "./StatCard.css";

function StatCard({ label, value, change, trend, icon }) {
  const isUp = trend === "up";

  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <span className="stat-card-icon">
          <Icon name={icon} size={18} />
        </span>
        <span className={`stat-card-change ${isUp ? "is-up" : "is-down"}`}>
          <Icon name={isUp ? "trendUp" : "trendDown"} size={14} />
          {Math.abs(change)}%
        </span>
      </div>
      <p className="stat-card-value">{value}</p>
      <p className="stat-card-label">{label}</p>
    </div>
  );
}

export default StatCard;
