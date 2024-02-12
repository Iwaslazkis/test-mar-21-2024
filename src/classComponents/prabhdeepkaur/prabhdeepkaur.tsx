import { useState } from 'react'

// let badCount = 0

function MyButton() {
    const [count, setCount] = useState(0)
    //badCount++
    return (
        <button onClick={() => setCount((count) => count + 1)} style={{ backgroundColor: "palevioletred"}}>
            Prabh's count is {count}
        </button>
    )
}


export default function MyContainer() {
    return (
    <section className="container">
        <MyButton />
        <MyButton />
    </section>
    )
}