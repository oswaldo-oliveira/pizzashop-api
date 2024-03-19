import { Elysia } from "elysia";

const app = new Elysia()

app.listen(3333, () => {
  console.log('🚀 HTTP server running!');
})
