import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const fileUrl = searchParams.get('url');

  if (!fileUrl) {
    return new NextResponse('Missing URL parameter', { status: 400 });
  }

  try {
    const res = await fetch(fileUrl);
    
    if (!res.ok) {
      return new NextResponse(`Failed to fetch file from source: ${res.statusText}`, { status: res.status });
    }

    const headers = new Headers();
    headers.set('Content-Type', res.headers.get('Content-Type') || 'application/pdf');
    
    let filename = 'download.pdf';
    try {
      const urlObj = new URL(fileUrl);
      const pathParts = urlObj.pathname.split('/');
      const lastPart = pathParts[pathParts.length - 1];
      if (lastPart && lastPart.includes('.')) {
        filename = lastPart;
      }
    } catch (e) {
      // Ignore URL parsing errors
    }
    
    headers.set('Content-Disposition', `attachment; filename="${filename}"`);

    return new NextResponse(res.body, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Download error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
