# BUYBUDDY

Transform Shopping Into Seamless, Personalized Experiences

[![last commit](https://img.shields.io/github/last-commit/your-repo/buybuddy?style=flat-square)]()
[![typescript](https://img.shields.io/badge/typescript-97.3%25-blue?style=flat-square)]()
[![languages](https://img.shields.io/badge/languages-3-blue?style=flat-square)]()

## Built with the tools and technologies:

![JSON](https://img.shields.io/badge/JSON-black?style=flat-square)
![Markdown](https://img.shields.io/badge/Markdown-black?style=flat-square)
![npm](https://img.shields.io/badge/npm-red?style=flat-square)
![Sanity](https://img.shields.io/badge/Sanity-orange?style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow?style=flat-square)
![React](https://img.shields.io/badge/React-blue?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square)
![Stripe](https://img.shields.io/badge/Stripe-blue?style=flat-square)
![ESLint](https://img.shields.io/badge/ESLint-blue?style=flat-square)
![styled-components](https://img.shields.io/badge/styled--components-pink?style=flat-square)

---

## ✨ Features

- Modern e-commerce platform built with Next.js, React, and TypeScript
- Seamless shopping experience with personalized recommendations
- Sanity CMS integration for product, blog, and content management
- Stripe integration for secure payments
- User authentication (Clerk)
- Responsive design with styled-components and Tailwind CSS
- Product grid, categories, brands, and more

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd ecommerce
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add the following:

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=your_sanity_dataset
NEXT_PUBLIC_SANITY_API_VERSION=2025-06-22

# Sanity API tokens (for server-side operations)
SANITY_API_TOKEN=your_sanity_api_token
SANITY_API_READ_TOKEN=your_sanity_read_token

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
```

> **Note:** You can find your Sanity project ID and dataset in your [Sanity.io](https://www.sanity.io/) project settings. Stripe keys are available in your [Stripe dashboard](https://dashboard.stripe.com/).

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🛠️ Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build the app for production
- `npm start` — Start the production server
- `npm run lint` — Run ESLint for code quality
- `npm run typegen` — Generate Sanity types

---

## 🗂️ Project Structure

- `/app` — Next.js app directory (main pages, routing)
- `/components` — React components
- `/sanity` — Sanity CMS configuration and queries
- `/lib` — Utility libraries (Stripe, Sanity clients, etc.)
- `/public` — Static assets
- `/styles` — Global styles

---

## 📝 Sanity Studio

Sanity Studio is available at `/studio` route. You can manage products, categories, blogs, and more.

To run Sanity Studio locally:

```bash
npx sanity start
```

Or use the built-in route:  
Open [http://localhost:3000/studio](http://localhost:3000/studio)

---

## 🧪 Linting & Type Checking

- Run `npm run lint` to check for lint errors.
- TypeScript is used throughout the project for type safety.

---

## 🧑‍💻 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

---

## 📄 License

This project is licensed under the MIT License.

---
