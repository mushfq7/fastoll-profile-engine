'use server';

export async function handleLogin(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SELISE_API_URL || 'https://api.selise.biz';
    
    const response = await fetch(`${baseUrl}/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: email,
        password: password,
        client_id: process.env.NEXT_PUBLIC_SELISE_CLIENT_ID,
        client_secret: process.env.SELISE_CLIENT_SECRET,
        grant_type: 'password'
      }),
    });

    if (!response.ok) {
      throw new Error("Authentication failed");
    }

    return { success: true };
  } catch (error) {
    console.error("Login Error:", error);
    return { success: false, error: "Invalid credentials" };
  }
}