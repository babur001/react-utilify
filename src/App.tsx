import React from 'react';
import Switch from './lib/components/Switch';

export default function App() {
  const todos = [
    { id: 1, title: 'TS Support', name: 'React' },
    { id: 2, title: 'TS Support', name: 'Haiku' },
  ];

  const isGoz = true;

  return (
    <Switch>
      <Switch.Case is={isGoz}>Babur</Switch.Case>
      <Switch.Case is={isGoz}>Babur</Switch.Case>
      <Switch.Case is={isGoz}>Babur</Switch.Case>
      <Switch.Case is={isGoz}>Goz</Switch.Case>
    </Switch>
  );
}
