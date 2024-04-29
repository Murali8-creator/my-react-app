import React, {useState, useEffect} from "react";

function MyComponent5(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener Added");

        return () =>{
            window.removeEventListener("resize",handleResize);
            console.log("event listener reomved");
        }
    });


    return (<>
    <p>Window width : {width}px</p>
    <p>Window height : {height}px</p>
    </>);
}


export default MyComponent5;