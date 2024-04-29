//useState() = Re-renders the component when the state values changes

//useRef() = use Reference does not cause re-renders when its value
//changes .when you want a component to "remember" some information
// but you don't want that information to trigger new renders.

//1.Accessing/Interacting with DOM elements
//2.Handling Focus, Animations and Transitions
// 3. Managing Timers and Intervals

import { useState,useEffect,useRef } from "react";

function UseRef(params) {

    // const [number , setNumber] = useState(0);

    // const ref = useRef(0);//useRef returns a ref object with a single current property initially set to the initial value you provided

    const inputRef = useRef(null);

    useEffect(() => {
        console.log("Component rendered");
        // document.title=number;
        console.log(inputRef);
    });

    function handleClick(){
        // setNumber(n => n+1);
        // ref.current++;
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
        console.log(inputRef.current);
    }

    return(
        <>
        <button>Click Me!</button>
        <input type="text" ref={inputRef} onFocus={handleClick}/>
        </>
    );
}

export default UseRef