import React, { useState } from 'react';

function JashanpreetButton({ name }) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <button
      onClick={incrementCount}
      style={{
        color: 'Red',
        backgroundColor: 'Black',
        height: '50px',
        fontSize: '18px',
        border: 'solid black 5px',
        borderRadius: '20px',
        padding: '10px',
        cursor: 'pointer',
        boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease',
        marginRight: '0px',
      }}
    >
      {name} buyers: {count}
    </button>
  );
}

export default function JashanpreetContainer() {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ marginBottom: '30px', color: 'red' }}>
          Welcome to Big Boy Toyz
        </h1>
        <div style={{ display: 'flex', gap: '20px' }}>
          <JashanpreetButton name="Hellcat" />
          <JashanpreetButton name="Shelby" />
        </div>
      </div>
    </section>
  );
}
