import { useState, useEffect } from 'react'

type DzhuButtonProps = { count: number, increaseCount: Function, color: object }
function DzhuButton({ count, increaseCount, color }: DzhuButtonProps) {
    return (
        <button onClick={() => increaseCount()} style={color}>
            Daniel's count is {count}
        </button>
    )
}

export default function DzhuContainer() {
    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        setInterval(() => {
            increaseCount()
        }, 1000)
        setInterval(() => {
            setToggle(oldToggle => !oldToggle)
        }, 1000)
    }, [])

    function increaseCount() {
        setCount(oldCount => oldCount + 1)
    }

    return (
        <section>
            <DzhuButton count={count} increaseCount={increaseCount} color={toggle ? { backgroundColor: "red" } : { backgroundColor: "blue" }} />
            <DzhuButton count={count} increaseCount={increaseCount} color={toggle ? { backgroundColor: "blue" } : { backgroundColor: "red" }} />
        </section>
    )
}