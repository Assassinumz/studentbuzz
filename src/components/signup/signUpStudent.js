import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const SignUpStudent = () => {

    const [USN, setUSN] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [uni, setUni] = useState('636f92afaf142401e6322afb')
    const [departmemt, setDepartment] = useState('CSE')
    const [password, setPassword] = useState('')
    const [allUnis, setAllUnis] = useState([])
    const[error,setError] =  useState(null)
    const [success, setSuccess] = useState(false)

    const getAllUnivs = async () => {
        const response = await fetch('https://studentbuzz.assassinumz.repl.co/api/get-all-unis',
        {
            method: 'GET',
            headers:{},

        })
        let data = await response.json()
        console.log(data)
        setAllUnis(data?.uni)
        setUni(data?.uni[0].uuid)      
    }

    useEffect(() => {
        getAllUnivs()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        var myObj = {
            'email':email,
            'password':password,
            'university': uni,
            'name':name,
            'department':departmemt
        }

        const response = await fetch('https://studentbuzz.assassinumz.repl.co/api/create-student', {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(myObj)
    })
    
    const json = await response.json()

    if(!response.ok){
        if(json.error.includes('auth/email-already-in-use'))
            setError("User with this email already exists")
        else
            setError(json.error)
    }
    else {
        setSuccess(true)
    }
}
    
    return ( 
    <>
        {success ? <Navigate to="/" /> : null}
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className=" mt-12 max-w-screen-lg mx-auto">
                    <div>
                        <h2 className="font-semibold text-xl text-gray-600">Create a Student Profile</h2>
                        <p className="text-gray-500 mb-6">Connecting for You</p>

                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">Student Details</p>
                                    <p>Please fill out all the fields.</p>
                                </div>

                            <form onSubmit={handleSubmit}>
                            <div className="lg:col-span-2">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

                                    <div className="md:col-span-5">
                                        <label htmlFor="usn">USN</label>
                                        <input type="text" name="usn" id="usn" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue="" onChange={(e) => setUSN(e.target.value)} />
                                    </div>

                                    <div className="md:col-span-5">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue="" placeholder="John" onChange={(e) => setName(e.target.value)} />
                                    </div>

                                    <div className="md:col-span-5">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue="" placeholder="email@domain.com" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="md:col-span-5">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" id="password" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue="" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    
                                    <div className="md:col-span-3">
                                        
                                        <div className="relative">
                                            <label htmlFor="department" >University</label>
                                            <select className="border mt-2 border-gray-300 rounded-2 text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none" onChange={(e) => setUni(e.target.value)}>
                                               {
                                                allUnis?.length > 0?
                                                allUnis.map((item,key) => {return (<option value={item.uuid} key={key}>{item.name}</option>)})
                                                :
                                                <option>No Unis</option>
                                            } 
                                                
                                            </select>
                                        </div>
                                    </div>

                                    <div className="md:col-span-3">
                                        <label htmlFor="department">Department</label>
                                        <select className="border mt-2 border-gray-300 rounded-2 text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none" onChange={(e) => setDepartment(e.target.value)}>
                                            
                                            <option value="CSE">CSE</option>
                                            <option value="ISE">ISE</option>
                                            <option value="MEC">MEC</option>
                                            <option value="EEE">EEE</option>
                                            <option value="ECE">ECE</option>
                                            
                                        </select>
                                    </div>
                                    {error && <div className="relative md:col-span-5">
                                    </div>}

                                    <div className="md:col-span-5 text-center">
                                        <div className="inline-flex items-end">
                                            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                                        </div>
                                    </div>

                                    </div>
                                </div>
                            </form>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </> 
    );
}
 
export default SignUpStudent;