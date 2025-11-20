import type { APIRoute } from 'astro';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const GET: APIRoute = async () => {
  try {
    const contentPath = join(process.cwd(), 'content', 'pages', 'index.json');

    const content = await readFile(contentPath, 'utf-8');
    const data = JSON.parse(content);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    // If file doesn't exist, return empty content
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return new Response(JSON.stringify({ html: '', css: '', assets: [], components: [] }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    console.error('Error loading content:', error);
    return new Response(JSON.stringify({ success: false, error: 'Failed to load content' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
