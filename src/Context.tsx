import React, { useEffect, useState, createContext } from 'react';
import { User } from './types/maintypes';

export const myContext = createContext({} || null);
const Context = (props: any) => {

    const [userObject, setUserObject] = useState<User | null>(null);

    const fetchUserData = async () => {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getuser`, {
            credentials: "include",
            headers: {
                'Access-Control-Allow-Origin': window.location.host
            }
        });
        try {
            const data = await res.json();
            console.log(data);
            setUserObject(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [])
    return (
        <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
    )
}

export default Context
