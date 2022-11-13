import { Outlet } from "react-router-dom";

const ProfileDetails = () => {
    return ( 
        <>
            <div className="w3-container" style={{"display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"}}>
                    <ul className="w3-ul" style={{"width":"25em"}}>
                        <li>To-Do App</li>
                        <li>Tic Tac Toe Game</li>
                        <li>Facial Recognition project for Security</li>
                    </ul>
                </div>
            <Outlet />
        </>
     );
}
 
export default ProfileDetails;