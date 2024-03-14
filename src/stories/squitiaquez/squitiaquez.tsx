import { useState } from 'react'

export function SquitiaquezButton() {
    const [count, setCount] = useState(0)
    return ( 
        <button onClick={() => setCount((count) => count + 1)} style={{ backgroundColor: "black", color:"white", fontFamily: "Arial"}}>
            Sebastian's count {count}
        </button>
    )
}

export default function SquitiaquezContainer() {
    return (
    <>
        <SquitiaquezButton />
        <SquitiaquezButton />
    </>
    )
  }