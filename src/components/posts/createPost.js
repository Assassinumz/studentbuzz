import {useState, useEffect,    } from 'react'
import UploadButton from '../upload/uploadButton'

const CreatePost = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [files, setFiles] = useState()
    const [user, setUser] = useState(localStorage.getItem('user'))

    const [selectedFile, setSelectedFile] = useState()


    const createPost = async () => {
        let formdata = new FormData()

        formdata.append('title', title)
        formdata.append('description', description)
        formdata.append('banner', selectedFile)


        let res = await fetch('https://studentbuzz.assassinumz.repl.co/api/faculty/create-post-faculty', {
            method:'POST',
            headers: {'Authorization': user},
            body: formdata,
        })

        let json = await res.json()
        console.log(json)
        window.location.reload()
    }

    return (  
        <div className=" bg-gray-100  flex justify-center sm:py-12">
            <div className="relative py-3 mr-40">
                <div className="relative px-4 py-3 bg-white mx-8 md:mx-0 shadow rounded-sm sm:p-10">
                <div className="max-w-md mx-auto">
                    <div className="flex items-center space-x-5">
                    <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
                    <div className="block pl-2 font-semibold text-xl w-72 text-gray-700">
                        <h2 className="leading-relaxed">Create a Post</h2>
                        {/* <p className="text-sm text-gray-500 font-normal leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> */}
                    </div>
                    </div>
                    <div className="divide-y divide-gray-200">
                    <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div className="flex flex-col">
                        <label className="leading-loose">Post Title</label>
                        <input onChange={(e) => {setTitle(e.target.value)}} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Post title"/>
                        </div>
                        
                        <div className="flex flex-col">
                        <label className="leading-loose">Post Description</label>
                        <input onChange={(e) => {setDescription(e.target.value)}} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional"/>
                        </div>
                    </div>
                    <UploadButton context={{label:'Banner', selectedFile, setSelectedFile}} />
                    <div className="pt-4 flex items-center space-x-4">
                        <button onClick={createPost} className="bg-indigo-500 flex justify-center items-center w-full text-white px-2 py-1 rounded-md focus:outline-none">Create</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
 
export default CreatePost;