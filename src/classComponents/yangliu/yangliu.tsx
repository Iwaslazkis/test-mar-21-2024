
import { useState } from 'react'


function YangliuButton(){
    const countState = useState(-123)
    const count = countState[0]
    const setCount = countState[1]

    return (
        <button onClick={() => setCount((count) => count + 1)} style={{backgroundColor:"pink"}}>
            Yliu's count is {count}
        </button>
    )
}

export default function YangliuContainer() {

    return (
        <section className='y_section' style={{fontFamily:"cursive"}}>
            <YangliuButton count=/>
            <YangliuButton />
        </section>
    )
}