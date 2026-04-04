# Finder — Lost & Found Recovery Place

A polished MERN-style lost-and-found web application built with React, Vite, Tailwind CSS, Express, MongoDB, and Cloudinary. This project demonstrates a full-stack workflow, file upload handling, responsive UI, and modern frontend/back-end best practices.

## ✅ What this project shows

- **Full stack architecture** with a React client and Express server
- **Vite 8** powered React app for fast local development and production builds
- **Tailwind CSS** responsive styling with custom visuals and mobile-first layout
- **Multer file upload** pipeline for image uploads
- **Cloudinary integration** for remote media hosting, with a safe local fallback
- **MongoDB with Mongoose** for data persistence
- **React Router v6** routing across Home, Items, and Upload pages
- **Search and filtering** for items by name, description, or location
- **Claim and Share actions** on item cards using clipboard + Web Share API
- **Static public assets** driven from `client/public/images`
- **Sample data fallback** from `client/src/data/items.js` when backend items are unavailable

## 📁 Repository structure

- `app.js` — Express server entry point
- `server/` — API controllers, routes, models, and upload folder
  - `server/configs/connectDb.js`
  - `server/controllers/items.controllers.js`
  - `server/models/item.model.js`
  - `server/routes/items.routes.js`
- `client/` — React frontend app built with Vite
  - `client/src/main.jsx`
  - `client/src/App.jsx`
  - `client/src/mainapp/MainApp.jsx`
  - `client/src/components/` — UI components like `Navbar` and `Item`
  - `client/src/pages/` — `Home`, `Items`, `Upload`
  - `client/src/data/items.js` — local sample item data fallback
  - `client/public/images/` — public image assets used across the site

## 🚀 Features implemented

- Responsive homepage with CTA sections
- Item listing page with responsive grid and fallback sample data
- Item upload form with file upload and backend storage
- Search bar available on the items page only
- Local sample image usage from `client/public/images`
- `Claim` button copies claim details to clipboard and provides user feedback
- `Share` button uses browser native sharing when available, otherwise copies share text
- Robust file upload handling with `multipart/form-data`
- Static serving of uploaded images from `server/uploads`
- Graceful server error handling for port conflicts
- Cloudinary / local fallback upload strategy for reliable deployment

## 🧠 Best practices included

- Environment variables stored in `.env`
- Separation of concerns between frontend and backend
- Async/await plus try/catch error handling
- Modular Express routers and controllers
- Static asset fallback for broken image URLs
- Responsive layout and mobile-first UI
- Semantic and accessible button interactions
- Clean project scripts for development and production

## ⚙️ Setup

1. Clone the repository

```bash
git clone <repo-url>
cd finder
```

2. Install root dependencies

```bash
npm install
```

3. Install client dependencies

```bash
cd client
npm install
```

4. Create a `.env` file in the root

Use this format:

```env
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## ▶️ Run locally

From the project root:

```bash
npm run dev
```

This command runs both the server and the client concurrently.

### Or run separately

```bash
npm run server
npm run client
```

## 📦 Production build

From the project root:

```bash
npm run build
```

Then run the server with:

```bash
npm start
```

## 🔧 Some Notes 

This project is designed to showcase real-world skills:

- building a modern frontend with React, Vite, and Tailwind
- building a backend API with Express and MongoDB
- managing file uploads and cloud media storage
- writing reusable UI components and responsive layouts
- handling failures gracefully and supporting fallback data

If you review this repository, you’ll see a complete end-to-end experience with practical production-ready patterns.

---

## 📄 License

MIT
