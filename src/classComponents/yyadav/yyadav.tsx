import { useState } from 'react';

export default function YyadavButton() {
  const [count, setCount] = useState(0)

  return (
      <button onClick={() => setCount((count) => count + 1)} style={{ color: 'beige', backgroundColor: 'black'}}>
          Yash's rep count {count}

      </button>
  )
}