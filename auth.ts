import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';

async function getUser(email: string): Promise<User | undefined> {
    try {
      const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
      return user.rows[0];
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }



export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
      Credentials({
         authorize(credentials) {
           //模拟任何用户都可以登录
           const user:User =  {
            id: "112233",
            name: "xwm",
            email: "xwm@xwm.com",
            password: "123"
          };
        return user
          //上线后开启
          // const parsedCredentials = z
          //   .obj({ email: z.string().email(), password: z.string().min(6) })
          //   .safeParse(credentials);
            
          // if (parsedCredentials.success) {
          //   const { email, password } = parsedCredentials.data;
          //   console.log(email);
          //   console.log(password);
            
           
          //   const user = await getUser(email);
          //   if (!user) return null;
          //   const passwordsMatch = await bcrypt.compare(password, user.password);
          //   if (passwordsMatch) return user;
          // }
          // console.log('Invalid credentials');
          // return null;
        },
      }),
    ],
  });