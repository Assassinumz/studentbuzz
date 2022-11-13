import * as React from 'react';
import UniProfile from '../../components/uni/uniProfile';
import ClubMembers from '../../components/club/clubMembers';
import Faculties from '../../components/uni/faculties';
import Achievements from '../../components/general/achievementsList';
import LatestEvents from '../../components/uni/latestEvents';
import Leaderboard from '../../components/club/leaderboard';
import { useState, useEffect } from 'react';
import LatestNews from '../../components/uni/latestNews';
import StudentFaculty from '../../components/uni/studentFaculty'

const Profile = () => {
    var tabs = { "faculties": true , "achievements": false, "latestEvents": false, "latestNews": false, "student":false};
    const [tab, setTab] = useState(tabs);
    const [userUid, setUserUid] = useState(localStorage.getItem('user'))
    const [uniProfile, setUniProfile] = useState()

    const fetchUser = async () => {
        const response = await fetch(`https://studentbuzz.assassinumz.repl.co/api/uni/getUniversity`, {
        headers: {'Authorization': userUid},
        method: "GET"
        })
    
        const json = await response.json();
    
        if(response.ok){
            setUniProfile(json)
        }
        else{
          console.log(json.error)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (  
        <>
            <div className='flex flex-col items-center justify-start bg-gray-100 min-h-screen'>
                <div className="flex flex-col w-1/2 mr-48 mt-20 min-h-screen">
                    <UniProfile setTab = {setTab} tab = {tab} uniProfile={uniProfile}/>

                    <div className="bg-white pb-6 flex-1">
                        <div className="container mt-0 mx-auto">
                            { tab?.faculties && <Faculties/>}
                            { tab?.achievements && <Achievements/>}
                            { tab?.latestEvents && <LatestEvents/>}
                            { tab?.latestNews && <LatestNews/>}
                            { tab?.student && <StudentFaculty />}
                        </div>
                    </div>
                </div>
                <Leaderboard/>
            </div>
        </>
    );
}
 
export default Profile;