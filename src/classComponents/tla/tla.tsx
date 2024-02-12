import{ useState } from 'react';


function TysonButton({count, setCount}) {
    const [isHovered, setIsHovered] = useState(false);
    const colors = ['red','blue','green','purple','pink','orange','yellow','indigo']

    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
      };
    
    const buttonStyle = {
        backgroundColor: isHovered ? getRandomColor() : 'initial', 
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
    };

    return (
        <button
            onClick={() => setCount(count + 1)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={buttonStyle}
        >
            Tyson's count is: {count}
        </button>
    );



}

export default function TysonContainer() {
    const [count, setCount] = useState(0);
    return(
  <section className="diogo-section">
  <TysonButton count={count} setCount={setCount}/>
  <TysonButton count={count} setCount={setCount}/>
  </section>
    )
}






