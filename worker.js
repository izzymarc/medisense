export default {
        async fetch(request, env) {
            const url = new URL(request.url);

            // Handle routes
            if (url.pathname === "/api/auth/login" && request.method === "POST") {
                return handleLogin(request, env);
            } else if (url.pathname === "/api/auth/register" && request.method === "POST") {
                return handleRegister(request, env);
            } else {
                return new Response(JSON.stringify({ error: "Not Found" }), {
                    status: 404,
                    headers: { "Content-Type": "application/json" },
                });
            }
        },
    };

    async function handleLogin(request, env) {
        try {
            const { email, password } = await request.json();
            const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
            const user = await env.MEDISENSE_D1.prepare(query).bind(email, password).first();

            if (user) {
                return new Response(JSON.stringify({ message: "Login successful" }), {
                    headers: { "Content-Type": "application/json" },
                });
            } else {
                return new Response(JSON.stringify({ error: "Invalid credentials" }), {
                    status: 401,
                    headers: { "Content-Type": "application/json" },
                });
            }
        } catch (error) {
            return new Response(JSON.stringify({ error: error.message }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }
    }

    async function handleRegister(request, env) {
        try {
            const { name, email, password } = await request.json();
            const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
            await env.MEDISENSE_D1.prepare(query).bind(name, email, password).run();

            return new Response(JSON.stringify({ message: "Registration successful" }), {
                headers: { "Content-Type": "application/json" },
            });
        } catch (error) {
            return new Response(JSON.stringify({ error: error.message }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }
    }
