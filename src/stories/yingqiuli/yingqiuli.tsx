import React from 'react';
import { useState } from 'react';

export default function YingqiuButton() {
  const [count, setCount] = useState(0);

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
  };

  return (
    <button style={buttonStyle} onClick={() => setCount((count) => count + 1)}>
      Yingqiu's count is {count}
    </button>
  );
}
