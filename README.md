<div align="center">
	<br>
	<br>
	<img 
        src="./logo.svg" alt="react-utilify" 
        width="75%"
    />
	<br>
	<br>
	<b>Solidjs style utility components in React that is just 287 bytes!</b>
	<br>
	<br>
	<br>
	<br>
	<hr>
</div>
<br>

<br>

### What is this?

- 287 bytes
- Automatic type inference
- Can be imported in `cjs` or `esm`
- Full test-coverage

It is a super lightweight **(287 bytes)** only uility components to make your codebase shine ✨. Pretty much like solidjs style components such as `For`, `Loop`, `Switch Switch.Case` and `If`.

### Why?

Here some codes to explore by yourself:

#### 1. `<For />`

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

JS way:

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

#### 2. `<If />`

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

#### 3. `Switch -> Switch.Case`

As opposed to `If` `Switch Switch.Case` renders only the case when is true and stops there!

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

#### 4. `<Loop />`

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

Want more? Just increase `times` prop: `times={1000}`
