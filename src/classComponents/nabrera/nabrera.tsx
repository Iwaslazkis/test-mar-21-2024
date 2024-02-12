import React, { useEffect, useState } from 'react';

// Defining props for the buttong component
interface NabreraButtonProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}


// the component with specific type that was declared above.
const NabreraButton: React.FC<NabreraButtonProps> = ({count, setCount}) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(
      count % 2 == 0
    );
  }, [count]);

  return (
          <button onClick={() => setCount((prevCount) => prevCount + 1)} style={
              { backgroundColor: toggle ? "purple" : "green" }
            }>
              Nigel's count is {count}
          </button>
      );
}

const NabreraContainer: React.FC = () => {
  const [count, setCount] = useState(0); // The state for the count value

  return (
    <section className="nigel-section">
      <NabreraButton count={count} setCount={setCount}/>
      <NabreraButton count={count} setCount={setCount}/>
    </section>
  )
}

export default NabreraContainer;



// Not code below is typed thinking it's still js

// const NabreraButton = ({count, setCount}) => {
//   const [toggle, setToggle] = useState(false);

//   useEffect(() => {
//     setToggle( // collerate count with the index
//       count % 2 == 0
//     );
//   }, [count]);

//   return (
//           <button onClick={() => setCount((count) => count + 1)} style={
//               { backgroundColor: toggle ? "purple" : "green" }
//             }>
//               Nigel's count is {count}
//           </button>
//       );
// }

// export default function NabreraContainer() {
//   return (
// <section className="nigel-section">
//       <NabreraButton count={count} setCount={setCount}/>
//       <NabreraButton count={count} setCount={setCount}/>
//     </section>
//   )
// }

