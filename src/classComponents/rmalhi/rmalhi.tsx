import { useState } from 'react'

// let badCount = 0

function RmalhiButton() {
    const [count, setCount] = useState(0)
    //badCount++
    return (
        <div>
            <button onClick={() => setCount((count) => count + 1)} style={{ backgroundColor: "lightblue", color:"black", fontFamily: "Jazz LET, fantasy"}}>
                Robin's count is {count}
            </button>
        </div>
    )
}


export default function RmalhiContainer() {
    return (
    <section className="container">
        <RmalhiButton />
        <RmalhiButton />
    </section>
    )
}