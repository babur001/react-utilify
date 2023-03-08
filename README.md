# React Utilify

<div align="center">
	<br>
	<br>
	<img 
        src="https://raw.githubusercontent.com/SaburovBabur/react-utilify/main/public/Logo.svg" alt="react-utilify" 
        height="100"
    />
	<br>
	<br>
	<b>Utility Components that are joy to use!</b>
	<br>
	<br>
	<br>
	<br>
	<hr>
</div>
<br>

# Caution 🚧: The library faced some issues while development, and under rewrite and some APIs are subjet to changes. Currently does not support commonJS modules (throws error in node environment Unit tests).

## What is `react-utilify`?

<br>

It is a super lightweight **(756 bytes)** uility components to make your codebase shine ✨. Providing components such as `For`, `Loop`, `Switch Switch.Case` and `If`.

`React-utilify` is **Typescript** based thus enabling type-safety and battle tested using **jest and react-testing-library**!
<br />

<hr />

### `<For />`

```jsx
import { For } from 'react-utilify';

function Todos() {
  const todos = [
    { title: 'TS', name: 'For' },
    { title: 'Jest + RTL', name: 'map' },
  ];

  return (
    <>
      <For each={todos}>
        {(todo, idx) => (
          <>
            <h1>{todo.title}</h1>
            <p>
              {idx}: {todo.name}
            </p>
          </>
        )}
      </For>
    </>
  );
}
```

More readable than this:

```jsx
import React from 'react';

function Todos() {
  const todos = [
    { title: 'TS', name: 'For' },
    { title: 'Jest + RTL', name: 'map' },
  ];

  return (
    <>
      {todos.map((todo) => {
        return (
          <>
            <h1>{todo.title}</h1>
            <p>
              {idx}: {todo.name}
            </p>
          </>
        );
      })}
    </>
  );
}
```

#### `<If />`

```jsx
import { If } from 'react-utilify';

function Todos() {
  return (
    <>
      <if is={loading}>Loading...</if>

      <If is={error}>Error!</If>

      <If is={emptyData}>+Create task</If>

      <If is={data}>...</If>
    </>
  );
}
```

Much cleaner than this:

```jsx
import React from 'react';

function Todos() {
  return (
    <>
      {isloading ? <>Loading...</> : <>''</>}

      {isError && !isLoading && <>Error!</>}

      {data.length === 0 && !isError && <>+Create task</>}

      {data.length > 0 && !isError && <>...</>}
    </>
  );
}
```

#### `<Loop />`

The use case of this componet is while layouting components and to see multiple components in action we need to copy paste same thing over and over. With this you will do your work much simpler and productively!

```jsx
import { Loop } from 'react-utilify';

function Todos() {
  return (
    <Loop times={5}>
      <article>
        <h1>Some title</h1>
        <p>Some Paragraph</p>
      </article>
    </Loop>
  );
}
```

Instead of this:

```jsx
import { Loop } from 'react-utilify';

function Todos() {
  return (
    <>
      <article>
        <h1>Some title</h1>
        <p>Some Paragraph</p>
      </article>
      <article>
        <h1>Some title</h1>
        <p>Some Paragraph</p>
      </article>
      <article>
        <h1>Some title</h1>
        <p>Some Paragraph</p>
      </article>
      <article>
        <h1>Some title</h1>
        <p>Some Paragraph</p>
      </article>
      <article>
        <h1>Some title</h1>
        <p>Some Paragraph</p>
      </article>
    </>
  );
}
```

Want more? Just increase `times` prop: `times={1000}`

#### `Switch -> Switch.Case` (\*beta)

```jsx
function Todos() {
  const { loading, error, data } = useAPI(`todos`);

  return (
    <Switch>
      <Switch.Case is={loading}>Loading...</Switch.Case>

      <Switch.Case is={error}>Error!</Switch.Case>

      <Switch.Case is={data}>...</Switch.Case>
    </Switch>
  );
}
```

As opposed to `If` `Switch Switch.Case` renders only the case when is true and stops there!

Human readable code is awesome! We all love it!

#### Future

More awesome components to be added yet. Your ideas is important for us, do you have any utility component ideas? Share with it us at saburovbabur@gmail.com. Enjoy!
