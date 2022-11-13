import { Outlet } from "react-router-dom";
import ListItem from "../general/list_item.component";
import "./search.css"

const List = () => {
    return ( 
        <>
            <div className="container">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <div className="career-search mb-60">
                        <div className="filter-result flex flex-col items-center mr-28">
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                        </div>
                    </div>
                </div>
            </div>

        </div>
            <Outlet />
        </>
     );
}
 
export default List;