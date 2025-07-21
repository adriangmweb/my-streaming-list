# 🚀 Deployment Guide - StreamList Manager

This guide covers deploying StreamList Manager to various platforms.

## ✅ Pre-Deployment Checklist

Before deploying, ensure you have:

1. **TMDB API Key**: Get from [The Movie Database](https://www.themoviedb.org/settings/api)
2. **Database**: Set up PostgreSQL/MySQL for production (SQLite not recommended)
3. **Environment Variables**: All required environment variables configured
4. **Domain**: Your deployment domain/URL

## 🌐 Vercel Deployment (Recommended)

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/streamlist-manager)

### Manual Deployment

1. **Connect Repository**
   ```bash
   # Push your code to GitHub
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

2. **Create Vercel Project**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Environment Variables**
   
   In Vercel dashboard, add these environment variables:
   
   ```env
   DATABASE_URL=postgresql://username:password@hostname:port/database
   NEXTAUTH_SECRET=your-super-secret-key-here
   NEXTAUTH_URL=https://your-app.vercel.app
   TMDB_API_KEY=your-tmdb-api-key-here
   ```

4. **Database Setup**
   
   After first deployment, run database migration:
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login and link project
   vercel login
   vercel link
   
   # Run database setup
   vercel env pull .env.local
   npx prisma db push
   ```

5. **Deploy**
   - Vercel will automatically deploy on every push to main
   - Check deployment logs in Vercel dashboard

## 🐳 Docker Deployment

### Using Docker Compose

1. **Create docker-compose.yml**
   ```yaml
   version: '3.8'
   services:
     app:
       build: .
       ports:
         - "3000:3000"
       environment:
         - DATABASE_URL=postgresql://user:pass@db:5432/streamlist
         - NEXTAUTH_SECRET=your-secret
         - NEXTAUTH_URL=http://localhost:3000
         - TMDB_API_KEY=your-tmdb-key
       depends_on:
         - db
     
     db:
       image: postgres:15
       environment:
         POSTGRES_DB: streamlist
         POSTGRES_USER: user
         POSTGRES_PASSWORD: pass
       volumes:
         - postgres_data:/var/lib/postgresql/data
   
   volumes:
     postgres_data:
   ```

2. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine
   
   WORKDIR /app
   
   COPY package*.json ./
   RUN npm ci --only=production
   
   COPY . .
   
   RUN npx prisma generate
   RUN npm run build
   
   EXPOSE 3000
   
   CMD ["npm", "start"]
   ```

3. **Deploy**
   ```bash
   docker-compose up -d
   ```

## ☁️ Railway Deployment

1. **Connect Repository**
   - Go to [Railway](https://railway.app)
   - Create new project from GitHub repo

2. **Add Database**
   - Add PostgreSQL service
   - Copy DATABASE_URL from service

3. **Configure Environment Variables**
   ```env
   DATABASE_URL=${{Postgres.DATABASE_URL}}
   NEXTAUTH_SECRET=your-secret-key
   NEXTAUTH_URL=${{RAILWAY_STATIC_URL}}
   TMDB_API_KEY=your-tmdb-key
   ```

4. **Deploy**
   - Railway automatically deploys on git push
   - Run `npx prisma db push` via Railway CLI after first deploy

## 🏗️ Netlify Deployment

1. **Install Netlify Plugin**
   ```bash
   npm install -D @netlify/plugin-nextjs
   ```

2. **Create netlify.toml**
   ```toml
   [build]
   command = "npm run build"
   publish = ".next"
   
   [[plugins]]
   package = "@netlify/plugin-nextjs"
   
   [build.environment]
   NEXTAUTH_SECRET = "your-secret"
   TMDB_API_KEY = "your-tmdb-key"
   ```

3. **Database**
   - Use external PostgreSQL (Supabase, PlanetScale, etc.)
   - Set DATABASE_URL in Netlify environment variables

## 🔐 Environment Variables Reference

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | Database connection string | `postgresql://user:pass@host:5432/db` |
| `NEXTAUTH_SECRET` | JWT secret for authentication | `your-super-secret-32-char-string` |
| `NEXTAUTH_URL` | Your app's URL | `https://myapp.vercel.app` |
| `TMDB_API_KEY` | The Movie Database API key | `your-tmdb-api-key` |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `APP_NAME` | Application name | `StreamList Manager` |
| `APP_URL` | Application URL | Same as NEXTAUTH_URL |

## 🗄️ Database Configuration

### PostgreSQL (Recommended)

```env
DATABASE_URL="postgresql://username:password@hostname:port/database?schema=public"
```

**Providers:**
- [Supabase](https://supabase.com) (Free tier available)
- [PlanetScale](https://planetscale.com) (Free tier available)
- [Railway](https://railway.app) (PostgreSQL service)
- [Neon](https://neon.tech) (Free tier available)

### MySQL

```env
DATABASE_URL="mysql://username:password@hostname:port/database"
```

Update `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

### SQLite (Development Only)

```env
DATABASE_URL="file:./prod.db"
```

⚠️ **Not recommended for production**

## 🔧 Post-Deployment Setup

1. **Run Database Migration**
   ```bash
   npx prisma db push
   ```

2. **Create Demo User** (Optional)
   ```bash
   curl -X POST https://your-app.vercel.app/api/create-demo-user
   ```

3. **Verify Deployment**
   - Visit your app URL
   - Check authentication works
   - Test TMDB API integration

## 🐛 Troubleshooting

### Common Issues

**Build Fails**
- Check environment variables are set
- Ensure TMDB_API_KEY is valid
- Verify Node.js version (18+)

**Database Connection**
- Verify DATABASE_URL format
- Check database server accessibility
- Ensure database exists

**Authentication Issues**
- Verify NEXTAUTH_SECRET is set
- Check NEXTAUTH_URL matches your domain
- Ensure cookies are enabled

**TMDB API Issues**
- Verify API key is valid
- Check API rate limits
- Ensure API key has proper permissions

### Logs and Debugging

**Vercel**
```bash
vercel logs
```

**Railway**
```bash
railway logs
```

**Docker**
```bash
docker-compose logs app
```

## 📊 Performance Optimization

### Production Checklist

- [ ] Database indexes configured
- [ ] Image optimization enabled
- [ ] Caching headers set
- [ ] CDN configured
- [ ] Environment variables secured
- [ ] Monitoring setup
- [ ] Backup strategy implemented

### Recommended Settings

**Next.js Config**
```javascript
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
}
```

**Database**
- Use connection pooling
- Enable query caching
- Set up read replicas for scale

## 🔒 Security Considerations

1. **Environment Variables**
   - Never commit .env files
   - Use strong secrets
   - Rotate keys regularly

2. **Database**
   - Use SSL connections
   - Implement proper access controls
   - Regular backups

3. **Application**
   - Keep dependencies updated
   - Use HTTPS only
   - Implement rate limiting

## 📈 Monitoring and Analytics

### Recommended Tools

- **Error Tracking**: Sentry
- **Analytics**: Vercel Analytics
- **Performance**: Vercel Speed Insights
- **Uptime**: Uptime Robot

### Setup Example

```javascript
// sentry.client.config.js
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});
```

## 🆘 Support

If you encounter issues during deployment:

1. Check the [GitHub Issues](https://github.com/your-username/streamlist-manager/issues)
2. Review deployment logs
3. Verify environment variables
4. Test locally first

For additional help, create a new issue with:
- Deployment platform
- Error messages
- Environment details