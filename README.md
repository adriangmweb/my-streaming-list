# StreamList Manager

A modern, Netflix-inspired web application for managing your streaming service watchlists across multiple platforms.

## ✨ Features

- **🎬 Discover Content** - Browse movies and TV shows from various streaming services
- **📝 Personal Watchlist** - Add and remove content from your watchlist with one click
- **🔗 Multi-Platform Support** - Track content from Netflix, Prime Video, Disney+, Apple TV+, and more
- **🔐 Demo Authentication** - Ready-to-use demo login for testing all features
- **📱 Responsive Design** - Beautiful UI that works on desktop and mobile
- **⚡ Fast & Lightweight** - Built with Next.js 14 and optimized for performance

## 🚀 Demo

Try the live demo with these credentials:
- **Email:** `demo@streamlist.com`
- **Password:** `demo123`

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript
- **Styling:** Tailwind CSS with custom Netflix-inspired theme
- **Authentication:** Client-side demo authentication with localStorage
- **Deployment:** Vercel-optimized with static generation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd streamlist-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

The app is optimized for Vercel deployment with static generation for maximum performance.

## 📱 Usage

1. **Visit the homepage** - Beautiful landing page with app overview
2. **Click "Launch App"** - Access the main application
3. **Sign in with demo credentials** - Use the provided demo account
4. **Explore features:**
   - **Discover:** Browse available content
   - **Watchlist:** Manage your saved content
   - **Services:** View connected streaming platforms

## 📂 Project Structure

```
src/
├── app/
│   ├── auth/
│   │   ├── signin/          # Demo login page
│   │   └── signup/          # Demo signup redirect
│   ├── dashboard/           # Main app interface
│   ├── not-found.tsx        # Custom 404 page
│   ├── page.tsx            # Landing page
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
```

## 🎨 Design System

- **Colors:** Netflix-inspired red (#E50914) with dark theme
- **Typography:** System fonts for optimal performance
- **Layout:** CSS Grid and Flexbox for responsive design
- **Animations:** Smooth transitions and hover effects

## 🔧 Configuration

The app is designed to work out of the box with no external dependencies or environment variables required.

## 📄 License

MIT License - feel free to use this project for your own purposes.

---

**StreamList Manager** - Simplifying your streaming experience ✨
