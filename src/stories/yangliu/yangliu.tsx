import React from 'react'; // Import React

// Define a TypeScript interface for the component props
interface YangliuButtonProps {
  onClick: () => void; // Specifies that onClick is a function that takes no arguments and returns nothing
  count: number; // Specifies that count is a number
}


function YangliuButton({ onClick, count }: YangliuButtonProps) {
  return (
    <button onClick={onClick}>
      Yliu's count is {count}
    </button>
  );
}


export default function YangliuContainer() {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <section className='y_section' style={{ fontFamily: "cursive" }}>
      <YangliuButton count={count} onClick={handleClick} />
      <YangliuButton count={count} onClick={handleClick} />
    </section>
  );
}
