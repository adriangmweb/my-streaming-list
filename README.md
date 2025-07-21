# StreamList Manager 🎬

A modern, secure web application for managing your streaming service watchlists across platforms like Netflix, Hulu, Prime Video, Disney+, and more. Built with Next.js, TypeScript, and Prisma.

## ✨ Features

- **🔐 Secure Authentication**: User registration and login with NextAuth.js
- **📱 Responsive Design**: Modern, Netflix-inspired UI that works on all devices
- **🎭 Multi-Platform Support**: Manage watchlists from multiple streaming services
- **🔍 Smart Search**: Search for movies and TV shows using TMDB API
- **📚 Custom Lists**: Create and organize multiple watchlists
- **⭐ Rating System**: Rate and review your watched content
- **🎯 Recommendations**: Get personalized content recommendations
- **📊 Progress Tracking**: Track what you're watching and what you've completed

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- A TMDB API key (free from [The Movie Database](https://www.themoviedb.org/settings/api))

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd streamlist-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your TMDB API key:
   ```env
   TMDB_API_KEY="your-actual-tmdb-api-key-here"
   NEXTAUTH_SECRET="your-nextauth-secret-here"
   ```

4. **Set up the database**
   ```bash
   npm run db:generate
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom Netflix-inspired theme
- **Authentication**: NextAuth.js with secure JWT tokens
- **Database**: SQLite with Prisma ORM (easily configurable for PostgreSQL/MySQL)
- **API**: TMDB (The Movie Database) for movie/TV show data
- **State Management**: Zustand + React Query for efficient data fetching
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for consistent iconography

## 📝 Getting Your TMDB API Key

1. Create a free account at [The Movie Database](https://www.themoviedb.org/)
2. Go to your [API settings](https://www.themoviedb.org/settings/api)
3. Request an API key (choose "Developer" option)
4. Copy your API key and add it to your `.env.local` file

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push database schema
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio

## 🎯 How It Works

### Current Implementation
Since Netflix and most streaming services don't provide public APIs for accessing user account data, this application currently:

1. **Manual List Management**: Users can manually add movies/TV shows to their watchlists
2. **TMDB Integration**: Rich metadata from The Movie Database API
3. **Secure Storage**: All user data is securely stored in your database
4. **Cross-Platform Organization**: Organize content by streaming service or custom categories

### Future Enhancements
- **Browser Extension**: Auto-detect and sync watchlists from streaming platforms
- **Web Scraping**: Carefully implemented scraping with user consent
- **Third-Party Integrations**: Integration with services like Trakt.tv
- **Mobile App**: React Native companion app

## 🔒 Security & Privacy

- **No Password Storage**: We never store streaming service passwords
- **Encrypted Data**: All sensitive data is encrypted
- **GDPR Compliant**: Built with privacy in mind
- **Secure Authentication**: JWT tokens with secure session management

## 🌟 Demo Account

For testing purposes, you can use the demo account:
- **Email**: demo@streamlist.com
- **Password**: demo123456

## 🚀 Deployment

The application is **deployment-ready** with all build issues resolved!

### Environment Variables Required

Set these in your deployment platform:

- `DATABASE_URL` - PostgreSQL connection string (required for production)
- `NEXTAUTH_SECRET` - Strong secret for JWT tokens
- `NEXTAUTH_URL` - Your deployment URL
- `TMDB_API_KEY` - TMDB API key from themoviedb.org

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy automatically

### Health Check

Once deployed, test with: `GET /api/health`

### Other Platforms

This app can be deployed on any platform that supports Node.js:
- **Netlify**: Use `@netlify/plugin-nextjs`
- **Railway**: Direct deployment support
- **DigitalOcean App Platform**: Node.js support
- **AWS**: Use AWS Amplify or Lambda

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie/TV show API
- [Netflix](https://netflix.com) for design inspiration
- The open-source community for the amazing tools and libraries

## 📞 Support

If you have any questions or need help, please:
1. Check the [Issues](https://github.com/your-username/streamlist-manager/issues) page
2. Create a new issue if your question isn't already answered
3. Join our community discussions

---

**Note**: This application is not affiliated with Netflix or any other streaming service. It's an independent tool for organizing your entertainment preferences.
