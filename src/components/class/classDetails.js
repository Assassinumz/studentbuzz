import * as React from 'react';
import ClassProfile from './classProfile';
import ClassMembers from './classMembers';
import { useState, useEffect } from 'react';
import ClassFeed from '../general/groupFeed';

const ClassDetails = () => {
    var tabs = { "members": true, "feed": false};
    const [tab, setTab] = useState(tabs);

    const [user, setUser] = useState(localStorage.getItem('user'))
    const [facName, setFacName] = useState()
    const [classDeets, setClassDeets] = useState()
    const [facDeets, setFacDeets] = useState()

    const getClassDeets = async () => {
        let req = await fetch('https://studentbuzz.assassinumz.repl.co/api/faculty/getClass',{
        headers: {'Authorization': user}
        }
    )
        let data = await req.json()
        setClassDeets(data)
    }

    const getFac = async () => {
        let req = await fetch('https://studentbuzz.assassinumz.repl.co/api/faculty/get-faculty', {
            headers: {'Authorization': user},
        })

        let json = await req.json()
        
        if(req.ok) {
            setFacName(json.name)
        }
        
    }

    useEffect(() => {
        getClassDeets()
        getFac()
    }, [])

    return (  
        <>
            <div className='flex flex-col items-center justify-start bg-gray-100 min-h-screen'>
                <div className="flex flex-col w-full mr-20 mt-20 min-h-screen">
                    <ClassProfile setTab = {setTab} tab = {tab} classDeets = {classDeets} facName={facName} />

                    <div className="bg-white pb-6 flex-1">
                        <div className="container mt-0 mx-auto">
                            { tab?.members && <ClassMembers/>}
                            { tab?.feed && <ClassFeed/>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default ClassDetails;