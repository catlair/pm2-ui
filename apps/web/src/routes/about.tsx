import { A } from '@solidjs/router';
import Counter from '~/components/Counter';

import type { AppType } from '@mr/server';
import { hc } from 'hono/client';
import { onMount } from 'solid-js';

const client = hc<AppType>('/');

export default function About() {
  onMount(async () => {
    const res = await client.api.hello.$get();
    console.log(await res.json());
  });

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        About Page
      </h1>
      <Counter />
      <p class="mt-8">
        Visit{' '}
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </a>{' '}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        {' - '}
        <span>About Page</span>
      </p>
    </main>
  );
}
