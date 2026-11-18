# Airtribe Private Sandbox 🚀

An 80% similar, modern private testing environment inspired by [Airtribe.live](https://www.airtribe.live/). Built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

## 🌟 Overview & Purpose

This repository contains:
1. **Full-Featured Web Application**: An 80% similar, responsive platform designed for private testing, featuring live cohorts, deep-dive curriculum tracks, alumni reviews, enterprise hiring portal, free upskilling tools, capstone showcase, and interactive admissions modals.
2. **Extracted Assets Archive (`airtribe_extracted/`)**:
   - `raw_pages/`: Complete source HTML snapshots of 10 primary pages from Airtribe.live (Home, Catalog, GenAI Launchpad, Backend Engineering, Product Management, Reviews, Business, Events, About, Contact).
   - `assets/`: 120 extracted SVG logos, brand wordmarks, partner company badges (Google, Atlassian, Razorpay, Uber, Flipkart, Groww, Docker, etc.), and media.

---

## 🧭 Subpages & Architecture

| Route | Subpage | Description |
|---|---|---|
| `/` | **Homepage** | Hero with live admissions badges, mentor marquee, three track overview, The Airtribe Way bento grid, verified testimonials, and founders' note. |
| `/courses` | **Cohorts Catalog** | Filterable catalog by category (GenAI, Software Engineering, Product Management, Design) with real-time search and specs. |
| `/courses/generative-ai-launchpad` | **GenAI Launchpad** | 8-week deep dive: LLMs, LangChain, hybrid RAG, autonomous multi-agents (CrewAI), fine-tuning (LoRA), and capstones. |
| `/courses/backend-engineering-launchpad` | **Software Engineering** | 16-week deep dive: concurrency, Redis caching, Kafka streaming, microservices, and high-scale system design. |
| `/courses/product-management-launchpad` | **Product Management** | 12-week deep dive: AI PRDs, discovery, north-star metrics, unit economics, and VP product presentation. |
| `/reviews` | **Wall of Love** | Verified alumni reviews with before/after role transitions, salary hike percentages, and filter by track. |
| `/business` | **Airtribe for Business** | Enterprise talent portal for hiring pre-vetted engineers and product managers with submission form. |
| `/upskill-for-free` | **Free Upskilling Hub** | Curated DSA 450 Sheet, AI Prompts Playbook, Free Resume Reviewer, and Tech Quizzes. |
| `/project-showcase` | **Capstone Showcase** | Real applications built by learners (Agentic PR reviewer, Geo-distributed dispatcher, etc.). |
| `/events` | **Live Masterclasses** | Interactive workshops and architecture teardowns with RSVP registration. |
| `/about-us` | **About & Philosophy** | Company story, core principles, leadership, and investor backing. |
| `/contact-us` | **Contact & FAQ** | Contact form, Bengaluru HQ details, support email/phone, and comprehensive FAQ accordion. |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Static Generation)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom glassmorphism and glow effects
- **Icons**: Lucide React + custom inline SVG vectors
- **Deployment**: Vercel & GitHub

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

