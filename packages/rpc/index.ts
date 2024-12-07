import { hc } from 'hono/client';
import type { AppType } from '@mr/server';

export const client = hc<AppType>('http://localhost:8787');
