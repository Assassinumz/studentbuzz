import * as React from 'react';
import ClubProfile from '../../../components/club/clubProfile';
import ClubMembers from '../../../components/club/clubMembers';
import Achievements from '../../../components/general/achievementsList';
import Events from '../../../components/club/clubsEvents';
import Leaderboard from '../../../components/club/leaderboard';
import { useState } from 'react';
import TaskList from '../../../components/club/taskList';
import ClubFeed from '../../../components/general/groupFeed';

const ClubDetails = () => {
    var tabs = { "members": true , "achievements": false, "events": false, "tasks": false, "feed": false};
    const [tab, setTab] = useState(tabs);

    return (  
        <>
            <div className='flex flex-col items-center justify-start bg-gray-100 min-h-screen'>
                <div className="flex flex-col w-1/2 mr-48 mt-20 min-h-screen">
                    <ClubProfile setTab = {setTab} tab = {tab}/>

                    <div className="bg-white pb-6 flex-1">
                        <div className="container mt-0 mx-auto">
                            { tab?.members && <ClubMembers/>}
                            { tab?.achievements && <Achievements/>}
                            { tab?.events && <Events/>}
                            { tab?.tasks && <TaskList/>}
                            { tab?.feed && <ClubFeed/>}
                        </div>
                    </div>
                </div>
                <Leaderboard/>
            </div>
        </>
    );
}
 
export default ClubDetails;