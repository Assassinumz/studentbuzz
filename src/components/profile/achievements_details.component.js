import AchievementItem from "../general/achievementItem";

const AchievmentDetails = () => {
    return ( 
        <>
                    <div className="mt-4 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 header_profile">
                        <p style={{"fontSize":"1.4em","fontWeight":"500","paddingBottom":"0.5em"}}>Achievements</p>
                        <div className="add_slot">
                            <button type="button" classname="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editAchievementModal" data-bs-whatever="@mdo"><i className="fa fa-sharp fa-solid fa-plus text-lg text-blueGray-400"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editAchievementModal" tabIndex="-1" aria-labelledby="editAchievementModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 font-semibold" id="editAchievementModal">Add Achievement</h1>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="achievement-name" className="col-form-label">Name</label>
                                    <input type="text" className="form-control" id="achievement-name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="achievement-description" className="col-form-label">Department</label>
                                    <textarea className="form-control" id="achievement-description"></textarea>
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
 
export default AchievmentDetails;