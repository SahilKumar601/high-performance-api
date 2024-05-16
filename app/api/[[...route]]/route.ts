export const runtime = 'edge';
import { Hono } from "hono"; 
import { handle } from "hono/vercel";
const app = new Hono().basePath('/api');;
app.get('/search',(c)=>{
    return c.json({})
})

export const GET= handle(app);
export default app as never;