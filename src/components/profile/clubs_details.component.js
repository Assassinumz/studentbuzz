import ClubCard from "../general/groupCard";

const ClubsDetails = () => {
    return ( 
        <>
            <div className="mt-4 pb-2 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 header_profile">
                        <p style={{"fontSize":"1.4em","fontWeight":"500","paddingBottom":"0.5em"}}>Clubs</p>
                        <div className="add_slot">
                            <button type="button" classname="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editClubsModal" data-bs-whatever="@mdo"><i className="fa fa-sharp fa-solid fa-plus text-lg text-blueGray-400"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editClubsModal" tabIndex="-1" aria-labelledby="editClubsModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 font-semibold" id="editClubsModal">Add Club</h1>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="clubs-name" className="col-form-label">Name</label>
                                    <input type="text" className="form-control" id="clubs-name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="clubs-description" className="col-form-label">Department</label>
                                    <textarea className="form-control" id="clubs-description"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="clubs-description" className="col-form-label">Members</label>
                                    <textarea className="form-control" id="clubs-description"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="clubs-description" className="col-form-label">Followers</label>
                                    <textarea className="form-control" id="clubs-description"></textarea>
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

            <div className="flex flex-wrap mb-3 justify-center">
                <ClubCard/>
                <ClubCard/>
                <ClubCard/>
                <ClubCard/>
                <ClubCard/>
                <ClubCard/>
            </div>    
        </>
     );
}
 
export default ClubsDetails;