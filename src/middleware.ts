import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // Add any custom middleware logic here
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Allow access to public routes
        if (req.nextUrl.pathname.startsWith('/auth/') || 
            req.nextUrl.pathname === '/' ||
            req.nextUrl.pathname.startsWith('/api/auth/') ||
            req.nextUrl.pathname.startsWith('/api/create-demo-user')) {
          return true
        }
        
        // Require authentication for dashboard and other protected routes
        return !!token
      },
    },
  }
)

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.svg$).*)',
  ],
}