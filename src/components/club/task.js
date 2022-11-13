import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';

const Task = () => {
    return (  
        <>
            <div className="flex justify-center items-start">
                <div className="flex flex-col items-center p-2  bg-white rounded-lg shadow-xl  max-w-sm relative my-2 mx-1" style={{"boxShadow": "0 0 10px 1px rgba(130, 130, 130, 0.2)"}}>
                    <div>
                        <span className="text-xs font-semibold uppercase px-2  mr-2 text-gray-500  rounded-full  flex justify-center">To: &nbsp; <span className="text-indigo-700">Owais Iqbal</span></span>
                        
                        <div className="mt-2 ml-1">
                            <h4 className="text-sm font-semibold leading-tight mb-1 text-gray-900">Reva Hack Runner up</h4>
                            <p className="text-xs text-gray-600 h-32 overflow-x-hidden">Built a file converter </p>
                        </div>
                    </div>
                    
                    <div className='flex justify-between w-full p-1 items-center'>
                        <div>
                            <span className='text-sm text-gray-500'>11:26</span>
                        </div>
                        <Link>
                            <EditIcon color='#6366f1' fontSize='1em'  data-bs-toggle="modal" data-bs-target="#editTaskModal" data-bs-whatever="@getbootstrap"/>
                            {/* <div>
                                <CheckCircleSharpIcon color='#6366f1' fontSize='1em'/>
                                <CancelSharpIcon style={{"color": "#F56565", "marginLeft":"0.4em"}} fontSize='1em'/>
                            </div> */}
                        </Link>
                    </div>
                    
                </div>
            </div>

            <div className="modal fade" id="editTaskModal" tabIndex="-1" aria-labelledby="editTaskModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 font-semibold" id="editTaskModalLabel">Assign Task</h1>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="task-name" className="col-form-label">Name</label>
                                    <input type="text" className="form-control" id="task-name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="task-description" className="col-form-label">Description</label>
                                    <textarea className="form-control" id="task-description"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="task-assignedTo" className="col-form-label">Assigned To</label>
                                    <select className="ml-2 w-40" name="task-assignedTo" id="task-assignedTo">
                                        <option value="1">Member 1</option>
                                        <option value="2">Member 2</option>
                                        <option value="3">Member 3</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="p-2 rounded-md bg-red-600 text-gray-100" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="p-2 rounded-md bg-indigo-600 text-gray-100">Assign</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Task;