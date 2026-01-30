# NextWave AI Suite Website

This is the official website for NextWave AI Suite, built with React, Tailwind CSS, and Vite. It is designed to be compliant with Google Play Console and App Store requirements.

## 🚀 Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    # or
    pnpm install
    ```

2.  **Start Development Server:**
    ```bash
    npm run dev
    # or
    pnpm dev
    ```

3.  **Build for Production:**
    ```bash
    npm run build
    # or
    pnpm build
    ```

## 🛠️ Customization Guide

### 1. App Store Links
Open `client/src/pages/Home.tsx` and search for the app cards. Replace the `href="#"` in the buttons with your actual App Store and Google Play URLs.

```tsx
<a href="https://apps.apple.com/app-id" className="flex-1">
  <Button ...>App Store</Button>
</a>
```

### 2. App Images
*   Place your app screenshots in `client/public/images/`.
*   Update the `bg-[url('...')]` classes in `client/src/pages/Home.tsx` to point to your new images.

### 3. Contact Form
Open `client/src/pages/Contact.tsx` and update the form action URL with your own Formspree ID (or any other form backend service).

```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### 4. Legal Documents
The Privacy Policy and Terms of Service are located in:
*   `client/src/pages/PrivacyPolicy.tsx`
*   `client/src/pages/TermsOfService.tsx`

Update the content in these files if your policies change.

## 📦 Deployment

### Vercel (Recommended)
1.  Push this code to a GitHub repository.
2.  Import the repository into Vercel.
3.  Vercel will automatically detect the Vite settings and deploy your site.

### GitHub Pages
You can also deploy to GitHub Pages by configuring the `base` path in `vite.config.ts` and setting up a GitHub Action.
