import UploadButton from "../upload/uploadButton";
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { useState } from "react";

const Signup = (props) => {
    const setUniAdd = props.setUniAdd;

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [street, setStreet] = useState('');
    const [zip, setZip] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] =  useState('');
    const [state, setState] = useState(''); 
    const [selectedFile, setSelectedFile] = useState(null);
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState(null);


    const handleSubmit = async (e) => {
        
        e.preventDefault()
       
        const address = [street, city, country, state , zip].join(' ');
        const formData = new FormData();
        formData.append('transcript', selectedFile);
        formData.append('email', email);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('address', address);
        formData.append('confirm', confirm);

        const response = await fetch('https://studentbuzz.assassinumz.repl.co/api/create-uni', {
                method: 'POST',
                headers: {},
                body: formData
            })
        
            const json = await response.json()

            if (!response.ok) {
                if(json.error.includes('auth/email-already-in-use'))
                    setError("User with this email already exists");
                else
                    setError(json.error);
            }
            if (response.ok) {
                setUniAdd(true)
            }

    }

    return (  
        
        <>
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className=" mt-12 max-w-screen-lg mx-auto">
                    <div>
                        <h2 className="font-semibold text-xl text-gray-600">Create a University Space</h2>
                        <p className="text-gray-500 mb-6">Connecting for You</p>

                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">University Details</p>
                                    <p>Please fill out all the fields.</p>
                                </div>

                                <div className="lg:col-span-2">
                                    <form onSubmit={handleSubmit}>
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-5">
                                                <label htmlFor="name">University Name</label>
                                                <input type="text" required name="name" id="name" onChange={(e) => setName(e.target.value)} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue="" />
                                            </div>

                                            <div className="md:col-span-5">
                                                <label htmlFor="email">Email Address</label>
                                                <input type="email" required name="email" id="email" onChange={(e) => setEmail(e.target.value)} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue="" placeholder="email@domain.com" />
                                            </div>

                                            <div className="md:col-span-5">
                                                <label htmlFor="description">Description</label>
                                                <textarea type="text" required name="description" id="description" onChange={(e) => setDescription(e.target.value)} className="h-24 border mt-1 rounded py-2 px-4 w-full bg-gray-50" defaultValue="" />
                                            </div>

                                            <div className="md:col-span-3">
                                                <label htmlFor="address">Address / Street</label>
                                                <input type="text" required name="address" id="address" onChange={(e) => setStreet(e.target.value)} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue="" placeholder="" />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="city">City</label>
                                                <input type="text" required name="city" id="city" onChange={(e) => setCity(e.target.value)} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" defaultValue="" placeholder="" />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="country">Country / region</label>
                                                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                <input name="country" required id="country" onChange={(e) => setCountry(e.target.value)} placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" defaultValue="" />
                                                
                                                </div>
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="state">State / province</label>
                                                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                <input name="state" required id="state" placeholder="State" onChange={(e) => setState(e.target.value)} className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" defaultValue="" />
                                                
                                                </div>
                                            </div>

                                            <div className="md:col-span-1">
                                                <label htmlFor="zipcode">Zipcode</label>
                                                <input type="text" required name="zipcode" id="zipcode" onChange={(e) => setZip(e.target.value)} className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" defaultValue="" />
                                            </div>

                                            <UploadButton context = {{"label": "Upload Transcript", selectedFile, setSelectedFile}}/>
                                            

                                            <div className="md:col-span-5">
                                                <div className="inline-flex items-center">
                                                <input type="checkbox" name="billing_same" required id="billing_same" className="form-checkbox" />
                                                <label htmlFor="billing_same" className="ml-2">I confirm that the above details are true to the best of my knowlegde.</label>
                                                </div>
                                            </div>

                                            {/* error */}
                                            {error && <div className="relative md:col-span-5">
                                                <span className="text-red-500 flex items-center absolute"><ErrorOutlineRoundedIcon style={{'color':'red', 'marginRight': '0.5em'}} fontSize='5em'/> {error} </span>
                                            </div>}
                                            
                                    
                                            <div className="md:col-span-5 text-center">
                                                <div className="inline-flex items-end">
                                                    <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                                                </div>
                                            </div>

                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Signup;