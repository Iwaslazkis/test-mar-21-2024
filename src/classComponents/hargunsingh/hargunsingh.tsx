import { useState } from 'react';

function HargunsinghButton() {
  const [count, setCount] = useState(0)

  return (
      <button onClick={() => setCount((count) => count + 1)} style={{ color: 'brown', backgroundColor: 'white', height: '50px',fontSize: '18px',border: 'solid black 5px', borderRadius:'20px', padding: '10px' }}>
          Hargun's count is {count}

      </button>
  )
}

export default  function HargunsinghContainer() {
  return (
  <section>
    <HargunsinghButton />
    <HargunsinghButton />

  </section>
  )
}