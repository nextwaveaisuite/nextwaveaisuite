import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Privacy() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "34px 18px 56px" }}>
      <h1 style={{ fontSize: 38, margin: "0 0 10px" }}>Privacy Policy</h1>
      <p style={{ margin: "0 0 18px", opacity: 0.85 }}>
        This is a solid starter policy structure. Replace placeholders (like emails) with your real details.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>1) Information We Collect</CardTitle>
        </CardHeader>
        <CardContent style={{ lineHeight: 1.7, opacity: 0.9 }}>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>Account info: name, email (if you create an account).</li>
            <li>Usage data: basic analytics (pages visited, device/browser, approximate location).</li>
            <li>Support data: messages you send to support.</li>
            <li>Payment data: if you purchase, payments are processed by third parties (e.g., Stripe/PayPal). We do not store full card details.</li>
          </ul>
        </CardContent>
      </Card>

      <div style={{ height: 14 }} />

      <Card>
        <CardHeader>
          <CardTitle>2) How We Use Data</CardTitle>
        </CardHeader>
        <CardContent style={{ lineHeight: 1.7, opacity: 0.9 }}>
          We use data to provide the service, improve performance, respond to support requests, and
          protect against fraud/abuse.
        </CardContent>
      </Card>

      <div style={{ height: 14 }} />

      <Card>
        <CardHeader>
          <CardTitle>3) Sharing</CardTitle>
        </CardHeader>
        <CardContent style={{ lineHeight: 1.7, opacity: 0.9 }}>
          We may share data with service providers that help operate the platform (hosting, analytics, email delivery,
          payment processing). We do not sell personal information.
        </CardContent>
      </Card>

      <div style={{ height: 14 }} />

      <Card>
        <CardHeader>
          <CardTitle>4) Data Retention</CardTitle>
        </CardHeader>
        <CardContent style={{ lineHeight: 1.7, opacity: 0.9 }}>
          We keep personal data only as long as necessary to provide the service, comply with legal obligations,
          and resolve disputes.
        </CardContent>
      </Card>

      <div style={{ height: 14 }} />

      <Card>
        <CardHeader>
          <CardTitle>5) Your Rights</CardTitle>
        </CardHeader>
        <CardContent style={{ lineHeight: 1.7, opacity: 0.9 }}>
          You may request access, correction, or deletion of your personal information by contacting:
          <b> privacy@nextwaveaisuite.com</b> (replace with your real email).
        </CardContent>
      </Card>

      <div style={{ height: 14 }} />

      <Card>
        <CardHeader>
          <CardTitle>6) Contact</CardTitle>
        </CardHeader>
        <CardContent style={{ lineHeight: 1.7, opacity: 0.9 }}>
          If you have questions, contact: <b>privacy@nextwaveaisuite.com</b>
        </CardContent>
      </Card>
    </div>
  );
}
