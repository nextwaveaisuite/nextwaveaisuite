import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export default function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />

      <main style={{ maxWidth: 1120, margin: "0 auto", padding: "34px 18px 56px" }}>
        {/* HERO */}
        <section style={{ padding: "26px 0 20px" }}>
          <Badge variant="secondary" style={{ marginBottom: 14 }}>
            NextWave AI Suite • Web Hub
          </Badge>

          <h1 style={{ fontSize: 46, lineHeight: 1.08, margin: "0 0 14px" }}>
            Build. Launch. Automate.
            <br />
            <span style={{ opacity: 0.85 }}>All from one clean dashboard.</span>
          </h1>

          <p style={{ margin: 0, fontSize: 16, opacity: 0.85, maxWidth: 760 }}>
            This is the stable Vite build version (client-root) — now ready for your real suite UI.
            You can add each tool/app as a card, wire routing later, and keep Vercel builds rock-solid.
          </p>

          <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
            <Button>Open Dashboard</Button>
