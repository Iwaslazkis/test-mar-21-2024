import React, { useState } from 'react';
import styled from 'styled-components'

// Assuming getRandomColor is defined at the same level as before
const getRandomColor = () => {
  const colors = ['red', 'blue', 'green', 'purple', 'pink', 'orange', 'yellow', 'indigo'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const StyledButton = styled.button<{ isHovered: boolean; initialBgColor: string }>`
  background-color: ${(props) => (props.isHovered ? getRandomColor() : props.initialBgColor)};
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

function TysonButton({
  backgroundColor = 'blue',
  count,
  setCount,
}: {
  backgroundColor?: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledButton
      isHovered={isHovered}
      initialBgColor={backgroundColor}
      onClick={() => setCount(count + 1)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Tyson's count is: {count}
    </StyledButton>
  );
}

// DiwasakiContainer component definition
function TysonContainer({ backgroundColor }: { backgroundColor: string }) {
  const [count, setCount] = useState(0);

  return (
    <section className="diogo-section">
      <TysonButton backgroundColor={backgroundColor} count={count} setCount={setCount} />
      {/* Passing a default color to the second button for consistent behavior */}
      <TysonButton backgroundColor="blue" count={count} setCount={setCount} />
    </section>
  );
}

export default TysonContainer;
