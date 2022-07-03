import React, { useContext } from "react";
import {AppContext} from './UseContextEx';
export function User () {

    const {userName} = useContext(AppContext);

    return(
        <div>
            <div>
                UserName : {userName}
            </div>
        </div>
    );
}