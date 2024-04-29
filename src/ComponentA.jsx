import React,{ useState,createContext } from "react";
import ComponentB from "./ComponentB";


//useContext() = React Hook that allows you to share values
                // between multiple levels of components
                // without passing props through each level


                //provider component
                //1.import {createContext} from 'react'
                //2. export const MyContext = createContext();
                //3.<MyContext.Provider value={value}>
                //<Child/>
                //<MyContext.Provider>
            //Consumer Components
            //1.import React. {useContext} from 'react';\
            //import {MyContext} from './ComponentA'
            // 2. const value = useContext(MyContext);    


export const UserContext = createContext();



function ComponentA(){

    const [user, serUser] = useState("murali");

    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
            <ComponentB/>
            </UserContext.Provider>
        </div>
    );
}

export default ComponentA