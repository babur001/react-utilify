import { useState } from 'react'
import Loop from './Components/Loop'

export default function App() {
    const [value, setValue] = useState('')

    return (
        <>
            <input
                type='text'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Loop times={5}>
                <h1>Title</h1>
            </Loop>
        </>
    )
}
