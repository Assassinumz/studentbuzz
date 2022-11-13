import AchievementItem from "../general/achievementItem";

const ProjectDetails = () => {
    return ( 
        <>
            <div className="mt-4 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 header_profile">
                        <p style={{"fontSize":"1.4em","fontWeight":"500","paddingBottom":"0.5em"}}>Projects</p>
                        <div className="add_slot">
                            <button type="button" classname="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editProjectsModal" data-bs-whatever="@mdo"><i className="fa fa-sharp fa-solid fa-plus text-lg text-blueGray-400"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editProjectsModal" tabIndex="-1" aria-labelledby="editProjectsLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 font-semibold" id="editProjectsModalLabel">Add Project</h1>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="project-name" className="col-form-label">Name</label>
                                    <input type="text" className="form-control" id="project-name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="project-description" className="col-form-label">Department</label>
                                    <textarea className="form-control" id="project-description"></textarea>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="p-2 rounded-md bg-red-600 text-gray-100" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="p-2 rounded-md bg-indigo-600 text-gray-100">Add</button>
                        </div>
                    </div>
                </div>
            </div>
           
            <div>
                <AchievementItem/>
                <AchievementItem/>
                <AchievementItem/>
                <AchievementItem/>
                <AchievementItem/>
                <AchievementItem/>
            </div>
            
        </>
     );
}
 
export default ProjectDetails;