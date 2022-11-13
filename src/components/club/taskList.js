import Task from "./task";

const TaskList = () => {
    return (  
        <>
            <div className = "flex flex-col ">
                <button type="button" style={{border: "solid 2px #6366f1"}} className="mt-5 self-center flex items-center w-40 justify-center hover:text-blue-400 hover:bg-blue-400 h-10 p-2 rounded-md bg-white shadow-md " data-bs-toggle="modal" data-bs-target="#addTaskModal" data-bs-whatever="@getbootstrap">Assign Task</button>
                
                <div className="modal fade" id="addTaskModal" tabIndex="-1" aria-labelledby="addTaskModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 font-semibold" id="addTaskModalLabel">Assign Task</h1>
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

                <div className="flex justify-evenly">
                    <div className="w-3/12">
                        <h4 className="text-base text-center font-semibold my-3 mt-5"> Assigned Tasks </h4>
                        <div>
                            <Task/>
                            <Task/>
                            <Task/>
                            <Task/>
                        </div>
                    </div>

                    <div className="w-3/12">
                    <h4 className="text-base text-center font-semibold my-3 mt-5"> To Approve </h4>
                        <div >
                            <Task/>
                            <Task/>
                            <Task/>
                            <Task/>
                        </div>
                    </div>

                    <div className="w-3/12">
                    <h4 className="text-base text-center font-semibold my-3 mt-5"> Completed Tasks </h4>
                        <div >
                            <Task/>
                            <Task/>
                            <Task/>
                            <Task/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default TaskList;