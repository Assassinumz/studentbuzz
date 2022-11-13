import ListItemSkills from "./list_item_skills.component";

const SkillsDetails = () => {
    return ( 
        <>
            <div className="mt-4 pb-2 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 header_profile">
                        <p style={{"fontSize":"1.4em","fontWeight":"500","paddingBottom":"0.5em"}}>Skills</p>
                        <div className="add_slot">
                            <button type="button" classname="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editSkillsModal" data-bs-whatever="@mdo"><i className="fa fa-sharp fa-solid fa-plus text-lg text-blueGray-400"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editSkillsModal" tabIndex="-1" aria-labelledby="editSkillsModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 font-semibold" id="editSkillsModal">Add Skill</h1>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="skills-name" className="col-form-label">Skill:</label>
                                    <input type="text" className="form-control" id="skills-name"/>
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

            <div className="text-sm" >
                <ListItemSkills />
                <ListItemSkills />
                <ListItemSkills />
                <ListItemSkills />
            </div> 
        </>
     );
}
 
export default SkillsDetails;