import React, {useEffect, useState } from 'react'
import SignInRoutes from './SignRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import { useAuth } from '../context/auth'
const Routes = () => {
    const { auth, setAuth, login, logout, token} = useAuth()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        if (auth) {
            setIsAuthenticated(true)
        }
    }, [auth, token])

    /**
  * @desc Do the logic for checking if the user is logged in or not 
  */
  
    return isAuthenticated ? <ProtectedRoutes /> : <SignInRoutes />

}

export default Routes