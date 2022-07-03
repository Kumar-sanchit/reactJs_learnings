import React, { useContext, useEffect, useLayoutEffect, useReducer, useRef, useState } from "react";

export function MyReducerEx () {

    useEffect(()=>{
        console.log("After Component rendered!");
    },[]); 

    useLayoutEffect(()=>{
        console.log("Before component render!");
    },[]);

    const [count, setCount] = useState(0);
    const userData = {
        userName : "Amish Dev",
        userProfile : "Journo",
        userAge : "43",
        userAnnualIncome : "34 Crores"
    };

    const myContext = React.createContext(userData);
    const yourContext = useContext(myContext);
    const inputRef = useRef(null);
    const initialState = {count:0};
    const [state, dispatch] = useReducer(reducer, initialState);
    function reducer(state, action) {
        switch(action.type) {
            case "INCREMENT" : {
                return {count : state.count+1}
            }
            case "DECREMENT" : {
                return {count : state.count-1}
            }
            case "RESET" : {
                return initialState;
            }
            default : return state;
        }
    }

    return (
        <div>
            <span>Count - {count}</span>
            <button onClick={()=>{setCount(count+1)}}>Click Count</button>
            <div>
                <div>Use Reducer Example</div>
                <div>Count : {state.count}</div>
                <div>
                    <button onClick={()=>{dispatch({type:"INCREMENT"})}}>Increment</button>
                    <button onClick={()=>{dispatch({type:"DECREMENT"})}}>Decrement</button>
                    <button onClick={()=>{dispatch({type:"RESET"})}}>Reset</button>
                </div>
            </div>
            <div>Use Context</div>
            <div>
                <span>User Name : {yourContext.userName}</span>
                <span>User Age : {yourContext.userAge}</span>
                <span>User Annual Income : {yourContext.userAnnualIncome}</span>
                <span>User Profile : {yourContext.userProfile}</span>
            </div>
            <div>Use Ref</div>
            <div>
                <span><input ref={inputRef}></input></span>
                <button onClick={()=>{
                        if (inputRef.current.value === "") {
                            alert("No Value!")
                            return;
                        }
                        alert(inputRef.current.value);
                        inputRef.current.value = "";
                }}>Click Reference</button>
            </div>
        </div>
    );
}
