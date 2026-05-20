const messages = [
    { id: 1, text: "Hello, world!", name: "Rainer", created: new Date().toISOString() },
    { id: 2, text: "Welcome to Bun!", name: "Maasikas", created: new Date().toISOString() },
    { id: 3, text: "This is a simple API endpoint.", name: "Rainer", created: new Date().toISOString() },
];
let headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
};

const server = Bun.serve({

    port: 5000,
    // `routes` requires Bun v1.2.3+
    routes: {
        "/api/messages": {
            OPTIONS: async req => {
                return new Response(null, { headers: headers });
            },
            GET: async req => {
                return Response.json(messages, { headers: headers });
            },
            POST: async req => {
                let data = await req.json();
                messages.push({
                    id: messages.length + 1,
                    text: data.text,
                    name: data.name,
                    created: new Date().toISOString(),
                });
                return Response.json({ created: true, ...data }, { headers: headers });
            },
        },
    },

    // (optional) fallback for unmatched routes:
    // Required if Bun's version < 1.2.3
    fetch(req) {
        return new Response("Not Found", { status: 404 });
    },
});

console.log(`Server running at ${server.url}`);