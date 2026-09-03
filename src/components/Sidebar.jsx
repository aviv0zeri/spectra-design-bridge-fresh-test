import { NavLink } from "react-router-dom";
import Icon from "./Icon.jsx";
import { navItems } from "../data/dashboardData.js";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="sidebar-brand-mark">
          <Icon name="logo" size={18} />
        </span>
        <span className="sidebar-brand-name">Northstar</span>
      </div>

      <nav className="sidebar-nav" aria-label="Primary">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              {item.to ? (
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `sidebar-nav-item${isActive ? " is-active" : ""}`
                  }
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.label}</span>
                </NavLink>
              ) : (
                <button type="button" className="sidebar-nav-item">
                  <Icon name={item.icon} size={18} />
                  <span>{item.label}</span>
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
