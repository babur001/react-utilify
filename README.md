### What is `react-utilify`?

It helps you to write cleaner code, by providing components like `<For />` and `<If />`. It is written in Typescript and unit tested using Jest + React Testing Library.

#### `<For />`

```jsx
import { For } from 'react-utilify'

function Todos() {
    const todos = [
        { title: 'TS', name: 'For' },
        { title: 'Jest + RTL', name: 'map' },
    ]

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
    )
}
```

More readable than this:

```jsx
import React from 'react'

function Todos() {
    const todos = [
        { title: 'TS', name: 'For' },
        { title: 'Jest + RTL', name: 'map' },
    ]

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
                )
            })}
        </>
    )
}
```

#### `<If />`

```jsx
import { If } from 'react-utilify'

function Todos() {
    return (
        <>
            <if is={loading}>Loading...</if>

            <If is={error}>Error!</If>

            <If is={emptyData}>+Create task</If>

            <If is={data}>...</If>
        </>
    )
}
```

Much cleaner than this:

```jsx
import React from 'react'

function Todos() {
    return (
        <>
            {isloading ? <>Loading...</> : <>''</>}

            {isError && !isLoading && <>Error!</>}

            {data.length === 0 && !isError && <>+Create task</>}

            {data.length > 0 && !isError && <>...</>}
        </>
    )
}
```

This helps is to understand our code smoothly while reading! We believe making things more wordy, helps us to clearly identify what actually is happening, without overthinking.

#### Future

Do you have any utility component ideas? Share with me at saburovbabur@gmail.com
