#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🎬 StreamList Manager Setup');
console.log('============================\n');

// Check if Node.js version is compatible
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);

if (majorVersion < 18) {
  console.error('❌ Node.js 18 or higher is required. Current version:', nodeVersion);
  process.exit(1);
}

console.log('✅ Node.js version check passed:', nodeVersion);

// Check if .env.local exists
const envPath = path.join(__dirname, '.env.local');
if (!fs.existsSync(envPath)) {
  console.log('📝 Creating .env.local file...');
  
  const envExample = fs.readFileSync(path.join(__dirname, '.env.example'), 'utf8');
  fs.writeFileSync(envPath, envExample);
  
  console.log('✅ .env.local created successfully');
  console.log('⚠️  Please edit .env.local and add your TMDB API key');
  console.log('   Get your free API key at: https://www.themoviedb.org/settings/api\n');
} else {
  console.log('✅ .env.local already exists\n');
}

try {
  // Install dependencies
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dependencies installed successfully\n');

  // Generate Prisma client
  console.log('🗄️  Setting up database...');
  execSync('npx prisma generate', { stdio: 'inherit' });
  execSync('npx prisma db push', { stdio: 'inherit' });
  console.log('✅ Database setup completed\n');

  // Create demo user
  console.log('👤 Creating demo user...');
  execSync('node -e "require(\'./create-demo-user.js\')"', { stdio: 'inherit' });
  console.log('✅ Demo user created successfully\n');

  console.log('🎉 Setup completed successfully!');
  console.log('\nNext steps:');
  console.log('1. Add your TMDB API key to .env.local');
  console.log('2. Run: npm run dev');
  console.log('3. Open: http://localhost:3000');
  console.log('\nDemo account:');
  console.log('Email: demo@streamlist.com');
  console.log('Password: demo123456\n');

} catch (error) {
  console.error('❌ Setup failed:', error.message);
  console.log('\nYou can try running the commands manually:');
  console.log('1. npm install');
  console.log('2. npx prisma generate');
  console.log('3. npx prisma db push');
  console.log('4. npm run dev');
  process.exit(1);
}