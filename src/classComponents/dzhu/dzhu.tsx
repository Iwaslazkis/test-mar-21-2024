import { useState, useEffect } from 'react'

export default function DzhuButton() {
    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        setInterval(() => {
            setCount(oldCount => oldCount + 1)
        }, 1000)
        setInterval(() => {
            setToggle(oldToggle => !oldToggle)
        }, 2000)
    }, [])

    return (
        <button onClick={() => setCount((count) => count + 1)} style={toggle ? { backgroundColor: "red" } : { backgroundColor: "blue" }}>
            Daniel's count is {count}
        </button>
    )
}