import React, { useRef } from "react";

export function MyRef() {

    const inputRef = useRef(null);
    
    const onClick = ()=>{
        alert(inputRef.current.value);
        inputRef.current.value = "";
    };
    return (
        <div>
            <span>
                Input : <input type="text" ref={inputRef}>
                </input>
                <div></div>
                <button onClick={onClick}>Click Me</button>
            </span>
        </div>
    );


}
