import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    // Check if demo user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: 'demo@streamlist.com' }
    })

    if (existingUser) {
      return NextResponse.json(
        { message: 'Demo user already exists' },
        { status: 200 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash('demo123456', 12)

    // Create demo user
    const demoUser = await prisma.user.create({
      data: {
        email: 'demo@streamlist.com',
        password: hashedPassword,
        name: 'Demo User',
      }
    })

    // Create default watchlist
    await prisma.watchlist.create({
      data: {
        userId: demoUser.id,
        name: 'My Watchlist',
        description: 'My default watchlist',
        isDefault: true,
      }
    })

    // Add Netflix as a connected service
    await prisma.streamingService.create({
      data: {
        userId: demoUser.id,
        serviceName: 'netflix',
        isActive: true,
      }
    })

    return NextResponse.json(
      { 
        message: 'Demo user created successfully',
        user: {
          id: demoUser.id,
          email: demoUser.email,
          name: demoUser.name,
        }
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Demo user creation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}