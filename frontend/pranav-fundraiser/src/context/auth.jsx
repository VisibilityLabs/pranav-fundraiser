import {createContext, useContext, useEffect, useState} from 'react';
import {POST} from '../apis/api';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState(null);
    const   [token, setToken] = useState(null); 

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if(token){
            setAuth(true);
            setToken(token);
            setUser(JSON.parse(user));
        } 
    }, []); 

    const login = async ({email, password}) => {
        const res = await POST('users/login', {email, password});
        console.log(res.data)
        if(res.status === 200){
            setAuth(true);
            setUser(res.data);
            setToken(res.data.token);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data));
        }
    }

    const logout = () => {
        setAuth(false);
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    return (
        <AuthContext.Provider value={{auth, setAuth, login, logout,  token }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);