import AchievementItem from "./achievementItem";

const Achievements = () => {
    return (  
        <>  
            <div className=" flex flex-col">
                <button type="button" style={{border: "solid 2px #6366f1"}} className="mt-5 self-center flex items-center w-40 justify-center hover:text-blue-400 hover:bg-blue-400 h-10 p-2 rounded-md bg-white shadow-md " data-bs-toggle="modal" data-bs-target="#addAchievementModal" data-bs-whatever="@getbootstrap">Add Achievement</button>
                <div className="modal fade" id="addAchievementModal" tabIndex="-1" aria-labelledby="addAchievementModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 font-semibold" id="addAchievementModalLabel">Achievements</h1>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="achievement-name" className="col-form-label">Name</label>
                                        <input type="text" className="form-control" id="achievement-name"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="achievement-description" className="col-form-label">Description</label>
                                        <textarea className="form-control" id="achievement-description"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="achievement-date" className="col-form-label">Date</label>
                                        <input type="date" className="form-control" id="achievement-date"/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="p-2 rounded-md bg-red-600 text-gray-100" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="p-2 rounded-md bg-indigo-600 text-gray-100">Create</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <AchievementItem/>
                    <AchievementItem/>
                    <AchievementItem/>
                    <AchievementItem/>
                    <AchievementItem/>
                    <AchievementItem/>
                </div>
            </div>
        </>
    );
}
 
export default Achievements;