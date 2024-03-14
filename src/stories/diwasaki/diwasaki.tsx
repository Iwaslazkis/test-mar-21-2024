import { useState } from 'react'
import styled, { css } from 'styled-components'
import type { DiwasakiButtonProps } from './diwasaki.types'


let badCount = 0

const Button = styled.button<{ $pink?: boolean; }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: '#BF4F74';
  margin: 0 1em;
  padding: 0.25em 1em;


  ${props => 
    props.$pink &&
    css`
      background: '#BF4F74';
      color: white;
    `};
`

function DiwasakiButton({count, setCount }: DiwasakiButtonProps) {
    badCount++
    return (
        <Button $pink onClick={() => setCount((count) => count + 1)}>
            Diogo's count is {count}, but variable is {badCount}
        </Button>
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