import React from "react";

function Button(){

    // const handleClick = () => console.log("hello");

    const handleClick = (e) => e.target.textContent = "Clicked";

    const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    return (
        // <button  onClick={() => handleClick2("murali")}>Click Me</button>
        <button onDoubleClick={(e) => handleClick(e)}>Click Me</button>
    );
}



export default Button