import UploadButton from "../upload/uploadButton";

const CreateClub = () => {
    return (  
        
        <>
            
            <button type="button" style={{border: "solid 2px #6366f1"}} className=" self-center flex items-center w-96 justify-center hover:text-blue-400 hover:bg-blue-400 h-10 mt-20 p-2 rounded-md bg-white shadow-md " data-bs-toggle="modal" data-bs-target="#createClubModal" data-bs-whatever="@getbootstrap">Create Club</button>

            <div className="modal fade" id="createClubModal" tabIndex="-1" aria-labelledby="createClubModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 font-semibold" id="createClubModalLabel">Create Club</h1>
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
                            <button type="button" className="p-2 rounded-md bg-indigo-600 text-gray-100">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default CreateClub;


// <div className=" bg-gray-100 w-full flex justify-center mr-40 sm:py-12">
//     <div className="relative py-3 w-7/12">
//         <div className="relative px-4 py-3 bg-white mx-8 md:mx-0 shadow rounded-sm sm:p-10">
//             <div className=" mx-auto">
//                 <div className="flex items-center space-x-5">
//                     <div className="block pl-2 font-semibold text-xl w-72 text-gray-700">
//                         <h2 className="leading-relaxed">Create Club</h2>
//                         {/* <p className="text-sm text-gray-500 font-normal leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> */}
//                     </div>
//                     </div>
//                     <div className="divide-y divide-gray-200">
//                     <div className="py-4 text-base leading-6  flex justify-between items-center text-gray-700 sm:text-lg sm:leading-7">
//                         <div className="flex ">
//                         <label className=" text-base">Club Name</label>
//                         <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Club Name"/>
//                         </div>
                        
//                         <div className="flex ">
//                         <label className=" text-base">Club Description</label>
//                         <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Club Description"/>
//                         </div>
//                     </div>
//                     <div className="pt-4 flex items-center space-x-4">
//                         <button className="flex justify-center items-center w-full text-gray-900 px-2 py-1 rounded-md focus:outline-none">
//                             <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
//                         </button>
//                         <button className="bg-indigo-500 flex justify-center items-center w-full text-white px-2 py-1 rounded-md focus:outline-none">Create</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>