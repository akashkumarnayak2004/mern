
import { useEffect } from "react";
import { createContext,  useContext, useState } from "react";

export const AuthContext = createContext();


export const AuthProvider =({children})=>{
    const [token, settoken] = useState(localStorage.getItem("token") );// Initialize token from local storage
//getting the token from local storage and setting it in state token variable
const [user, setuser] = useState(null); // Initialize user state
const [isLoading, setisLoading] = useState(true); // Initialize loading state
const AuthorizationToken = `Bearer ${token}`;

const API = import.meta.env.VITE_APP_URI_API; // Get API URL from environment variable

    const storetokenInLs=(token)=>{// function to store token in local storage
        settoken(token);
        return localStorage.setItem("token",token);
    }
// const API = "http://localhost:5000";
    //logout functionality
    let isloggedIn= !! token;// Check if user is logged in if token is there it is true otherwise false
    // !! converts the token to boolean, if token is null or undefined it will be false otherwise true

    const LogoutUser =()=>{
        settoken(null);
        localStorage.removeItem("token");
    }
    //jwt authentication and to get currently logged in user
const userAuthentication = async () => {
    try {
        setisLoading(true); // Set loading state to true
        const response = await fetch(`${API}/api/auth/user`,{
            method:"GET",
            headers:{
                Authorization:AuthorizationToken, // Sending the token in the header
            }
        });
        if(response.ok){
            const data = await response.json();
            setuser(data.userData); // Set the user data in state
            console.log("User data:", data.userData); // Log the user data for debugging
            setisLoading(false); // Set loading state to false
        }else{
            setisLoading(false); // Set loading state to false
        }
    } catch (error) {
        
    }
}

    useEffect(()=>{
     userAuthentication();
    },[])
return(
<AuthContext.Provider value={{storetokenInLs, LogoutUser, API,isloggedIn,isLoading, token,user,AuthorizationToken}}>
    {children}
</AuthContext.Provider>
)
}

export const useAuth = () => {
   const AuthContextValue =useContext(AuthContext);
   if (!AuthContextValue) {
      throw new Error("useAuth must be used within an AuthProvider");
   }
    return AuthContextValue;
}
