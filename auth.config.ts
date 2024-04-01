import type { NextAuthConfig } from 'next-auth';
 
/**
 * 这里可以添加用户的权限
 */

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      // console.log(auth);
      
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')|| nextUrl.pathname.startsWith('/texas');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;