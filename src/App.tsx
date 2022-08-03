import React, { useState } from 'react'
import For from './Components/For'

export default function App() {
    const todos = [
        { title: 'TS', name: 'For' },
        { title: 'Jest + RTL', name: 'map' },
    ]
    const [value, setValue] = useState('')

    return (
        <>
            <input
                type='text'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
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
        </>
    )
}
