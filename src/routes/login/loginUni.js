import Login from '../../components/login/loginFaculty.component'; 
import { Navigate } from "react-router-dom";
import { useEffect } from 'react';
import {useAuthContext} from '../../hooks/useAuthContext';

const LoginUni = () => {
    
    const {dispatch, user} = useAuthContext();
    return (  
        <> 
            {user? <Navigate to="/uni/feed" /> : <Login type={{uni: true}} />}
        </>
    );
}

export default LoginUni;