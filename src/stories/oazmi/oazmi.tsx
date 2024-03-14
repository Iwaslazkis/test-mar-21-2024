import { useState } from 'react';

export function Button({ count, setCount }) {
    return (
        <div>
            <button className='oualid-button' onClick={() => setCount((count) => count + 2)}>
                Oualid count is {count}
            </button>
        </div>
    );
}

export default function OazmiContainer() {
    const [count, setCount] = useState(0); 
    return (
        <>
            <Button count={count} setCount={setCount} />
            <Button count={count} setCount={setCount} />

        </>
    );
}