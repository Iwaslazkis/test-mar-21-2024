import { useState } from 'react'

let badCount = 0

function DiwasakiButton({count, setCount }) {
    badCount++
    return (
        <button onClick={() => setCount((count) => count + 1)}>
            Diogo's count is {count}, but variable is {badCount}
        </button>
    )
}


export default function DiwasakiContainer() {
    const [count, setCount] = useState(0)
    return (
    <section className="diogo-section">
        <DiwasakiButton count={ count } setCount={setCount}/>
        <DiwasakiButton count={ count } setCount={setCount}/>
    </section>
    )
}


// import { useState } from 'react'


// export function DiwasakiButton({totalClicks}) 
// {   console.log(totalClicks)
//     const [count, setCount] = useState(0)

//     return (
//         <button style={{backgroundColor:'darkgreen'}} onClick={() => setCount((count) => count + 1)}>
//             Diogo's count is {totalClicks}, This button's click is {count}
//         </button>
//     )
// }


// export default function DiwasakiContainer() 
// {
//     const [totalClicks, setTotalClicks] = useState<Number>(0)
//     return (
//         <section className="AveryContainer">
//             <DiwasakiButton totalClicks={totalClicks} />
//             <DiwasakiButton totalClicks={totalClicks} />
//             <DiwasakiButton totalClicks={totalClicks} />
//         </section>
//     )
// }