import { A, useLocation } from '@solidjs/router';
import { For } from 'solid-js/web';
import { Tabs } from '~ui/tabs';

export default function Nav(props: Tabs.RootProps) {
  const options = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
  ];

  const location = useLocation();

  return (
    <Tabs.Root
      orientation="vertical"
      value={options.find(({ path }) => location.pathname === path)?.id}
      {...props}
    >
      <Tabs.List>
        <For each={options}>
          {(option) => (
            <A href={option.path}>
              <Tabs.Trigger value={option.id}>{option.label}</Tabs.Trigger>
            </A>
          )}
        </For>
        <Tabs.Indicator />
      </Tabs.List>
    </Tabs.Root>
  );
}
