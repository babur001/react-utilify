import React from 'react'
import { For, If, Loop } from 'react-utilify'

export default function App() {
    const todos = [
        { id: 1, title: 'TS Support', name: 'React' },
        { id: 2, title: 'TS Support', name: 'Haiku' },
    ]

    return (
        <For each={todos}>
            {(todo) => (
                <React.Fragment key={todo.name}>
                    <h1>{todo.name}</h1>
                </React.Fragment>
            )}
        </For>
    )
}
