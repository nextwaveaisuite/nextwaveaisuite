import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function Home() {
  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "34px 18px 56px" }}>
      <section style={{ padding: "8px 0 18px" }}>
        <Badge variant="secondary" style={{ marginBottom: 14 }}>
          NextWave AI Suite • Web Hub
        </Badge>

        <h1 style={{ fontSize: 46, lineHeight: 1.08, margin: "0 0 14px" }}>
          Home
          <br />
          <span style={{ opacity: 0.85 }}>Your central hub for apps + tools.</span>
        </h1>

        <p style={{ margin: 0, fontSize: 16, opacity: 0.85, maxWidth: 780 }}>
          This site is your official developer / product hub. Each page can link to a tool,
          app listing, help docs, pricing, and compliance pages (Privacy + Terms).
        </p>

        <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
          <Button>Open Dashboard</Button>
          <Button variant="outline">Browse Tools</Button>
          <Button variant="ghost">See Pricing</Button>
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gap: 14,
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          marginTop: 16,
        }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Tools</CardTitle>
            <CardDescription>Show your SaaS modules and what they do.</CardDescription>
          </CardHeader>
          <CardContent>
            Add cards for NextForge AI, WhopPulse AI, DomainRevive AI, VidSurge AI, etc.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Apps</CardTitle>
            <CardDescription>Link to Google Play / App Store listings.</CardDescription>
          </CardHeader>
          <CardContent>
            List each app with badges, screenshots, and “Support / Privacy / Terms” links.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compliance</CardTitle>
            <CardDescription>Privacy + Terms are required for stores.</CardDescription>
          </CardHeader>
          <CardContent>
            Your Privacy Policy and Terms are now first-class pages, linked in the footer.
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
