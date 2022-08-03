import { render, screen } from '@testing-library/react'
import React from 'react'
import For from '.'

it('should map items correctly', () => {
    const todos = [
        { title: 'TS Support', name: 'React' },
        { title: 'TS Support', name: 'Haiku' },
    ]

    render(
        <For each={todos}>
            {(todo, index) => (
                <React.Fragment key={todo.name}>
                    <h1>{todo.title}</h1>
                    <p>
                        {index}: {todo.name}
                    </p>
                </React.Fragment>
            )}
        </For>
    )

    const todoTitles = screen.getAllByRole('heading')
    expect(todoTitles.length).toBe(2)

    const todoContents = screen.getAllByText(/[0-9]+: [a-zA-Z]+/i)
    expect(todoContents.length).toBe(2)
})
