import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function About() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "34px 18px 56px" }}>
      <h1 style={{ fontSize: 38, margin: "0 0 10px" }}>About</h1>
      <p style={{ margin: "0 0 18px", opacity: 0.85 }}>
        Describe your mission, suite vision, and what users can expect.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>NextWave AI Suite</CardTitle>
        </CardHeader>
        <CardContent style={{ lineHeight: 1.7, opacity: 0.9 }}>
          NextWave AI Suite is a growing collection of tools and apps designed to help creators,
          entrepreneurs, and teams build faster, publish faster, and automate the boring parts.
          This site acts as the official product hub and app store support/compliance home.
        </CardContent>
      </Card>
    </div>
  );
}
