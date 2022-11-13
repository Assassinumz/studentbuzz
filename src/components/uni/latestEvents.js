import EventCard from "../general/eventCard";
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import { Link } from "react-router-dom";
import UploadButton from "../upload/uploadButton";
import { useState } from "react";

const LatestEvents = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    return (  
        <>  
            <div>
                <div>
                    <h4 className="text-2xl text-center font-semibold mt-5"> LATEST EVENTS 
                        <Link className="ml-3" data-bs-toggle="modal" data-bs-target="#addEventModal" data-bs-whatever="@getbootstrap"> 
                            <AddCircleOutlineSharpIcon/> 
                        </Link> 
                    </h4>
                </div>
                <main className="h-fit mx-6 py-6 flex items-center justify-center flex-wrap">
                    <EventCard/>    
                    <EventCard/>
                    <EventCard/>    
                    <EventCard/>
                </main>
            
            </div>
            
            <div className="modal fade" id="addEventModal" tabIndex="-1" aria-labelledby="addEventModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 font-semibold" id="addEventModalLabel">Add Event</h1>
                        </div>
                        <div className="modal-body">
                            <form>
                            <div className="mb-3">
                                <label htmlFor="event-name" className="col-form-label">Name</label>
                                <input type="text" className="form-control" id="event-name"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="event-description" className="col-form-label">Description</label>
                                <textarea className="form-control" id="event-description"></textarea>
                            </div>
                           
                            <UploadButton context={{label: "Upload Event Poster", selectedFile, setSelectedFile}}/>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="p-2 rounded-md bg-red-600 text-gray-100" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="p-2 rounded-md bg-indigo-600 text-gray-100">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default LatestEvents;