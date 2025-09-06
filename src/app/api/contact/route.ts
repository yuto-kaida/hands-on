import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  const contact = await prisma.contact.create({
    data: { name, email, message },
  });
  return NextResponse.json(contact);
}
