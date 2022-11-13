import { Outlet } from "react-router-dom"
import "./search.css"
import List from "./list_search.component";
import { useState } from "react";
import FormStudent from "./form.component";
import Cards from "./card.compoent";

const RadioGroup = () => {
    
    const[faculty_or_uni, setFacultyOrUni] = useState(false);
    const [student, setStudent] = useState(false)
    const [clubs, setClubs] = useState(false)

    return (
        <>
            <div className="radio_container">
                <div className="grid min-h-[50px] place-content-center shadow-sm scroll-mt-48 place-items-center overflow-x-scroll rounded-lg border-indigo-500 bg-[#f8fafc] p-2 lg:overflow-visible w-[35em] mx-auto">
                    <form className="radio_form">
                        <input type="radio" id="student" name="search_type" value="student" className="button-gradient radio_color" data-ripple-light="true" onClick={() => {setStudent(true);setFacultyOrUni(false);setClubs(false)}}></input>
                        <label htmlFor="student" style={{"paddingRight":"1.5em","paddingLeft":"0.5em"}}>Student</label>
                        <input type="radio" id="faculty_or_hod" name="search_type" value="faculty_or_hod" className="button-gradient radio_color" data-ripple-light="true" onClick={() => {setFacultyOrUni(true);setStudent(false);setClubs(false)}}></input>
                        <label htmlFor="faculty_or_hod" style={{"paddingRight":"1.5em","paddingLeft":"0.5em"}}>Faculty or HOD</label>
                        <input type="radio" id="clubs" name="search_type" value="clubs" className="button-gradient radio_color" data-ripple-light="true" onClick={() => {{setClubs(true);setStudent(false);setFacultyOrUni(false)}}}></input>
                        <label htmlFor="clubs" style={{"paddingRight":"1.5em","paddingLeft":"0.5em"}}>Clubs</label>
                        <input type="radio" id="university" name="search_type" value="university" className="button-gradient radio_color" data-ripple-light="true" onClick={() => {{setFacultyOrUni(true);setStudent(false);setClubs(false)}}}></input>
                        <label htmlFor="university" style={{"paddingLeft":"0.5em"}}>University</label>
                    </form>
                </div>
                
            </div>
            {faculty_or_uni? <List/>:null } 
            {student? <FormStudent/>:null}
            {clubs? <Cards/>:null}
            <Outlet />
        </>
     );
}
 
export default RadioGroup;