import React, { useReducer } from "react";

const initialState = {count : 0, textVisible: false};

function reducer (state, action) {
    switch(action.type) {
        case "INCREMENT": {
            return {count : state.count + 1, textVisible : true};
        }
        case "DECREMENT" : {
            return {count : state.count - 1, textVisible : false};
        }
        default: return state;
    }
}

export function MyReducer () {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>
                <button onClick={()=>{dispatch({type:"INCREMENT"})}}>Increment</button>
            </div>
            <div>
                <button onClick={()=>{dispatch({type:"DECREMENT"})}}>Decrement</button>
            </div>
            <div>
                <span>Count - {state.count}</span>
            </div>
            <div>
                <span hidden={!state.textVisible}>This is a simple text</span>
            </div>
        </div>
    );
}
 