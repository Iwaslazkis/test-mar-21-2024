import { useState } from 'react'

function DennisButton({count, setCount}) {

    return (
        <button 
            onClick={() => setCount((count) => count + 1)}
            style={{backgroundColor: 'darkblue', color: 'white'}}>
            Dennis's count is {count}
        </button>
    )
}

export default function DennisContainer() {
    const [count, setCount] = useState(0)
    return (
    <section className="dennis-section">
        <DennisButton count={ count } setCount={setCount}/>
        <DennisButton count={ count } setCount={setCount}/>
    </section>
    )
}