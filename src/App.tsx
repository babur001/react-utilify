import React from 'react';
import { For } from './lib';

export default function App() {
  const todos = [
    { id: 1, title: 'TS Support', name: 'React' },
    { id: 2, title: 'TS Support', name: 'Haiku' },
  ];

  return (
    <>
      <For each={todos}>
        {(todo) => (
          <div key={todo.name}>
            <h1>Something</h1>
            {(() => 12)()}
            {[...new Array(5)].map(() => (
              <div key={todo.id}>
                <h1>{todo.name}</h1>
              </div>
            ))}
          </div>
        )}
      </For>
      <hr />
      <For each={todos}>
        {(todo) => (
          <React.Fragment key={todo.name}>
            <h1>{todo.name}</h1>
          </React.Fragment>
        )}
      </For>
    </>
  );
}
