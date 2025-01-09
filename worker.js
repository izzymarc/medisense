addEventListener('fetch', event => {
      event.respondWith(handleRequest(event.request));
    });

    async function handleRequest(request) {
      const corsHeaders = {
        'Access-Control-Allow-Origin': 'https://medisense.pages.dev',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      };

      if (request.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
      }

      const url = new URL(request.url);

      if (url.pathname === '/api/auth/register' && request.method === 'POST') {
        return handleRegister(request, corsHeaders);
      }

      if (url.pathname === '/api/auth/login' && request.method === 'POST') {
        return handleLogin(request, corsHeaders);
      }

      if (url.pathname === '/api/profile' && request.method === 'GET') {
        return handleGetProfile(request, corsHeaders);
      }

      if (url.pathname === '/api/profile' && request.method === 'PATCH') {
          return handleUpdateProfile(request, corsHeaders);
      }

      if (url.pathname === '/api/symptoms/check' && request.method === 'POST') {
          return handleCheckSymptoms(request, corsHeaders);
      }

      if (url.pathname === '/api/symptoms/history' && request.method === 'GET') {
          return handleGetHistory(request, corsHeaders);
      }

      if (url.pathname.startsWith('/api/symptoms/history/') && request.method === 'DELETE') {
          return handleDeleteHistory(request, corsHeaders);
      }

      return new Response('Not Found', { status: 404, headers: corsHeaders });
    }

    async function handleRegister(request, corsHeaders) {
      try {
        const body = await request.json();
        const { name, email, password } = body;

        const response = await fetch('https://medisense.pages.dev/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();
        return new Response(JSON.stringify(data), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    async function handleLogin(request, corsHeaders) {
        try {
          const body = await request.json();
          const { email, password } = body;

          const response = await fetch('https://medisense.pages.dev/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });

          const data = await response.json();
          return new Response(JSON.stringify(data), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        } catch (error) {
          console.error('Error:', error);
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }
      }

      async function handleGetProfile(request, corsHeaders) {
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
          return new Response(JSON.stringify(data), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        } catch (error) {
          console.error('Error:', error);
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }
      }

      async function handleUpdateProfile(request, corsHeaders) {
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
          return new Response(JSON.stringify(data), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        } catch (error) {
          console.error('Error:', error);
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }
      }

      async function handleCheckSymptoms(request, corsHeaders) {
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
          return new Response(JSON.stringify(data), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        } catch (error) {
          console.error('Error:', error);
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }
      }

      async function handleGetHistory(request, corsHeaders) {
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
          return new Response(JSON.stringify(data), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        } catch (error) {
          console.error('Error:', error);
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }
      }

      async function handleDeleteHistory(request, corsHeaders) {
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
          return new Response(JSON.stringify(data), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        } catch (error) {
          console.error('Error:', error);
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }
      }
