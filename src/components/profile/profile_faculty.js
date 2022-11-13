import "./profile.css"
import ProjectDetails from "./project_details.component"
import AchievementDetails from "./achievements_details.component";
import StudentDetail from "./profile.component";

import { useState, useEffect } from "react";

const ProfileFaculty = () => {
    const [user, setUser] = useState(localStorage.getItem('user'))
    const [faculty, setFaculty] = useState()

    const getFaculty = async () => {
        var req = await fetch('https://studentbuzz.assassinumz.repl.co/api/faculty/get-faculty', {
            headers: {'Authorization': user},
        })

        var json = await req.json()
        console.log(json)
        setFaculty(json)


    }

    useEffect(() => {
        getFaculty()
    }, [])


    return (  
        <>
            <section className="pt-16 bg-blueGray-50 ">
                <div className="w-full px-4 mx-auto flex justify-center">
                    <div className="relative flex flex-col min-w-0 break-words pb-5 bg-white w-6/12 mb-6 shadow-xl right-20 rounded-lg mt-16" style={{"position":"relative"}}>
                        <StudentDetail faculty={faculty} />
                        {/*<ProjectDetails />
                        <AchievementDetails />*/}
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default ProfileFaculty;