import { useState } from 'react';

export  function ToriloyeButton() {
  const [count, setCount] = useState(0)

  return (
      <button onClick={() => setCount((count) => count + 1)} style={{ color: 'white', backgroundColor: 'green'}}>
          Toyyib's count is {count}

      </button>



  )
}
export default function ToriloyeContainer() {
  return (
  <section className="toyyib-section">
      <ToriloyeButton />
      <ToriloyeButton />
  </section>
  )
}


// only one default function