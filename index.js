addEventListener('fetch', event => {
      event.respondWith(handleRequest(event.request));
    });

    async function handleRequest(request) {
      const url = new URL(request.url);

      if (url.pathname === '/api/preferences' && request.method === 'POST') {
        return handleSetPreference(request);
      }

      return new Response('Not Found', { status: 404 });
    }

    async function handleSetPreference(request) {
      try {
        const body = await request.json();
        const { userId, preference, value } = body;

        const stmt = env.MEDISENSE_D1.prepare(
          'INSERT INTO preferences (userId, preference, value) VALUES (?, ?, ?)'
        );
        await stmt.bind(userId, preference, value).run();

        return new Response(JSON.stringify({ message: 'Preference set successfully' }), {
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }
