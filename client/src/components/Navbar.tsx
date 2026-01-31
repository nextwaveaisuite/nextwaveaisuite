import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        backdropFilter: "blur(10px)",
        background: "rgba(10,14,20,0.55)",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      <div className="container" style={{ paddingTop: 12, paddingBottom: 12, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 12,
              background: "linear-gradient(135deg, #1e5eff 0%, #00c2ff 45%, #ffd000 100%)",
              boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
            }}
            aria-hidden="true"
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <strong style={{ letterSpacing: -0.02 }}>NextWave AI Suite</strong>
            <span className="small">Developer & App Support Hub</span>
          </div>
        </Link>

        <nav style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }}>
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Home</NavLink>
          <NavLink to="/tools" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Tools</NavLink>
          <NavLink to="/apps" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Apps</NavLink>
          <NavLink to="/pricing" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Pricing</NavLink>
          <NavLink to="/support" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Support</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>About</NavLink>
        </nav>
      </div>
    </header>
  );
}
