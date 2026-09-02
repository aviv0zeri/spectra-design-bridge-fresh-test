import { recentActivity } from "../data/dashboardData.js";
import "./ActivityFeed.css";

function ActivityFeed() {
  return (
    <div className="activity-card">
      <div className="activity-card-header">
        <h2>Recent Activity</h2>
        <button type="button" className="link-button">
          View all
        </button>
      </div>

      <ul className="activity-list">
        {recentActivity.map((item) => (
          <li className="activity-item" key={item.id}>
            <span
              className="activity-avatar"
              style={{ background: item.color }}
            >
              {item.initials}
            </span>
            <div className="activity-body">
              <p className="activity-text">{item.text}</p>
              <p className="activity-detail">{item.detail}</p>
            </div>
            <span className="activity-time">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityFeed;
