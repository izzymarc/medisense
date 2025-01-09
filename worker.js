addEventListener("fetch", (event) => {
        event.respondWith(handleRequest(event.request));
    });

    async function handleRequest(request) {
        const headers = {
            "Access-Control-Allow-Origin": "https://medisense.pages.dev", // Allow frontend
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        };

        // Handle preflight requests
        if (request.method === "OPTIONS") {
            return new Response(null, { headers });
        }

        const url = new URL(request.url);

        if (url.pathname === "/api/auth/login" && request.method === "POST") {
            return handleLogin(request, headers);
        }

        if (url.pathname === "/api/auth/register" && request.method === "POST") {
            return handleRegister(request, headers);
        }

        return new Response(JSON.stringify({ error: "Not Found" }), {
            status: 404,
            headers,
        });
    }

    async function handleLogin(request, headers) {
        try {
            const { email, password } = await request.json();
            // Fetch from database
            const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
            const result = await env.MEDISENSE_D1.prepare(query)
                .bind(email, password)
                .first();

            if (result) {
                return new Response(JSON.stringify({ message: "Login successful" }), {
                    headers: { ...headers, "Content-Type": "application/json" },
                });
            } else {
                return new Response(JSON.stringify({ error: "Invalid credentials" }), {
                    status: 401,
                    headers: { ...headers, "Content-Type": "application/json" },
                });
            }
        } catch (err) {
            return new Response(JSON.stringify({ error: err.message }), {
                status: 500,
                headers: { ...headers, "Content-Type": "application/json" },
            });
        }
    }

    async function handleRegister(request, headers) {
        try {
            const { name, email, password } = await request.json();
            // Insert into database
            const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
            await env.MEDISENSE_D1.prepare(query).bind(name, email, password).run();

            return new Response(JSON.stringify({ message: "Registration successful" }), {
                headers: { ...headers, "Content-Type": "application/json" },
            });
        } catch (err) {
            return new Response(JSON.stringify({ error: err.message }), {
                status: 500,
                headers: { ...headers, "Content-Type": "application/json" },
            });
        }
    }
