import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand-block">
        <div className="brand-logo">W</div>
        <div>
          <h2>WalletFlow</h2>
          <p>Finance Control Hub</p>
        </div>
      </div>

      <nav className="side-nav">
        <NavLink to="/">Overview</NavLink>
        <NavLink to="/people">People</NavLink>
        <NavLink to="/preferences">Preferences</NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="user-chip">
          <div className="avatar-circle">A</div>
          <div>
            <strong>Mic Smith</strong>
            <span>Owner</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;