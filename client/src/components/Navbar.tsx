import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const linkStyle: React.CSSProperties = {
  color: "inherit",
  textDecoration: "none",
  padding: "8px 10px",
  borderRadius: 10,
  fontSize: 14,
};

function TopLink({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        ...linkStyle,
        background: isActive ? "rgba(0,0,0,0.06)" : "transparent",
      })}
    >
      {label}
    </NavLink>
  );
}

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        backdropFilter: "blur(10px)",
        background: "rgba(255,255,255,0.88)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 12,
              background:
                "linear-gradient(135deg, #1e5eff 0%, #00c2ff 45%, #ffd000 100%)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
            }}
            aria-hidden="true"
          />
          <strong style={{ letterSpacing: 0.2 }}>NextWave AI Suite</strong>
        </div>

        <nav style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
          <TopLink to="/" label="Home" />
          <TopLink to="/tools" label="Tools" />
          <TopLink to="/apps" label="Apps" />
          <TopLink to="/pricing" label="Pricing" />
          <TopLink to="/support" label="Support" />
          <TopLink to="/about" label="About" />
          <Button size="sm" variant="outline">Login</Button>
        </nav>
      </div>
    </header>
  );
}
