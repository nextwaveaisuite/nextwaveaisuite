import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const plans = [
  { name: "Free", price: "$0", bullets: ["Browse tools", "Basic access", "Email support"] },
  { name: "Pro", price: "$19/mo", bullets: ["More tools", "Higher limits", "Priority support"] },
  { name: "Elite", price: "$49/mo", bullets: ["All tools", "Max limits", "Fastest support"] },
];

export default function Pricing() {
  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "34px 18px 56px" }}>
      <h1 style={{ fontSize: 38, margin: "0 0 10px" }}>Pricing</h1>
      <p style={{ margin: "0 0 18px", opacity: 0.85 }}>
        Placeholder pricing you can swap later (Stripe/PayPal wiring comes after).
      </p>

      <div
        style={{
          display: "grid",
          gap: 14,
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {plans.map((p) => (
          <Card key={p.name}>
            <CardHeader>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <CardTitle>{p.name}</CardTitle>
                {p.name !== "Free" ? <Badge variant="secondary">Popular</Badge> : null}
              </div>
              <CardDescription style={{ fontSize: 18 }}>{p.price}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.75, opacity: 0.9 }}>
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div style={{ marginTop: 12 }}>
                <Button size="sm">{p.name === "Free" ? "Start" : "Upgrade"}</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
