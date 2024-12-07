import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { z } from '../utils/zod';
import { zValidator } from '@hono/zod-validator';
import { fromError } from 'zod-validation-error';

const app = new Hono()
  .get('/text', (c) => c.text('List Users'))
  .get('/json', (c) => c.json({ text: 'List Users' }))
  .get('/error', () => {
    throw new Error('Error 响应');
  })
  .get('/error2', () => {
    throw new HTTPException(400, { message: 'Error2 响应' });
  })
  .get(
    '/zod',
    zValidator(
      'query',
      z.object({ name: z.string(), age: z.number() }),
      (result, ctx) => {
        if (result.success) {
          return ctx.json({
            ...result.data,
          });
        }
        return ctx.json(
          {
            message: fromError(result.error).toString(),
          },
          400
        );
      }
    )
  );

export default app;
