import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,0,0,0.08)",
        padding: "18px 18px",
        background: "rgba(0,0,0,0.02)",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
          fontSize: 13,
          opacity: 0.85,
        }}
      >
        <div>© {new Date().getFullYear()} NextWave AI Suite. All rights reserved.</div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link to="/privacy" style={{ color: "inherit" }}>Privacy</Link>
          <Link to="/terms" style={{ color: "inherit" }}>Terms</Link>
          <Link to="/support" style={{ color: "inherit" }}>Support</Link>
        </div>
      </div>
    </footer>
  );
}
