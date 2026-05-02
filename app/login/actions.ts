'use server'

import { IdentityClient } from '@bloque/sdk-identity';

const client = new IdentityClient({
  clientId: process.env.NEXT_PUBLIC_SELISE_CLIENT_ID!,
  clientSecret: process.env.SELISE_CLIENT_SECRET!,
  baseUrl: process.env.NEXT_PUBLIC_SELISE_API_URL!,
});

export async function handleLogin(formData: FormData) {
 const email = formData.get('email') as string;
 const password = formData.get('password') as string;


 try {
   const response = await client.authenticate({
     username: email,
     password: password,
   });
  
   console.log("Login Success:", response);
   return { success: true };
 } catch (error) {
   console.error("Login Failed:", error);
   return { success: false, error: "Invalid email or password" };
 }
}