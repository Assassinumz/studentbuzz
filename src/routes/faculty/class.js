import * as React from 'react';
import CreateClass from '../../components/class/createClass';
import ClassDetails from '../../components/class/classDetails';
import { useState } from 'react';
import { useEffect } from 'react';
import ClubCard from '../../components/general/groupCard';


export default function Class() {

    const  [hasClass, setHasClass] = useState(false);
    const [user, setUser] = useState(localStorage.getItem('user'))
    const [faculty, setFaculty] = useState(true)
    const [allClubs, setAllClubs] = useState([])

    const getFac = async () => {
        let req = await fetch('https://studentbuzz.assassinumz.repl.co/api/faculty/get-faculty', {
            headers: {'Authorization': user},
        })

        let json = await req.json()
        
        if(json.type === 'faculty') {
            setFaculty(true)
        }
        else {
            setFaculty(false)
        }
        console.log(json.classes.length)

        if(json.classes.length !== 0) {
            setHasClass(true)
        }

    }

    const getAllClubs = async () => {
        let req = await fetch('https://studentbuzz.assassinumz.repl.co/api/faculty/allClasses', {
            headers: {'Authorization': user},
        })

        let json = await req.json()

        setAllClubs(json.classes)
    }
    
    useEffect(() => {

        getFac()
        getAllClubs()
    }, [user]);


    return (
        <>
            <div className='flex flex-col items-end justify-start bg-gray-100 min-h-screen'>
                
                {
                    faculty ? 
                    <div className='flex flex-col' style={{"width": "80%"}}>
                    { !hasClass && <CreateClass/>}
                    { hasClass && <ClassDetails/>}
                    </div>
                    :
                    <div className="mt-20 w-[82vw] px-5 py-4 self-end mr-5 rounded-sm shadow-sm bg-white">
                    <h3 className="text-2xl font-light py-3 "> Classes In University </h3>
                    <div className="flex flex-wrap">
                        {
                            allClubs?.map((item, key) => {
                                return (
                                    <ClubCard key={key} cls={item} isClass={true}/>
                                )
                            })
                        }

                    </div>
                    </div>
                }
                

                
            </div>
        </>
    );
}
