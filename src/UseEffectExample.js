import React, {useState, useEffect} from "react";
import axios from "axios";

export function UseEffectExample () {
    const [comments, setData] = useState("");
    const [count, setCount] = useState(0);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then((response)=>{
            console.log(response.data);
            setData(response.data[0].email)
        }, (error)=>{
            console.log("Error in API call!");
        });
        alert("API called!!")
    },[]);
    return (
        <div>
            <span>
               Comment Email: {comments}
            </span> 
            <div></div> 
            <span>Count - {count}</span>
            <button onClick={()=>{setCount(count+1)}}>Click To Change</button>
        </div>
    );
} 