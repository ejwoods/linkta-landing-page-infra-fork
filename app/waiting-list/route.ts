
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  return NextResponse.json({ message: 'Welcome to Linkta!🌳' }, { status: 200 })
};
