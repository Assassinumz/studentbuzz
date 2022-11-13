import "./profile.css"
import ProjectDetails from "./project_details.component"
import AchievementDetails from "./achievements_details.component";
import ClubsDetails from "./clubs_details.component";
import StudentDetail from "./profile.component";
import SkillsDetails from "./skills_details.component";
import { useState,  useEffect } from "react";

const ProfileStudent = () => {

    const [user, setUser] = useState(localStorage.getItem('user'))
    const [student, setStudent] = useState()

    const getStudent = async () => {
        var req = await fetch('https://studentbuzz.assassinumz.repl.co/api/student/getStudentObj', {
            headers: {'Authorization': user},
        })

        var json = await req.json()
        console.log(json)
        setStudent(json)


    }

    useEffect(() => {
        getStudent()
    }, [])


    return ( 
        <>  
            <section className="pt-16 bg-blueGray-50 ">
                <div className="w-full px-4 mx-auto flex justify-end">
                    <div className="relative flex flex-col min-w-0 break-words pb-5 bg-white w-9/12 mb-6 shadow-xl right-20 rounded-lg mt-16" style={{"position":"relative"}}>
                        <StudentDetail student={student}/>
                        <ProjectDetails />
                        <SkillsDetails />
                        <AchievementDetails />
                        <ClubsDetails />
                    </div>
                </div>
            </section>
            
        </>
    );
}
 
export default ProfileStudent;