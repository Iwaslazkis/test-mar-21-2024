import { useState } from 'react';

export  function AbhijitButton() {
  const [count, setCount] = useState(0)

  return (
      <button onClick={() => setCount((count) => count + 1)} style={{ color: 'white', backgroundColor: 'green'}}>
          Abhijit's count is {count}

      </button>


  )
}
export default function AbhijitContainer() {
  return (
  <section className="Abhijit-section">
      <AbhijitButton />
      <AbhijitButton />
  </section>
  )
}
