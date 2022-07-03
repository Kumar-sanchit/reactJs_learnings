import React , { useEffect, useLayoutEffect, useRef } from "react";

export function UsemyLayoutEffect() {

    const inputRef = useRef(null);

    /*
        This will be called before page renders
    */
    useLayoutEffect(()=>{
        console.log(inputRef.current.value);
    },[]);


    /*
        This will be called after page rendering is done
    */
    useEffect(()=>{
        inputRef.current.value = "React";
    },[inputRef]);

    return (
        <div>
            <input type = "text" ref = {inputRef} value ="Type Something"></input>
        </div>
    );

}
