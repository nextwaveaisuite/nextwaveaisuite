import React from "react";

// adjust paths if your components are still in /src/components
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, Arial" }}>
      <Navbar />

      <main style={{ padding: "40px 20px" }}>
        <h1>NextWave AI Suite</h1>
        <p>Welcome to the NextWave AI ecosystem.</p>
        <p>Your real UI is now loading.</p>
      </main>

      <Footer />
    </div>
  );
}
