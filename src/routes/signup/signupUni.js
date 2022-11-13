import Signup from "../../components/signup/signupUni.component";
import { Navigate } from "react-router-dom";
import { useState } from "react";


const SignupUni = () => {
    const [uniAdd, setUniAdd] = useState(false);
    return (  
        <>
            {uniAdd ? <Navigate to="/login-uni" /> : <Signup setUniAdd={setUniAdd} />}
        </>
    );
}
 
export default SignupUni;