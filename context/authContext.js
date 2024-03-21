import { createContext, useContext, useEffect, useState} from "react";

export const AuthContext = createContext();

//Provider Hook that creates auth object and handles state
export const AuthContextProvider = ({children}) => { //AuthContextProvider Component (to wrap children)
    // Variables declaration
    const [user,setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect (() => {
        // onAuthStateChange
    },[])

    const login = async (email,password)=>{
        try{
            //fetch...
        }catch(e){

        }
    }

    const logout = async () =>{
        try{
            //fetch...
        }catch(e){
            
        }
    }

    const register = async(email,username,password)=>{
        try{
            //fetch...
        }catch(e){
            
        }
    }
    //Component
    return(
        <AuthContextProvider value={{user, isAuthenticated, login, logout, register}}>
            {children}
        </AuthContextProvider>
    )
}

export const useAuth = () => {
    const value = useContext(AuthContext);

    if(!value){
        throw new Error('useAuth must be wrapped inside AuthContextProvider')
    }
    return value;
}