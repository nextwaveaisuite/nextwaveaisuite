import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, Arial", minHeight: "100vh" }}>
      <Navbar />

      <main style={{ padding: "44px 20px", maxWidth: 1100, margin: "0 auto" }}>
        {/* Replace this content with your real pages/sections */}
        <h1 style={{ fontSize: 40, margin: "0 0 10px" }}>NextWave AI Suite</h1>
        <p style={{ fontSize: 16, margin: "0 0 24px", opacity: 0.85 }}>
          Your real UI components are now loading from <code>client/src</code>.
        </p>
      </main>

      <Footer />
    </div>
  );
}
