import { useState } from 'react';

function SarefinButton({ incrementCount, count, label }) {
  return (
    <button
      onClick={incrementCount}
      style={{
        backgroundColor: "#f0f0f0",
        color: "#000",
      }}
    >
      {label} - Count is: {count}
    </button>
  );
}

function SarefinContainer() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);

  return (
    <div >
      <SarefinButton incrementCount={incrementCount} count={count} label="Button 1" />
      <SarefinButton incrementCount={incrementCount} count={count} label="Button 2" />
    </div>
  );
}

export default SarefinContainer;