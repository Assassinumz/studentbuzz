import ListItem from "../general/list_item.component";
import {useState, useEffect} from 'react';
import { useAuthContext } from "../../hooks/useAuthContext";

const Faculties = () => {
    const [email, setEmail] = useState('');
    const [type, setType] = useState('faculty');
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('ISE');
    const [user, setUser] = useState(localStorage.getItem('user'))

    const [faculties, setFaculties] = useState();

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('https://studentbuzz.assassinumz.repl.co/api/uni/get-all-fac', {
                headers: {'Authorization': user},
            })
            const json = await response.json()

            if (response.ok) {
                setFaculties(json.faculties)
            }
        }
        if (user) {
            fetchUser()
        }
    },[])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const faculty = {email, type, name, department, university:user};
        
        const response = await fetch('https://studentbuzz.assassinumz.repl.co/api/uni/create-faculty', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Authorization': user},
            body: JSON.stringify(faculty)

        });
        const json = response.json();

        if (response.ok) {
            setName('')
            setEmail('')
            
        }
        else {
            console.log(json.error);
        }
    }

    return (  
        <>
            <div className="flex flex-col">
                <button type="button" style={{border: "solid 2px #6366f1"}} className=" mt-5 self-center flex items-center w-40 justify-center hover:text-blue-400 hover:bg-blue-400 h-10 p-2 rounded-md bg-white shadow-md " data-bs-toggle="modal" data-bs-target="#addFacultyModal" data-bs-whatever="@getbootstrap">Add Faculty</button>
                <div className="modal fade" id="addFacultyModal" tabIndex="-1" aria-labelledby="addFacultyModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 font-semibold" id="addAchieFacultyLabel">Add Faculty</h1>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="faculty-name" className="col-form-label">Name</label>
                                        <input value={name} type="text" className="form-control" id="faculty-name" onChange = {(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="faculty-email" className="col-form-label">Email</label>
                                        <input value={email} type="email" className="form-control" id="faculty-email" onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="faculty-type" className="col-form-label">Type</label>
                                        <select className="form-select" aria-label="Default select example" id="faculty-type" onChange={(e) => setType(e.target.value)}>
                                            <option selected value={"faculty"}>Faculty</option>
                                            <option value={"hod"}>HOD</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="department" className="col-form-label">Department</label>
                                        <select className="ml-2 w-56 p-1" name="department" id="department" onChange={(e) => setDepartment(e.target.value)}>
                                            <option value="ISE">ISE</option>
                                            <option value="CSE">CSE</option>
                                            <option value="MEC">MEC</option>
                                            <option value="ECE">ECE</option>
                                            <option value="EEE">EEE</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="p-2 rounded-md bg-red-600 text-gray-100" data-bs-dismiss="modal">Close</button>
                                <input onClick={handleSubmit} type="submit" className="p-2 rounded-md bg-indigo-600 text-gray-100" value="Add"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center my-5">
                    <div>
                        
                        {/* <h4 className="text-2xl uppercase text-center font-semibold my-5"> Information Science </h4>
                        <ListItem/>
                        <br/> */}
                        {faculties?.map((faculty, key) => {
                            return (
                                <ListItem key={key} name={faculty.name} secondary={faculty.department} third={faculty.type} />
                            )
                        })}
                       
                    </div>
                    {/* <div>
                        <h4 className="text-2xl uppercase text-center font-semibold my-5"> Computer Science </h4>
                        <ListItem/>
                        <br/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                    </div>
                    <div>
                        <h4 className="text-2xl uppercase text-center font-semibold my-5"> Mechanical </h4>
                        <ListItem/>
                        <br/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                    </div> */}
                </div>
            </div>
        </>
    );
}
 
export default Faculties;
