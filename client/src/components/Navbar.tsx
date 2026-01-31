import React from "react";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        backdropFilter: "blur(10px)",
        background: "rgba(255,255,255,0.75)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              background:
                "linear-gradient(135deg, #1e5eff 0%, #00c2ff 45%, #ffd000 100%)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
            }}
            aria-hidden="true"
          />
          <strong style={{ letterSpacing: 0.3 }}>NextWave AI Suite</strong>
        </div>

        <nav style={{ display: "flex", gap: 14, fontSize: 14 }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
            Home
          </a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
            Tools
          </a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
            Apps
          </a>
        </nav>
      </div>
    </header>
  );
}
