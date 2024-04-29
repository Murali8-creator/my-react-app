import React,{useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () =>{

        //takes the pending state to calculate the next state.
        //react puts your updater function in a queue 
        //During the next render, it will call them in same order.

        setCount(count => count+1);
        setCount(count => count+1);
        setCount(count => count+1);
    }

    const decrement = () => {

        //uses the current state to calculate the next state.
        //set functions do not trigger an update\
        //React batches together state updates for performance reasons
        //next state becomes the current state after an update
        setCount(count-1); //setCount(0-1);
        setCount(count-1); //setCount(0-1);
        setCount(count-1);//setCount(0-1);
                         //update
    }

    const reset = () => {
        setCount(0);
    }
    
    return(
        <>
        <h1>Count : {count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        </>
    );
}

export default Counter