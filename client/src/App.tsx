import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, Arial", minHeight: "100vh" }}>
      <Navbar />

      <main style={{ padding: "44px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ fontSize: 40, margin: "0 0 10px" }}>NextWave AI Suite</h1>
        <p style={{ fontSize: 16, margin: "0 0 24px", opacity: 0.85 }}>
          Your Vercel build is stable. Now you can plug your real UI in safely.
        </p>

        <div
          style={{
            border: "1px solid rgba(0,0,0,0.12)",
            borderRadius: 16,
            padding: 18,
            background: "rgba(0,0,0,0.02)",
          }}
        >
          <h2 style={{ margin: "0 0 10px" }}>Next step</h2>
          <p style={{ margin: 0 }}>
            Move/copy your real components into <code>client/src/components</code>{" "}
            (and <code>client/src/ui</code> if needed). This avoids broken relative imports.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
