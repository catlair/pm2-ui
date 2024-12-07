import { Hono } from 'hono';
import user from './user';
import test from './test';

const app = new Hono()
  .get('/', (c) => {
    return c.text('Hello Hono!');
  })

  .get('/hello', (c) => {
    return c.json({ message: 'Hello Hono!' });
  })

  .post('/hello', (c) => {
    return c.json({ message: 'post Hello Hono!' });
  })

  .route('/user', user)

  .route('/test', test);

export default app;
