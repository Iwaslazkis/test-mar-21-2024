import { useState } from 'react';

export default function DsharmaButton() {
  const [count, setCount] = useState(0)

  return (
      <button onClick={() => setCount((count) => count + 1)} style={{ color: 'beige', backgroundColor: 'black'}}>
          Poutine - {count} / junior chicken 1

      </button>
  )
}