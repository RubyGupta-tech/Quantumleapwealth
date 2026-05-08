import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    // We expect either { status: 'New' | 'In Discussion' | 'Client' }
    // or { isArchived: true | false } in the body.
    
    const updatedLead = await prisma.lead.update({
      where: { id },
      data: {
        ...(body.status !== undefined && { status: body.status }),
        ...(body.isArchived !== undefined && { isArchived: body.isArchived }),
        ...(body.notes !== undefined && { notes: body.notes }),
        ...(body.tags !== undefined && { tags: body.tags }),
      },
    });

    return NextResponse.json({ success: true, lead: updatedLead });
  } catch (error) {
    console.error("Failed to update lead:", error);
    return NextResponse.json({ error: "Failed to update lead" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    
    await prisma.lead.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete lead:", error);
    return NextResponse.json({ error: "Failed to delete lead" }, { status: 500 });
  }
}
