import { Link, Outlet } from "react-router-dom";
import "./search.css"
import ClubCard from "../general/groupCard";

const Cards = () => {

    const clubLink = (goTO) => {
        <Link to={goTO}></Link>
    }

    return ( 
        <>  
        <div className="clubs_card_container">
            <ClubCard/>
            <ClubCard/>
            <ClubCard/>
            <ClubCard/>
        </div>
            <Outlet />
        </>
     );
}
 
export default Cards;