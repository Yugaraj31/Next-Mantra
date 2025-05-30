# 📝 Next.js + Strapi Blog

This project is a simple blog application built using **Next.js (App Router)** and **Strapi v5** as a headless CMS. Blog content is created in Strapi and dynamically fetched into the Next.js frontend using API calls with support for Incremental Static Regeneration (ISR).

---

## 📦 Tech Stack

- [Next.js 14+ (App Router)](https://nextjs.org/)
- [Strapi v5](https://strapi.io/)
- REST API with dynamic zones
- Static Site Generation + Runtime Updates (via ISR)

---

## 🚀 Features

- Display a list of blog posts
- View individual blog post content dynamically
- Data fetched via Strapi REST API
- Uses `revalidate` to update content without redeploying
- Supports Strapi Dynamic Zone (e.g., paragraphs, images)

---

## 🛠️ Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/Yugaraj31/Next-Mantra.git
cd Next-Mantra

open two terminal
cd nextjs
cd strapi

Strapi Setup
📁 Navigate to the strapi-backend folder (create it if needed):
npx create-strapi-app@latest strapi-backend --quickstart


Create the Blog Collection in Strapi:
Go to http://localhost:1337/admin and create a collection named blogs with the following fields:

Field	Type
title	Text
slug	UID (based on title)
author	Text
content	Dynamic Zone (with components: paragraph, image)


🌐 Permissions:
Go to Settings > Roles > Public and allow find and findOne for blogs.


⚛️ Next.js Setup
📁 Inside your frontend folder:

npm install
Create a .env.local file in your root:

STRAPI_URL=http://localhost:1337/api


🔧 Project Structure
project-root/
│
├── app/
│   ├── page.jsx                  # Blog list page
│   └── blog/
│       └── [slug]/
│           └── page.jsx         # Blog detail page
│
├── components/
│   └── BlogContentRenderer.jsx  # Handles dynamic zone rendering
│
├── lib/
│   └── api.js                   # API calls to Strapi
│
└── .env.local                   # STRAPI_URL


🚴 Running the Project
🟡 Start Strapi (in one terminal):
cd strapi
npm run develop

🔵 Start Next.js (in another terminal):
npm run dev

🧪 API Examples
Blog list: GET http://localhost:1337/api/blogs

Filter by slug:
GET http://localhost:1337/api/blogs?filters[slug][$eq]=your-slug


📝 Notes
Uses export const revalidate = 60 to fetch new data from Strapi every 60 seconds.

Make sure to add blog entries in Strapi before testing the frontend.


