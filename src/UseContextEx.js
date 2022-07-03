import React, { createContext, useState } from "react";
import { Login } from "./Login";
import { User } from "./User";

export const AppContext = createContext(null);

export function MyContext() {
    const [userName, setUserName] = useState("");
    return (
        <div>
            My Component
            <div>
                <AppContext.Provider value={{userName,setUserName}}>
                    <Login></Login>
                    <User></User>
                </AppContext.Provider>
            </div>
        </div>
    );
}
