import React from 'react'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../store/auth'

const Logout = () => {
const {LogoutUser} = useAuth(); // ✅ Proper destructuring
useEffect(()=>{
LogoutUser()
},[LogoutUser])

return <Navigate to="/login" replace={true} />

}

export default Logout