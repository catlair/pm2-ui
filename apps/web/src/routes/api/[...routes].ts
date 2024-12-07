import type { APIEvent } from '@solidjs/start/server';
import { app } from '@mr/server/lib';

const handler = (evt: APIEvent) => app.fetch(evt.request);

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
