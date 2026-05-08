import { NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";

export async function POST(request) {
  try {
    const { password } = await request.json();

    // Check DB for custom password
    const dbPasswordSetting = await prisma.setting.findUnique({
      where: { key: 'admin_password' }
    });

    const validPassword = dbPasswordSetting ? dbPasswordSetting.value : process.env.ADMIN_PASSWORD;

    if (password === validPassword) {
      const response = NextResponse.json({ success: true });
      
      // Set an HTTP-only cookie to keep the user logged in
      response.cookies.set({
        name: 'admin_auth',
        value: 'authenticated',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });
      
      return response;
    }

    return NextResponse.json(
      { success: false, error: 'Invalid password' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
