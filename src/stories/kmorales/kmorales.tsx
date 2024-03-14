import { useState } from 'react'

let variable = 0

export default function KylaButton() {
    const [count, setCount] = useState(0)
    variable++
    return (
        <button onClick={() => setCount((count) => count + 1)} style={{backgroundColor: 'purple'}}>
            Kyla's count is {count} {variable}
        </button>
    )
}