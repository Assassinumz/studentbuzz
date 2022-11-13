import ClubCard from "../general/groupCard";

const ClubList = () => {
    return (  
        <>
            <div className="w-full h-fit flex flex-col items-end">  
                <div className="mt-5  w-full px-5 py-4 self-end mr-5 rounded-sm shadow-sm bg-white">
                    <h3 className="text-2xl font-light py-3 "> Clubs Part Of </h3>
                    <div className="flex flex-wrap">
                        <ClubCard key={1} cls={{"name": "Google Developers club", "members":[1,2,4], "followers": [4,2,5,7]}} isClass={false}/>
                        <ClubCard key={1} cls={{"name": "Google Developers club", "members":[1,2,4], "followers": [4,2,5,7]}} isClass={false}/>
                        <ClubCard key={1} cls={{"name": "Google Developers club", "members":[1,2,4], "followers": [4,2,5,7]}} isClass={false}/>
                        <ClubCard key={1} cls={{"name": "Google Developers club", "members":[1,2,4], "followers": [4,2,5,7]}} isClass={false}/>
                        <ClubCard key={1} cls={{"name": "Google Developers club", "members":[1,2,4], "followers": [4,2,5,7]}} isClass={false}/>
                        <ClubCard key={1} cls={{"name": "Google Developers club", "members":[1,2,4], "followers": [4,2,5,7]}} isClass={false}/>
                    </div>
                </div>
                <div className="mt-5  w-full px-5 py-4 self-end mr-5 rounded-sm shadow-sm bg-white">
                    <h3 className="text-2xl font-light py-3 "> Clubs You Follow </h3>
                    <div className="flex flex-wrap">
                        <ClubCard key={1} cls={{"name": "Google Developers club", "members":[1,2,4], "followers": [4,2,5]}} isClass={false}/>
                        <ClubCard key={1} cls={{"name": "Google Developers club", "members":[1,2,4], "followers": [4,2,5]}} isClass={false}/>
                        <ClubCard key={1} cls={{"name": "Google Developers club", "members":[1,2,4], "followers": [4,2,5]}} isClass={false}/>
                        <ClubCard key={1} cls={{"name": "Google Developers club", "members":[1,2,4], "followers": [4,2,5]}} isClass={false}/>
                        <ClubCard key={1} cls={{"name": "Google Developers club", "members":[1,2,4], "followers": [4,2,5]}} isClass={false}/>
                        <ClubCard key={1} cls={{"name": "Google Developers club", "members":[1,2,4], "followers": [4,2,5]}} isClass={false}/>
                    </div>
                </div>
            </div>
            
        </>
    );
}
 
export default ClubList;