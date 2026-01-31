import React from "react";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        backdropFilter: "blur(10px)",
        background: "rgba(255,255,255,0.85)",
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

        <nav style={{ display: "flex", gap: 14, fontSize: 14, alignItems: "center" }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Home</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Tools</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Apps</a>
          <Button size="sm" variant="outline">Login</Button>
        </nav>
      </div>
    </header>
  );
}
