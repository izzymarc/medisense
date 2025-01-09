export default {
      async fetch(request, env, ctx) {
        const url = new URL(request.url);

        const corsHeaders = {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        };

        if (request.method === 'OPTIONS') {
          return new Response(null, { headers: corsHeaders });
        }

        // Handle /api/users to fetch all users
        if (url.pathname === '/api/users' && request.method === 'GET') {
          return handleGetUsers(env, corsHeaders);
        }

        // Handle /api/preferences to fetch user preferences
        if (url.pathname === '/api/preferences' && request.method === 'GET') {
          return handleGetPreferences(request, env, corsHeaders);
        }

        // Default 404 Response
        return new Response(JSON.stringify({ error: 'Not Found' }), {
          status: 404,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      },
    };

    // Fetch all users
    async function handleGetUsers(env, corsHeaders) {
      try {
        const stmt = env.MEDISENSE_D1.prepare('SELECT * FROM users;');
        const result = await stmt.all();

        return new Response(JSON.stringify(result.results), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    // Fetch preferences for a specific user
    async function handleGetPreferences(request, env, corsHeaders) {
      try {
        const userId = new URL(request.url).searchParams.get('userId');
        if (!userId) {
          return new Response(JSON.stringify({ error: 'Missing userId parameter' }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }

        const stmt = env.MEDISENSE_D1.prepare(
          'SELECT * FROM preferences WHERE userId = ?;'
        );
        const result = await stmt.bind(userId).all();

        return new Response(JSON.stringify(result.results), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }
