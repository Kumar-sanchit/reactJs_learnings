import React, { useContext } from "react";
import {AppContext} from './UseContextEx';

export function Login () {
    
    const {setUserName} = useContext(AppContext);
    return (
        <div>
            <span>Input</span>
            <input onChange={(event)=>{setUserName(event.target.value)}}></input>
        </div>
    );
}