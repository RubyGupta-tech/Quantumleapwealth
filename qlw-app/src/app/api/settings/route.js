import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const settings = await prisma.setting.findMany();
    
    // Convert to a simple key-value object
    const settingsMap = {};
    settings.forEach(s => {
      settingsMap[s.key] = s.value;
    });

    return NextResponse.json(settingsMap);
  } catch (error) {
    console.error("Error fetching settings:", error);
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
  }
}

export async function PATCH(request) {
  try {
    const body = await request.json();
    
    // Body should be an object like { admin_password: "newpassword", notification_email: "new@email.com" }
    const updatePromises = Object.entries(body).map(async ([key, value]) => {
      return prisma.setting.upsert({
        where: { key },
        update: { value: String(value) },
        create: { key, value: String(value) }
      });
    });

    await Promise.all(updatePromises);

    return NextResponse.json({ success: true, message: "Settings updated successfully" });
  } catch (error) {
    console.error("Error updating settings:", error);
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
  }
}
