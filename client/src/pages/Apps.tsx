import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const apps = [
  { name: "Daily Bible Quiz", desc: "Quick daily quiz + learning experience." },
  { name: "NextWave Hub", desc: "Central hub app (future listing)." },
];

export default function Apps() {
  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "34px 18px 56px" }}>
      <h1 style={{ fontSize: 38, margin: "0 0 10px" }}>Apps</h1>
      <p style={{ margin: "0 0 18px", opacity: 0.85 }}>
        Each app listing should link to Support, Privacy, and Terms pages.
      </p>

      <div
        style={{
          display: "grid",
          gap: 14,
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {apps.map((a) => (
          <Card key={a.name}>
            <CardHeader>
              <CardTitle>{a.name}</CardTitle>
              <CardDescription>{a.desc}</CardDescription>
            </CardHeader>
            <CardContent style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Button size="sm">Google Play</Button>
              <Button size="sm" variant="outline">App Store</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
