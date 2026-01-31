import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.10)", background: "rgba(10,14,20,0.35)" }}>
      <div className="container" style={{ paddingTop: 18, paddingBottom: 18, display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div className="small">© {new Date().getFullYear()} NextWave AI Suite. All rights reserved.</div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link to="/privacy" className="small" style={{ textDecoration: "none" }}>Privacy</Link>
          <Link to="/terms" className="small" style={{ textDecoration: "none" }}>Terms</Link>
          <Link to="/support" className="small" style={{ textDecoration: "none" }}>Support</Link>
        </div>
      </div>
    </footer>
  );
}
