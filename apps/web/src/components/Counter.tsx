import { createSignal } from 'solid-js';
import { ArrowRightIcon } from 'lucide-solid';
import { Button } from '~ui/button';

const [count, setCount] = createSignal(0);

export default function Counter() {
  return (
    <Button variant="outline" onClick={() => setCount(count() + 1)}>
      <ArrowRightIcon></ArrowRightIcon>
      Clicks: {count()}
    </Button>
  );
}
