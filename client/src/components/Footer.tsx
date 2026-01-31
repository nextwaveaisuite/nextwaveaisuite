import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,0,0,0.08)",
        padding: "18px 20px",
        marginTop: "auto",
        background: "rgba(0,0,0,0.02)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", fontSize: 13, opacity: 0.8 }}>
        © {new Date().getFullYear()} NextWave AI Suite. All rights reserved.
      </div>
    </footer>
  );
}
