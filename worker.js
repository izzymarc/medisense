addEventListener('fetch', event => {
      event.respondWith(handleRequest(event.request));
    });

    async function handleRequest(request) {
      const url = new URL(request.url);

      if (url.pathname === '/api/preferences' && request.method === 'POST') {
        return handleSetPreference(request);
      }

      if (url.pathname === '/api/auth/login' && request.method === 'POST') {
        return handleLogin(request);
      }

      if (url.pathname === '/api/auth/register' && request.method === 'POST') {
        return handleRegister(request);
      }

      if (url.pathname === '/api/profile' && request.method === 'GET') {
        return handleGetProfile(request);
      }

      if (url.pathname === '/api/profile' && request.method === 'PATCH') {
        return handleUpdateProfile(request);
      }

      if (url.pathname === '/api/symptoms/check' && request.method === 'POST') {
        return handleCheckSymptoms(request);
      }

      if (url.pathname === '/api/symptoms/history' && request.method === 'GET') {
        return handleGetHistory(request);
      }

      if (url.pathname.startsWith('/api/symptoms/history/') && request.method === 'DELETE') {
        return handleDeleteHistory(request);
      }

      const response = new Response('Not Found', { status: 404 });
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      return response;
    }

    async function handleSetPreference(request) {
      try {
        const body = await request.json();
        const { userId, preference, value } = body;

        const stmt = env.MEDISENSE_D1.prepare(
          'INSERT INTO preferences (userId, preference, value) VALUES (?, ?, ?)'
        );
        await stmt.bind(userId, preference, value).run();

        const response = new Response(JSON.stringify({ message: 'Preference set successfully' }), {
          headers: { 'Content-Type': 'application/json' },
        });
        response.headers.set('Access-Control-Allow-Origin', '*');
        return response;
      } catch (error) {
        console.error('Error:', error);
        const response = new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
        response.headers.set('Access-Control-Allow-Origin', '*');
        return response;
      }
    }

    async function handleLogin(request) {
      try {
        const body = await request.json();
        const { email, password } = body;

        const response = await fetch('https://medisense.pages.dev/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        const res = new Response(JSON.stringify(data), {
          headers: { 'Content-Type': 'application/json' },
        });
        res.headers.set('Access-Control-Allow-Origin', '*');
        return res;
      } catch (error) {
        console.error('Error:', error);
        const res = new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
        res.headers.set('Access-Control-Allow-Origin', '*');
        return res;
      }
    }

    async function handleRegister(request) {
      try {
        const body = await request.json();
        const { name, email, password } = body;

        const response = await fetch('https://medisense.pages.dev/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();
        const res = new Response(JSON.stringify(data), {
          headers: { 'Content-Type': 'application/json' },
        });
        res.headers.set('Access-Control-Allow-Origin', '*');
        return res;
      } catch (error) {
        console.error('Error:', error);
        const res = new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
        res.headers.set('Access-Control-Allow-Origin', '*');
        return res;
      }
    }

    async function handleGetProfile(request) {
      try {
        const token = request.headers.get('Authorization')?.replace('Bearer ', '');
        const response = await fetch('https://medisense.pages.dev/api/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });

        const data = await response.json();
        const res = new Response(JSON.stringify(data), {
          headers: { 'Content-Type': 'application/json' },
        });
        res.headers.set('Access-Control-Allow-Origin', '*');
        return res;
      } catch (error) {
        console.error('Error:', error);
        const res = new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
        res.headers.set('Access-Control-Allow-Origin', '*');
        return res;
      }
    }

    async function handleUpdateProfile(request) {
      try {
        const token = request.headers.get('Authorization')?.replace('Bearer ', '');
        const formData = await request.formData();
        const response = await fetch('https://medisense.pages.dev/api/profile', {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: formData
        });

        const data = await response.json();
        const res = new Response(JSON.stringify(data), {
          headers: { 'Content-Type': 'application/json' },
        });
        res.headers.set('Access-Control-Allow-Origin', '*');
        return res;
      } catch (error) {
        console.error('Error:', error);
        const res = new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
        res.headers.set('Access-Control-Allow-Origin', '*');
        return res;
      }
    }

    async function handleCheckSymptoms(request) {
      try {
        const token = request.headers.get('Authorization')?.replace('Bearer ', '');
        const body = await request.json();

        const response = await fetch('https://medisense.pages.dev/api/symptoms/check', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(body),
        });

        const data = await response.json();
        const res = new Response(JSON.stringify(data), {
          headers: { 'Content-Type': 'application/json' },
        });
        res.headers.set('Access-Control-Allow-Origin', '*');
        return res;
      } catch (error) {
        console.error('Error:', error);
        const res = new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
        res.headers.set('Access-Control-Allow-Origin', '*');
        return res;
      }
    }

    async function handleGetHistory(request) {
      try {
        const token = request.headers.get('Authorization')?.replace('Bearer ', '');
        const url = new URL(request.url);
        const page = url.searchParams.get('page');
        const limit = url.searchParams.get('limit');

        const response = await fetch(`https://medisense.pages.dev/api/symptoms/history?page=${page}&limit=${limit}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });

        const data = await response.json();
        const res = new Response(JSON.stringify(data), {
          headers: { 'Content-Type': 'application/json' },
        });
        res.headers.set('Access-Control-Allow-Origin', '*');
        return res;
      } catch (error) {
        console.error('Error:', error);
        const res = new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
        res.headers.set('Access-Control-Allow-Origin', '*');
        return res;
      }
    }

    async function handleDeleteHistory(request) {
      try {
        const token = request.headers.get('Authorization')?.replace('Bearer ', '');
        const logId = request.url.split('/').pop();

        const response = await fetch(`https://medisense.pages.dev/api/symptoms/history/${logId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });

        const data = await response.json();
        const res = new Response(JSON.stringify(data), {
          headers: { 'Content-Type': 'application/json' },
        });
        res.headers.set('Access-Control-Allow-Origin', '*');
        return res;
      } catch (error) {
        console.error('Error:', error);
        const res = new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
        res.headers.set('Access-Control-Allow-Origin', '*');
        return res;
      }
    }
