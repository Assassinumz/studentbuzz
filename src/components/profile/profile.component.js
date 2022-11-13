import UploadButton from "../upload/uploadButton";

const StudentDetail = () => {
    return (  
        <div className="px-6">
            <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex justify-center">
                    <div className="relative">
                        <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                    </div>
                </div> 
            </div>
            <div className="text-center" style={{"marginTop":"7em"}}>
                <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                    Jenna Stones
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    Bangalore
                </div>
                <div className="mb-2 text-blueGray-600">
                <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    Reva University
                </div>
                <div className="mb-2 text-blueGray-600">
                <i className="fas fa-solid fa-graduation-cap mr-2 text-lg text-blueGray-400"></i>
                    Information Science Engineering
                </div>
                <div className="mb-2 text-blueGray-600">
                <i className="fas fa-solid fa-hashtag mr-2 text-lg text-blueGray-400"></i>
                    USN - 1MS20IS100
                </div>
                <div className="edit_profile">
                    <input type={"button"} value={"Edit Profile"} style={{"padding":"0.6em","border":"0.5px solid #6366f1","borderRadius":"8px","marginTop":"1em"}} data-bs-toggle="modal" data-bs-target="#editProfileModal" data-bs-whatever="@getbootstrap"></input>
                </div>
            </div>

            <div className="modal fade" id="editProfileModal" tabIndex="-1" aria-labelledby="editProfileLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 font-semibold" id="editProfileModalLabel">Edit Club</h1>
                        </div>
                        <div className="modal-body">
                            <form>
                                {/* <div className="mb-3">
                                    <label htmlFor="profile-name" className="col-form-label">Name</label>
                                    <input type="text" className="form-control" id="profile-name"/>
                                </div>  */}
                                <div className="mb-3">
                                    <label htmlFor="profile-description" className="col-form-label">Description</label>
                                    <textarea className="form-control" id="profile-description"></textarea>
                                </div>
                                
                                <UploadButton label = {{"label": "Upload Display Picture"}}/>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="p-2 rounded-md bg-red-600 text-gray-100" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="p-2 rounded-md bg-indigo-600 text-gray-100">Edit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 py-4 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                        <p style={{"fontSize":"1.4em","fontWeight":"500","paddingBottom":"0.5em"}}>About Me</p>
                        <p className="text-lg leading-relaxed text-blueGray-700">
                        An artist of considerable range, Jenna the name taken
                        by Melbourne-raised, Brooklyn-based Nick Murphy
                        writes, performs and records all of his own music,
                        giving it a warm, intimate feel with a solid groove
                        structure. An artist of considerable range.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default StudentDetail;