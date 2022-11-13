import { Link } from "react-router-dom";
import UploadButton from "../upload/uploadButton";

const ClubProfile = ({setTab}) => {    

    var gotoEvents = () => {
        setTab({ "members": false , "achievements": false, "events": true, "tasks": false, "feed": false});
    }

    var gotoMembers = () => {
        setTab({ "members": true , "achievements": false, "events": false, "tasks": false, "feed": false});
    }

    var gotoAchievements = () => {
        setTab({ "members": false , "achievements": true, "events": false, "tasks": false, "feed": false});
    }

    var gotoTasks = () => {
        setTab({ "members": false , "achievements": false, "events": false, "tasks": true, "feed": false});
    }

    var gotoFeed = () => {
        setTab({ "members": false , "achievements": false, "events": false, "tasks": false, "feed": true});
    }

    return (  
        <>
            <div className="bg-white mt-0 shadow-xl px-10">
                <div className="container my-0 mx-auto">
                    <div className="flex flex-wrap py-8 flex-col sm:flex-row">
                        <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 m-auto sm:m-0">
                            <img src="data:image/jpeg;base64,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" />
                        </div>
                        <h2 className="text-black text-2xl w-full mb-3 text-center sm:text-left mt-4 sm:mt-0">GDSC</h2>
                        <div className="sm:p-2 flex-1">
                            
                            <div className="flex sm:justify-between flex-col items-center justify-center flex-wrap mb-6">
                                <div className="flex flex-wrap flex-col items-center justify-center md:w-auto w-full md:mb-0 mb-4">
                                    
                                    <div className="flex sm:w-auto w-full  justify-center">
                                        <span className="text-gray-600 mr-4 tracking-wider"><span className="text-gray-400">120</span> Followers</span>
                                        <span className="text-gray-600 mr-4 tracking-wider"><span className="text-gray-400">45</span> Members</span>
                                    </div>
                                    <div className="flex sm:w-auto sm:mt-0 mt-4 sm:mb-0 mb-2 w-full sm:justify-start justify-center">
                                        <a href="#" className="text-gray-600 mr-3 hover:text-indigo-400">
                                            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.124 96.123">
                                            <path d="M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037c-1.083 0-1.96.878-1.96 1.961v15.803c0 1.083.878 1.96 1.96 1.96H36.57v39.876c0 1.083.877 1.96 1.96 1.96h16.352c1.083 0 1.96-.878 1.96-1.96V54.287h14.654c1.083 0 1.96-.877 1.96-1.96l.006-15.803c0-.52-.207-1.018-.574-1.386-.367-.368-.867-.575-1.387-.575H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003c1.082 0 1.959-.878 1.959-1.96V1.98c0-1.081-.876-1.958-1.957-1.96z"/>
                                            </svg>
                                        </a>
                                        <a href="#" className="text-gray-600 mr-3 hover:text-indigo-400">
                                            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                            <path d="M612 116.258c-22.525 9.981-46.694 16.75-72.088 19.772 25.929-15.527 45.777-40.155 55.184-69.411-24.322 14.379-51.169 24.82-79.775 30.48-22.907-24.437-55.49-39.658-91.63-39.658-69.334 0-125.551 56.217-125.551 125.513 0 9.828 1.109 19.427 3.251 28.606-104.326-5.24-196.835-55.223-258.75-131.174-10.823 18.51-16.98 40.078-16.98 63.101 0 43.559 22.181 81.993 55.835 104.479-20.575-.688-39.926-6.348-56.867-15.756v1.568c0 60.806 43.291 111.554 100.693 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.199 117.253 87.194-42.947 33.654-97.099 53.655-155.916 53.655-10.134 0-20.116-.612-29.944-1.721 55.567 35.681 121.536 56.485 192.438 56.485 230.948 0 357.188-191.291 357.188-357.188l-.421-16.253c24.666-17.593 46.005-39.697 62.794-64.861z"/>
                                            </svg>
                                        </a>
                                        <a href="#" className="text-gray-600 hover:text-indigo-400">
                                            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169.063 169.063">
                                            <path d="M122.406 0H46.654C20.929 0 0 20.93 0 46.655v75.752c0 25.726 20.929 46.655 46.654 46.655h75.752c25.727 0 46.656-20.93 46.656-46.655V46.655C169.063 20.93 148.133 0 122.406 0zm31.657 122.407c0 17.455-14.201 31.655-31.656 31.655H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15h75.752c17.455 0 31.656 14.201 31.656 31.655v75.752z"/>
                                            <path d="M84.531 40.97c-24.021 0-43.563 19.542-43.563 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561c0-24.021-19.542-43.563-43.563-43.563zm0 72.123c-15.749 0-28.563-12.812-28.563-28.561 0-15.75 12.813-28.563 28.563-28.563s28.563 12.813 28.563 28.563c0 15.749-12.814 28.561-28.563 28.561zM129.921 28.251c-2.89 0-5.729 1.17-7.77 3.22-2.051 2.04-3.23 4.88-3.23 7.78 0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78-2.04-2.05-4.88-3.22-7.78-3.22z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <button className="border border-gray-700 md:ml-auto mr-4 rounded-full w-12 h-12 inline-flex items-center justify-center text-gray-600 hover:bg-indigo-400 hover:text-white flex-shrink-0">
                                        <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M497 80.333h-65.334V15c0-8.284-6.716-15-15-15s-15 6.716-15 15v65.333h-65.332c-8.284 0-15 6.716-15 15s6.716 15 15 15h65.332v65.334c0 8.284 6.716 15 15 15s15-6.716 15-15v-65.334H497c8.284 0 15-6.716 15-15s-6.716-15-15-15zM175.666 321.334C78.804 321.334 0 400.138 0 497c0 8.284 6.716 15 15 15h321.334c8.284 0 15-6.716 15-15 0-96.862-78.805-175.666-175.668-175.666zM175.666 64.267c-52.566 0-95.332 42.767-95.332 95.334s42.766 95.333 95.332 95.333c52.567 0 95.334-42.766 95.334-95.333s-42.767-95.334-95.334-95.334z"/>
                                        </svg>
                                    </button>
                                    <button className="border border-gray-700 rounded-full w-12 h-12 inline-flex items-center justify-center text-gray-600 hover:bg-indigo-400 hover:text-white flex-shrink-0">
                                        <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.626 511.626">
                                        <path d="M49.106 178.729c6.472 4.567 25.981 18.131 58.528 40.685 32.548 22.554 57.482 39.92 74.803 52.099 1.903 1.335 5.946 4.237 12.131 8.71 6.186 4.476 11.326 8.093 15.416 10.852 4.093 2.758 9.041 5.852 14.849 9.277 5.806 3.422 11.279 5.996 16.418 7.7 5.14 1.718 9.898 2.569 14.275 2.569h.575c4.377 0 9.137-.852 14.277-2.569 5.137-1.704 10.615-4.281 16.416-7.7 5.804-3.429 10.752-6.52 14.845-9.277 4.093-2.759 9.229-6.376 15.417-10.852 6.184-4.477 10.232-7.375 12.135-8.71 17.508-12.179 62.051-43.11 133.615-92.79 13.894-9.703 25.502-21.411 34.827-35.116 9.332-13.699 13.993-28.07 13.993-43.105 0-12.564-4.523-23.319-13.565-32.264-9.041-8.947-19.749-13.418-32.117-13.418H45.679c-14.655 0-25.933 4.948-33.832 14.844C3.949 79.562 0 91.934 0 106.779c0 11.991 5.236 24.985 15.703 38.974 10.466 13.99 21.604 24.983 33.403 32.976z"/>
                                        <path d="M483.072 209.275c-62.424 42.251-109.824 75.087-142.177 98.501-10.849 7.991-19.65 14.229-26.409 18.699-6.759 4.473-15.748 9.041-26.98 13.702-11.228 4.668-21.692 6.995-31.401 6.995h-.578c-9.707 0-20.177-2.327-31.405-6.995-11.228-4.661-20.223-9.229-26.98-13.702-6.755-4.47-15.559-10.708-26.407-18.699-25.697-18.842-72.995-51.68-141.896-98.501C17.987 202.047 8.375 193.762 0 184.437v226.685c0 12.57 4.471 23.319 13.418 32.265 8.945 8.949 19.701 13.422 32.264 13.422h420.266c12.56 0 23.315-4.473 32.261-13.422 8.949-8.949 13.418-19.694 13.418-32.265V184.437c-8.186 9.132-17.7 17.417-28.555 24.838z"/>
                                        </svg>
                                    </button>
                                </div>
                                
                            </div>
                            <p className="text-gray-500 text-center leading-normal px-4 sm:px-0">
                                Businesses often become known today through effective marketing. The marketing may be in the form of a regular news item or half column society news in the Sunday newspaper. The marketing may be in the form of a heart to heart.
                            </p>
                        </div>
                        
                    </div>
                    <div className="flex justify-center">
                        <input type={"button"} value={"Edit Profile"} className="mb-5 mt-1" style={{"padding":"0.6em","border":"0.5px solid #6366f1","borderRadius":"8px"}} data-bs-toggle="modal" data-bs-target="#editClubModal" data-bs-whatever="@getbootstrap"></input>
                    </div>
                </div>
                <div className="flex justify-center border-y-2 border-gray-200  py-5">
                    <Link className="text-gray-600 mx-5 hover:text-indigo-500" onClick={gotoMembers}>Team</Link>
                    <Link className="text-gray-600 mx-5 hover:text-indigo-500" onClick={gotoAchievements} >Achievements</Link>
                    <Link className="text-gray-600 mx-5 hover:text-indigo-500" onClick={gotoEvents}>Events</Link>
                    <Link className="text-gray-600 mx-5 hover:text-indigo-500" onClick={gotoTasks}>Tasks</Link>
                    <Link className="text-gray-600 mx-5 hover:text-indigo-500" onClick={gotoFeed}>Feed</Link>
                </div>
            </div>

            <div className="modal fade" id="editClubModal" tabIndex="-1" aria-labelledby="editClubLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 font-semibold" id="editClubModalLabel">Edit Club</h1>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="club-name" className="col-form-label">Name</label>
                                    <input type="text" className="form-control" id="club-name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="club-description" className="col-form-label">Description</label>
                                    <textarea className="form-control" id="club-description"></textarea>
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
        </>
    );
}
 
export default ClubProfile;