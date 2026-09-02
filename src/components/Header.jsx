import Icon from "./Icon.jsx";
import { currentUser } from "../data/dashboardData.js";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-heading">
        <h1>Dashboard Overview</h1>
        <p>Welcome back, here&rsquo;s what&rsquo;s happening today.</p>
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
