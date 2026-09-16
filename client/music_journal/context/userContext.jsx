import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!user) {
            //create route in backend to get user data
            axios.get('/auth/me').then(({ data }) => {
                setUser(data);
                console.log(user)
            })
        }
    }, [])
    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}