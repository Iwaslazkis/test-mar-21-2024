import { useState } from 'react';

export default function DiwasakiButton() {
  const [count, setCount] = useState(0)

  return (
      <button onClick={() => setCount((count) => count + 1)}>
          Lajwinder's  count is {count}
      </button>
  )
}