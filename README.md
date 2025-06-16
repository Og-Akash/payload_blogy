# Payload Next.js Blogy

A modern blog application built with [Next.js](https://nextjs.org/) and [Payload CMS](https://payloadcms.com/). This project features a full-stack CMS-powered blog with a beautiful frontend, flexible content management, and a robust API layer.

---

## Features

- **Next.js 14+** frontend with App Router
- **Payload CMS** as a headless backend (collections, blocks, admin UI)
- **Authentication** (Users collection)
- **Blog Articles** with rich content, tags, and media uploads
- **Media Library** for image uploads and management
- **Pages** with flexible block-based layouts (e.g., Hero block)
- **FAQs** and **Feedback** collections
- **GraphQL & REST API** endpoints
- **Docker** support for easy local development
- **TypeScript** throughout
- **Modern UI** with Tailwind CSS and custom components

---

Sure! Here's your directory structure represented in **Markdown**:

```markdown
# 📁 Project Directory Structure


├── src/
│   ├── app/                # Next.js app directory (frontend & admin)
│   │   ├── (frontend)/     # Public-facing pages (Home, Blogs, About, Feedback)
│   │   ├── (payload)/      # Payload admin & API routes
│   │   └── api/            # Custom API endpoints (articles, feedback)
│   ├── blocks/             # Payload block definitions (e.g., Hero)
│   ├── collections/        # Payload collection configs (Articles, Media, Users, etc.)
│   ├── components/         # Reusable React components (UI, layouts, header, etc.)
│   ├── helpers/            # Data fetching and utility functions
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Payload client and utility libraries
│   └── payload.config.ts   # Main Payload config
├── public/                 # Static assets
├── media/                  # Uploaded media files
├── Dockerfile              # Docker support
├── docker-compose.yml      # Docker Compose for local dev
├── next.config.mjs         # Next.js config
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation

```



---

## Collections & Blocks

- **Users**: Auth-enabled, manages admin users
- **Articles**: Blog posts with title, description, content, poster image, author, and slug
- **Media**: Uploads-enabled collection for images
- **Pages**: Flexible pages with block-based layouts (e.g., Hero block)
- **NavLinks**: Navigation links for the header
- **Tags**: Tagging system for articles
- **Faqs**: Frequently Asked Questions
- **Feedbacks**: User feedback submissions
- **Blocks**: e.g., Hero block for page layouts

---

## Getting Started

### 1. Clone the repository

```sh
git clone <your-repo-url>
cd payload_demo
```
```sh
pnpm install
 
pnpm dev
```
- Visit http://localhost:3000 to view the app.