import { put } from '@vercel/blob';

export async function POST(request) {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename') || 'image.jpg';

    const blob = await put(filename, request.body, {
      access: 'public',
    });

    return Response.json(blob);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
