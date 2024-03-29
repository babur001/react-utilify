import { render, screen } from '@testing-library/react';
import For from '.';
import React from 'react';

it('should map simple child items correctly', () => {
  const todos = [
    { title: 'TS Support', name: 'React' },
    { title: 'TS Support', name: 'Haiku' },
  ];

  render(
    <For each={todos}>
      {(todo, idx) => (
        <React.Fragment key={idx}>
          <h1>{todo.title}</h1>
          <p>
            {idx}: {todo.name}
          </p>
        </React.Fragment>
      )}
    </For>
  );

  const todoTitles = screen.getAllByRole('heading');
  expect(todoTitles.length).toBe(2);

  const todoContents = screen.getAllByText(/[0-9]+: [a-zA-Z]+/i);
  expect(todoContents.length).toBe(2);
});

it('should render various type of children correctly', () => {
  const todos = [
    { id: 1, title: 'TS Support', name: 'React' },
    { id: 2, title: 'TS Support', name: 'Haiku' },
  ];

  render(
    <For each={todos}>
      {(todo, idx) => (
        <div key={idx}>
          <h1>Something</h1>

          {(() => (
            <p>From function</p>
          ))()}

          {12}

          {[...new Array(2)].map((el, idx) => (
            <div key={idx}>
              <h1>{todo.name}</h1>
            </div>
          ))}
        </div>
      )}
    </For>
  );

  const iifeJSX = screen.getAllByText(/From function/);
  expect(iifeJSX).toHaveLength(2);
  iifeJSX.map((el) => expect(el).toBeInTheDocument());

  // ---

  const templateNums = screen.getAllByText(12);
  expect(templateNums).toHaveLength(2);
  templateNums.map((el) => expect(el).toBeInTheDocument());

  // ---

  const todoContents = screen.getAllByText(/react/i);
  const todoContents2 = screen.getAllByText(/haiku/i);
  expect(todoContents).toHaveLength(2);
  expect(todoContents2).toHaveLength(2);
});
