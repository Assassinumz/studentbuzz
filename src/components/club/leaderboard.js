import BoardMember from "./boardMember";
import LeaderboardSharpIcon from '@mui/icons-material/LeaderboardSharp';

const Leaderboard = () => {
    return (  
        <>
            <div className="max-w-screen-xl mt-5 mx-auto px-6 fixed top-2 right-0">
            <div className="flex justify-center p-4 px-3 py-10">
                <div className="w-full max-w-md">
                    <div className="bg-white w-max shadow-md rounded-sm px-3 py-2 mb-4">
                        <div className="text-gray-700 text-lg font-semibold py-2 px-2 flex">
                            Leaderboard  <LeaderboardSharpIcon className="ml-3"/>
                        </div>
                        
                        <div className="py-1 flex flex-col text-sm overflow-y-auto" style={{maxHeight: "80vh"}}>
                            <BoardMember/>
                            <BoardMember/>
                            <BoardMember/>
                            <BoardMember/>
                            <BoardMember/>
                            
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Leaderboard;