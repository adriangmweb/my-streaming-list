const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createDemoUser() {
  try {
    // Check if demo user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: 'demo@streamlist.com' }
    });

    if (existingUser) {
      console.log('Demo user already exists');
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash('demo123456', 12);

    // Create demo user
    const demoUser = await prisma.user.create({
      data: {
        email: 'demo@streamlist.com',
        password: hashedPassword,
        name: 'Demo User',
      }
    });

    // Create default watchlist
    await prisma.watchlist.create({
      data: {
        userId: demoUser.id,
        name: 'My Watchlist',
        description: 'My default watchlist',
        isDefault: true,
      }
    });

    // Add Netflix as a connected service
    await prisma.streamingService.create({
      data: {
        userId: demoUser.id,
        serviceName: 'netflix',
        isActive: true,
      }
    });

    console.log('Demo user created successfully');
  } catch (error) {
    console.error('Error creating demo user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createDemoUser();