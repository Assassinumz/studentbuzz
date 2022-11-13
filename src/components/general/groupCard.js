const ClubCard = () => {
    return (  
        <>
            <div >
                <div className="p-3 w-fit   rounded-2xl  hover:shadow-md transition duration-300">
                    <img className="m-auto rounded-xl w-56" src="https://images.unsplash.com/photo-1547517023-7ca0c162f816" alt="" />
                    <div className="flex flex-col justify-between items-center">
                        <div className="mt-2">
                            <h1 className="text-base font-semibold">Google Developers Students Club </h1>
                        </div>
                        <div className="mt-2 flex items-center justify-evenly w-11/12">
                            <button className="text-white text-sm font-semibold bg-indigo-400 p-1 px-2 rounded-lg shadow-md">25 Members</button>
                            <p className="">200 Followers</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default ClubCard;