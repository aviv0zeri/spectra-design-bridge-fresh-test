import Icon from "./Icon.jsx";
import { currentUser } from "../data/dashboardData.js";
import "./Header.css";

function Header({
  title = "Dashboard Overview",
  subtitle = "Welcome back, here’s what’s happening today.",
}) {
  return (
    <header className="header">
      <div className="header-heading">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="header-actions">
        <button type="button" className="btn btn-primary">
          <Icon name="plus" size={16} />
          <span>New Report</span>
        </button>

        <button type="button" className="icon-button" aria-label="Notifications">
          <Icon name="bell" size={18} />
          <span className="notification-dot" />
        </button>

        <div className="user-chip">
          <span className="user-avatar">{currentUser.initials}</span>
          <span className="user-meta">
            <span className="user-name">{currentUser.name}</span>
            <span className="user-role">{currentUser.role}</span>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
