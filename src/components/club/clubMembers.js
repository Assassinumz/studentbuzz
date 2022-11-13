import ListItem from "../general/list_item.component";

const ClubMembers = () => {
    return (  
        <>
            <div className="flex flex-col">
                <button type="button" style={{border: "solid 2px #6366f1"}} className=" mt-5 self-center flex items-center w-40 justify-center hover:text-blue-400 hover:bg-blue-400 h-10 p-2 rounded-md bg-white shadow-md " data-bs-toggle="modal" data-bs-target="#addMemberModal" data-bs-whatever="@getbootstrap">Add Member</button>
                <div className="modal fade" id="addMemberModal" tabIndex="-1" aria-labelledby="addMemberModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 font-semibold" id="addMemberLabel">Add Member</h1>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="member-usn" className="col-form-label">Member's USN</label>
                                        <input type="text" className="form-control" id="member-usn"/>
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
                <div className="flex flex-col items-center">
                    <div>
                        <h4 className="text-2xl text-center font-semibold my-5"> TEAM </h4>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                    </div>
                    <div>
                        <h4 className="text-2xl text-center font-semibold my-5"> ALUMINI </h4>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default ClubMembers;

