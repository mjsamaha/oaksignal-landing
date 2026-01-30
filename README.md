# ⚓ OakSignal

### Building reliable systems for cadet organizations

[![Build Status](https://github.com/mjsamaha/oaksignal-landing/actions/workflows/deploy.yml/badge.svg)](https://github.com/mjsamaha/oaksignal-landing/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Deployment Status](https://img.shields.io/website?url=https%3A%2F%2Fmjsamaha.github.io%2Foaksignal-landing%2F&label=Deployment&style=flat-square)](https://mjsamaha.github.io/oaksignal-landing/)

---

## 📖 About This Project

The **OakSignal Landing Page** serves as the digital front door for OakSignal, a software initiative dedicated to building modern, reliable digital systems for cadet and youth organizations.

This site showcases our mission found on:
👉 **[Live Site: https://mjsamaha.github.io/oaksignal-landing/](https://mjsamaha.github.io/oaksignal-landing/)**

It is built to demonstrate our commitment to **Clarity**, **Accessibility**, and **Reliability**—the same core values that drive all our software solutions.

---

## ✨ Features

Designed with a focus on professional polish and user experience:

- **📱 Mobile-First Design**: Fully responsive layout that adapts seamlessly to all device sizes.
- **⚡ High Performance**: Static site generation (SSG) ensures lightning-fast load times.
- **♿ Accessible**: Adheres to accessibility best practices for inclusive usage.
- **🛠️ Project Showcase**: Dedicated pages for OakSignal's suite of tools (SignalsMaster, Quartermaster).

---

## 🛠️ Tech Stack

Built with a modern, type-safe stack for maintainability and performance:

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [ShadCN/UI](https://ui.shadcn.com/)
- **Deployment**: [GitHub Pages](https://pages.github.com/) via GitHub Actions

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mjsamaha/oaksignal-landing.git
   cd oaksignal-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

To create a production build:

```bash
npm run build
```

This will generate a static export in the `out/` directory, ready for deployment.

---

## 📂 Project Structure

```bash
/app
  ├── layout.tsx      # Root layout and theme provider
  ├── page.tsx        # Home page
  └── projects/       # Dynamic project detail pages
/components
  ├── ui/             # Reusable ShadCN UI components
  ├── hero.tsx        # Landing page hero section
  ├── projects.tsx    # Projects grid section
  └── ...
/lib
  └── projects.ts     # Project data and types
/public               # Static assets (images, icons)
```

---

## 📦 Deployment

This project is automatically deployed to **GitHub Pages** using GitHub Actions.

- **Workflow**: Defined in `.github/workflows/deploy.yml`.
- **Trigger**: Pushes to the `main` branch trigger a build and deployment.
- **Process**: Next.js builds a static export (`output: 'export'`), which is then uploaded as a GitHub Pages artifact.

---

## 🌲 About OakSignal

**OakSignal** provides purpose-built applications for training, operations, and public engagement in cadet and youth organizations.

### Core Values
- **Clarity**: Clear code, clear design, clear communication.
- **Accessibility**: Inclusive, usable systems for all.
- **Reliability**: Systems that work consistently.
- **Maintainability**: Sustainable, well-documented solutions.
  
---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

**OakSignal Team**

For inquiries about OakSignal projects, please visit the [OakSignal landing page](https://mjsamaha.github.io/oaksignal-landing/) or contact through the website.

---
*Built with ❤️ for the Cadet Program.*
