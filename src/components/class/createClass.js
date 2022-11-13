import { useState } from "react";
import { Navigate } from "react-router-dom";

const CreateClass = () => {
    const [className, setClassName] = useState()
    const [user, setUser] = useState(localStorage.getItem('user'))


    const handleSubmit = async (e) => {
        e.preventDefault()

            var myObj = {
                name:className,
                faculty: user 
            }
            

            var req = await fetch('https://studentbuzz.assassinumz.repl.co/api/faculty/createClass',{
                method: 'POST',
                headers: {'Authorization': user,
                'Content-Type': 'application/json'},
                
                body: JSON.stringify(myObj)
            }
            )

            var jsonObj = await req.json()
            console.log(jsonObj)

            if(req.ok) {
                window.location.reload()
            }
        
        
        
    }

    return (  
        
        <>

            <button type="button" style={{border: "solid 2px #6366f1"}} className=" self-center flex items-center w-96 justify-center hover:text-blue-400 hover:bg-blue-400 h-10 mt-20 p-2 rounded-md bg-white shadow-md " data-bs-toggle="modal" data-bs-target="#createClassModal" data-bs-whatever="@getbootstrap">Create Class</button>

            <div className="modal fade" id="createClassModal" tabIndex="-1" aria-labelledby="createClassModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 font-semibold" id="createClassModalLabel">Create Class</h1>
                        </div>
                        <div className="modal-body">
                            <form>
                            <div className="mb-3">
                                <label htmlFor="class-name" className="col-form-label">Name</label>
                                <input onChange={(e) => {setClassName(e.target.value)}} type="text" className="form-control" id="class-name"/>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="p-2 rounded-md bg-red-600 text-gray-100" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleSubmit} type="button" className="p-2 rounded-md bg-indigo-600 text-gray-100">Create</button>
                        </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default CreateClass;