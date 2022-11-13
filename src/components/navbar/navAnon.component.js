import { Outlet } from "react-router-dom";
import { NavbarContainer, NavbarContent, NavbarLink, NavbarLogo, Button } from "./navigation.styles";
import SchoolIcon from '@mui/icons-material/School';

import './navigation.styles';

const Navbar = () => {

    return (
        <>
            <NavbarContainer>
                <NavbarLogo to='/' className="flex justify-around items-center w-52">
                    <SchoolIcon fontSize="large" />
                    <div>
                        student<span className="text-indigo-500">B</span>uzZ
                    </div>
                    
                </NavbarLogo>
                <NavbarContent className="w-5/12">
                    <NavbarLink to='/'>Home</NavbarLink>
                    <NavbarLink to='login-faculty'>Faculty Login</NavbarLink>
                    <Button to='sign-up-uni' >Join as University</Button>
                    <Button to='sign-up-student' > Student Signup</Button>
                </NavbarContent>
            </NavbarContainer>
            <Outlet />
        </>
    );
};

export default Navbar;