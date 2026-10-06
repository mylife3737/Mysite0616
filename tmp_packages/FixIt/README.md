# FixitFirst — Standalone Handyman Services by Ruben

This is the complete, isolated, and standalone React + Tailwind CSS web application for Ruben's Handyman Service (FixitFirst). It contains the complete estimator, file uploader, and review management system.

## ⚠️ Why is it blank when I double-click `index.html`?

If you double-click `index.html` directly in your file explorer, your browser will open it using the `file://` protocol. Modern browsers block ES modules (`<script type="module">`) over `file://` for security reasons (CORS restrictions). This causes the page to appear completely **blank**.

To view and run the application, you need to run a local development server as described below.

---

## 🚀 How to Run the App Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Step 1: Extract the ZIP
Extract the contents of the ZIP file into a folder of your choice.

### Step 2: Install Dependencies
Open your terminal (Command Prompt, PowerShell, or macOS Terminal), navigate (`cd`) to the extracted folder, and run:
```bash
npm install
```

### Step 3: Start the Development Server
Run the following command to boot up the local Vite development server:
```bash
npm run dev
```

### Step 4: Open in Browser
Once the server starts, open your browser and go to the local address displayed in your terminal (usually `http://localhost:3000` or `http://localhost:5173`).

---

## 🛠️ Build for Production
To generate a production-ready static build:
```bash
npm run build
```
This will compile the assets into the `dist/` directory, which can be uploaded to any static web hosting provider (like Vercel, Netlify, Firebase Hosting, etc.).
