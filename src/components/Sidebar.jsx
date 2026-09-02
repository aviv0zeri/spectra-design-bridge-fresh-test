import { useState } from "react";
import Icon from "./Icon.jsx";
import { navItems } from "../data/dashboardData.js";
import "./Sidebar.css";

function Sidebar() {
  const [activeId, setActiveId] = useState(navItems[0].id);

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
              <button
                type="button"
                className={`sidebar-nav-item${item.id === activeId ? " is-active" : ""}`}
                onClick={() => setActiveId(item.id)}
              >
                <Icon name={item.icon} size={18} />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
