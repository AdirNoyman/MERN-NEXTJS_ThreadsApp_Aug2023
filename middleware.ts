import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  // Routes that are public, meaning no login required for them
  publicRoutes: ['/', '/api/webhook/clerk'],
  // Routes to ignore entirely by the middleware
  ignoredRoutes: ['/api/webhook/clerk'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
