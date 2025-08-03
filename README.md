Multi-Theme Switcher App

A React-based web application built with Vite, featuring a theme switcher with three distinct themes, responsive design, and navigation across multiple pages. The app uses Tailwind CSS for styling, Context API for theme management, and fetches data from the FakeStoreAPI.

Features

Three Distinct Themes:
Theme 1: Minimalist layout with light background and Roboto font.
Theme 2: Dark mode with sidebar layout and Merriweather font.
Theme 3: Colorful card-based grid layout with Pacifico font.


Theme Persistence: Selected theme persists across page reloads using localStorage.

Responsive Design: Optimized for both desktop and mobile devices using Tailwind CSS.

Navigation: Multiple pages (Home, About, Contact) with React Router.

Data Fetching: Displays product cards on the Home page using the FakeStoreAPI.

Animations: Subtle transitions when switching themes.


Prerequisites
Node.js (v16 or higher)
npm (v7 or higher)


Setup Instructions

Create a new Vite project:
npm create vite@latest theme-switcher-app -- --template react
cd theme-switcher-app

Install dependencies:
npm install

Replace project files:
Replace the contents of the src folder, index.html, package.json, vite.config.js, and tailwind.config.js with the provided files.


Ensure all files use .jsx or .js extensions as specified.



Run the development server:
npm run dev


Open http://localhost:5173 (or the port shown in the terminal) in your browser.


Build for production (optional):

npm run build


Preview the production build:
npm run preview

Project Structure

theme-switcher-app/
├── src/
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md

Notes
The app uses the FakeStoreAPI to fetch product data for the Home page.





