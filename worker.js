export default {
  async fetch(request, env, ctx) {
    // Try to serve static asset
    let response = await env.ASSETS.fetch(request);

    // SPA fallback: serve index.html for non-existent routes requesting HTML
    if (response.status === 404) {
      const accept = request.headers.get('accept') || '';
      if (accept.includes('text/html')) {
        const url = new URL(request.url);
        url.pathname = '/index.html';
        response = await env.ASSETS.fetch(new Request(url.toString(), request));
      }
    }

    return response;
  },
};
