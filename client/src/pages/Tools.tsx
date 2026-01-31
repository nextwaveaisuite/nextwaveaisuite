import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const tools = [
  { name: "NextForge AI", desc: "Generate SaaS tools and blueprints fast." },
  { name: "WhopPulse AI", desc: "Affiliate content + tracking + autopilot." },
  { name: "DomainRevive AI", desc: "Expired domain monetization system." },
  { name: "VidSurge AI", desc: "Autopilot YouTube content creation." },
];

export default function Tools() {
  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "34px 18px 56px" }}>
      <h1 style={{ fontSize: 38, margin: "0 0 10px" }}>Tools</h1>
      <p style={{ margin: "0 0 18px", opacity: 0.85 }}>
        Add each software tool as a module card. Later we can connect real links per tool.
      </p>

      <div
        style={{
          display: "grid",
          gap: 14,
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {tools.map((t) => (
          <Card key={t.name}>
            <CardHeader>
              <CardTitle>{t.name}</CardTitle>
              <CardDescription>{t.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" variant="outline">View</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
