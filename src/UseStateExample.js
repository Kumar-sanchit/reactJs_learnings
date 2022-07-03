import React, {useState} from "react";

export function MyUseState() {

    const [count, setCount] = useState(0);
    const [inputVal,setInputVal] = useState("Type in Something......");
    return(
        <div>
            <span>Count - {count}</span>
            <button onClick={()=>{setCount(count+1)}}>Click Me</button>
            <div></div>
            <span>
                <input type="text" onChange ={(e)=>{setInputVal(e.target.value)}}/>
                <span>{inputVal}</span>
            </span>
        </div>
    );
}