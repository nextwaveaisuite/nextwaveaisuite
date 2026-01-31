import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Terms() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "34px 18px 56px" }}>
      <h1 style={{ fontSize: 38, margin: "0 0 10px" }}>Terms & Conditions</h1>
      <p style={{ margin: "0 0 18px", opacity: 0.85 }}>
        This is a starter terms structure. Replace placeholders and adjust for your exact products.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>1) Use of Service</CardTitle>
        </CardHeader>
        <CardContent style={{ lineHeight: 1.7, opacity: 0.9 }}>
          You agree to use the service lawfully and not misuse, attack, scrape, or attempt to gain unauthorized access.
        </CardContent>
      </Card>

      <div style={{ height: 14 }} />

      <Card>
        <CardHeader>
          <CardTitle>2) Accounts</CardTitle>
        </CardHeader>
        <CardContent style={{ lineHeight: 1.7, opacity: 0.9 }}>
          You are responsible for maintaining your account credentials and for activity under your account.
        </CardContent>
      </Card>

      <div style={{ height: 14 }} />

      <Card>
        <CardHeader>
          <CardTitle>3) Payments</CardTitle>
        </CardHeader>
        <CardContent style={{ lineHeight: 1.7, opacity: 0.9 }}>
          Paid plans (if applicable) are billed via third-party processors (e.g., Stripe/PayPal). Refunds, if offered,
          are governed by your posted refund policy.
        </CardContent>
      </Card>

      <div style={{ height: 14 }} />

      <Card>
        <CardHeader>
          <CardTitle>4) Disclaimer</CardTitle>
        </CardHeader>
        <CardContent style={{ lineHeight: 1.7, opacity: 0.9 }}>
          The service is provided “as is” without warranties of any kind. Results may vary and depend on many factors.
        </CardContent>
      </Card>

      <div style={{ height: 14 }} />

      <Card>
        <CardHeader>
          <CardTitle>5) Limitation of Liability</CardTitle>
        </CardHeader>
        <CardContent style={{ lineHeight: 1.7, opacity: 0.9 }}>
          To the extent permitted by law, NextWave AI Suite is not liable for indirect or consequential damages.
        </CardContent>
      </Card>

      <div style={{ height: 14 }} />

      <Card>
        <CardHeader>
          <CardTitle>6) Contact</CardTitle>
        </CardHeader>
        <CardContent style={{ lineHeight: 1.7, opacity: 0.9 }}>
          Questions about these terms: <b>support@nextwaveaisuite.com</b> (replace with your real email).
        </CardContent>
      </Card>
    </div>
  );
}
