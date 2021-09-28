import { useEffect, useState, createContext, SetStateAction, Dispatch, Context } from 'react';
import { User } from './types/maintypes';



interface UserContextInterface {
    userObject: User | null,
    setUserObject: Dispatch<SetStateAction<User | null>>
};

export const userContext = createContext(null) as Context<UserContextInterface | null>;
const ContextObj = (props: any) => {

    const [userObject, setUserObject] = useState<User | null>(null);

    const fetchUserData = async () => {
        console.log(window.location.href)
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getuser`, {
            credentials: "include",
            headers: {
                'Access-Control-Allow-Origin': window.location.href
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
        <userContext.Provider value={{userObject, setUserObject}}>{props.children}</userContext.Provider>
    )
}

export default ContextObj
