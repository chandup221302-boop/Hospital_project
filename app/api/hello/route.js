import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';

export async function GET() {
  try {
    await dbConnect();
    return NextResponse.json({ message: 'Connected to MongoDB successfully!' });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to connect to MongoDB', error: error.message }, { status: 500 });
  }
}
