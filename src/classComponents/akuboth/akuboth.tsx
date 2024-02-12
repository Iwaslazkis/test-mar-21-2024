import { useEffect, useState, useRef } from 'react'


export function AveryButton({totalClicks, updateTotal}) 
{
    const [count, setCount] = useState(0);

    function newClick()
    {
        setCount((count) => count + 1);
        updateTotal();
    }

    return (
        <button style={{backgroundColor:'darkgreen'}} onClick={() => newClick()}>
            Avery's count is {totalClicks}, This button's count is {count}
        </button>
    )
}

export function TimeSinceIncident({unitOfTime = 'seconds'}) 
{

    const [count, setCount] = useState(0);
    const timer = useRef(0);
    const timerDuration = useRef(1000);

    // Reset the count and remove existing timeout
    function reset()
    {
        clearTimeout(timer.current);
        setCount(0); 
        newTimer();
    }

    // Create a timer to wait for 1 second
    function newTimer()
    {
        timer.current = setTimeout(() => 
        { 
            // Increment count
            setCount((count) => count + 1); 
            // console.log("Test");

            // Clear timer and create a new timeout
            clearTimeout(timer.current)
            newTimer();
            
        }, timerDuration.current);
    }

    // On first render, start a new timer
    useEffect(newTimer, []);

    // Set length of timer (Based on prop)
    switch (unitOfTime) 
    {
        case 'seconds':
            timerDuration.current = 1000;
            break;
        case 'milliseconds':
            timerDuration.current = 1;
            break;
        case 'centiseconds':
            timerDuration.current = 10;
            break;
        case 'decaseconds':
            timerDuration.current = 100;
            break;
        case 'minutes':
            timerDuration.current = 60000;
            break;
        case 'hours':
            timerDuration.current = 3600000;
            break;           
        default:
            timerDuration.current = 1000;
            break;
    }

    // JSX Elements
    return (
        <button style={{backgroundColor:'white', color:'black'}} onClick={() => reset()}>
            Avery's: <b>Time Since Last Click: {count} {unitOfTime}</b>
        </button>
    );




    // #region Using Timeout
    // const [count, setCount] = useState(0);
    // const timer = useRef(0);

    // // Reset the count and remove existing timeout
    // function reset()
    // {
    //     clearTimeout(timer.current);
    //     setCount(0); 
    //     newTimer();
    // }

    // // Create a timer to wait for 1 second
    // function newTimer()
    // {
    //     timer.current = setTimeout(() => 
    //     { 
    //         // Increment count
    //         setCount((count) => count + 1); 
    //         console.log("Test");

    //         // Clear timer and create a new timeout
    //         clearTimeout(timer.current)
    //         newTimer();
            
    //     }, 1000);
    // }

    // // On first render, start a new timer
    // useEffect(newTimer, []);

    // // JSX Elements
    // return (
    //     <button style={{backgroundColor:'white', color:'black'}} onClick={() => reset()}>
    //         Avery's: <b>Time Since Last Click: {count} seconds</b>
    //     </button>
    // );
    // #endregion


    // #region Using Interval instead of Timeout
    // const [count, setCount] = useState(0);

    // function reset()
    // { setCount(0); }

    // // Run effect when count is changed
    // useEffect(() =>
    // {
    //     // Set and store the interval
    //     const interval = setInterval(() =>
    //     {
    //         setCount(count + 1);
    //         // console.log("TEST");
    //     }, 1000);

    //     // Clear/Remove the interval
    //     return () => clearInterval(interval);
    // }, [count]);

    // // JSX Elements
    // return (
    //     <button style={{backgroundColor:'white', color:'black'}} onClick={() => reset()}>
    //         Avery's: <b>Time Since Last Click: {count} seconds</b>
    //     </button>
    // );
    // #endregion
}


export default function AveryContainer() 
{
    const [totalClicks, setTotalClicks] = useState<number>(0);

    return (
        <section className="AveryContainer">
            <AveryButton totalClicks={totalClicks} updateTotal={()=>setTotalClicks(totalClicks + 1)}/>
            <AveryButton totalClicks={totalClicks} updateTotal={()=>setTotalClicks(totalClicks + 1)}/>
            {/* <TimeSinceIncident unitOfTime='centiseconds' /> */}
            {/* <TimeSinceIncident unitOfTime='decaseconds' /> */}
            <TimeSinceIncident unitOfTime='seconds' />
            <TimeSinceIncident unitOfTime='minutes' />
        </section>
    );
}