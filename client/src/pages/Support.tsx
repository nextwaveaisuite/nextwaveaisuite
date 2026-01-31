import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Support() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "34px 18px 56px" }}>
      <h1 style={{ fontSize: 38, margin: "0 0 10px" }}>Support</h1>
      <p style={{ margin: "0 0 18px", opacity: 0.85 }}>
        Add your official support email and response targets here.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Contact</CardTitle>
        </CardHeader>
        <CardContent style={{ lineHeight: 1.7, opacity: 0.9 }}>
          <p style={{ marginTop: 0 }}>
            For help with any NextWave AI Suite product:
          </p>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>Email: <b>support@nextwaveaisuite.com</b> (replace with your real support email)</li>
            <li>Response time: 1–3 business days (adjust)</li>
            <li>Include: product name + screenshot + steps</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
