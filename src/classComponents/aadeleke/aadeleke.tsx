import { useState, useEffect } from 'react'

export default function tumiButton() {
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
        <button onClick={() => setCount((count) => count + 3)} style={toggle ? { backgroundColor: "Green" } : { backgroundColor: "Purple" }}>
            Tumi's count is {count}
        </button>
    )
}