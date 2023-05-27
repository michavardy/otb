'use client';

import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";


interface LoginContextProps {
    userData: any | null,
    setUserData: Dispatch<SetStateAction<any>>,
    isSignedIn: boolean,
    setIsSignedIn: Dispatch<SetStateAction<boolean>>,
}

const LoginContext = createContext<LoginContextProps>({
    userData: null,
    setUserData: (): any => { },
    isSignedIn: false,
    setIsSignedIn: (): any => false,
})

export const LoginContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <LoginContext.Provider value={{ userData, setUserData, isSignedIn, setIsSignedIn }}>
            {children}
        </LoginContext.Provider>
    )

}

export const useLoginContext = () => useContext(LoginContext);