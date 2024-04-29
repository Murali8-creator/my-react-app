import React,{useState} from 'react';


function MyComponent3(){

    const [foods, setFoods] = useState(["Apple","Orange","Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";

        setFoods(f => [...f, newFood]);
    } 

    function handleRemoveFood(index){
        setFoods(foods.filter((element, i) => i !== index));
    }





    return (
        <div>
        <h2>List Of Food </h2>
        <ul>
            {foods.map((food, index) => <li style={{display:'inline-block', margin:'10px'}}  key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput"/>
        <button onClick={(e) => handleAddFood(e)}>Add</button>
        </div>
    );
}


export default MyComponent3