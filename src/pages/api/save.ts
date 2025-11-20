import type { APIRoute } from 'astro';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { html, css, assets, components } = data;

    const contentPath = join(process.cwd(), 'content', 'pages', 'index.json');

    const content = {
      html,
      css,
      assets,
      components,
      updatedAt: new Date().toISOString()
    };

    await writeFile(contentPath, JSON.stringify(content, null, 2), 'utf-8');

    return new Response(JSON.stringify({ success: true, message: 'Content saved successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error saving content:', error);
    return new Response(JSON.stringify({ success: false, error: 'Failed to save content' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
