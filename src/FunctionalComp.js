import React, {useState} from "react";

export function Functional () {
    const [color, setColor] = useState("Blue");
    const [count, setCount] = useState(0);
    return(
        <div>
            <span>This {color} is my favourite Color!!</span>
            <div></div>
            <button onClick={()=>setColor("orange")}>Change to Orange</button>
            <div></div>
            <div>
                <span>No of counts is :{count}</span>
                <div></div>
                <button onClick={()=>setCount(count+1)}>Change Count</button>
            </div>
        </div>
    );
} 

