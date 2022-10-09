import "std:dotenv";
import { serve } from "std:server";
import { Hono } from "x:hono";

const port = parseInt(Deno.env.get("PORT")!) || 8000;
const name = Deno.env.get("NAME") || "world";

const app = new Hono();

app.get("/", (ctx) => {
  const html = `<!doctype html>
    <html>
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>hello ${name}</title>
      </head>
      <body>
        <p>hello ${name}</p>
      </body>
    </html>`;
  return ctx.html(html);
});

await serve(app.fetch, { port });
