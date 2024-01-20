import React, {useEffect, useState } from 'react'
import SignInRoutes from './SignRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import { useAuth } from '../context/auth'
import LiteRoutes from './LiteRoutes';
const Routes = () => {
    const { auth, setAuth, login, logout, token} = useAuth()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        if (auth) {
            setIsAuthenticated(true)
        }
    }, [auth, token])

    /**
  * @desc the logic for checking if the user is logged in or not 
  */
  
    return isAuthenticated ? <ProtectedRoutes /> : <SignInRoutes />

}

const RoutesLite=()=>{
    return <LiteRoutes/>
}

export default RoutesLite