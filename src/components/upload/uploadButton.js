import React, {useState} from 'react';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { useEffect } from 'react';

const UploadButton = (props) => {
    const label = props.context.label;
    const selectedFile = props.context.selectedFile;
    // console.log(selectedFile);
    const setSelectedFile = props.context.setSelectedFile


	const [isSelected, setIsSelected] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(selectedFile) {
            console.log(isSelected);
            setError(null);
            console.log(selectedFile);
        }
    }, [selectedFile])

    const changeHandler = (event) => {
        if(event.target.files[0].size < 9000000){
            setSelectedFile(event.target.files[0]);
            setIsSelected(true);
            setError(null);
        }
        else{
            setError('File size is too big');
            setIsSelected(false);
            setSelectedFile(null);
        }
	};

    useEffect(() => {
        console.log(selectedFile?.name)
    }, [selectedFile])

    return (
        <>
            <div id="testtttt" className="w-full bg-white md:col-span-5 my-6">
                <div className="mx-auto h-full flex flex-col justify-center items-center">
                    <div id="images-container"></div>
                    <div className="flex w-full justify-center">
                        <div id="multi-upload-button" onClick={()=>{
                                document.getElementById('multi-upload-input').click();
                            }}
                            className="inline-flex items-center px-4 py-2 bg-indigo-500 border border-indigo-500 rounded-l font-semibold cursor-pointer text-sm text-white tracking-widest hover:bg-gray-500 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition ">
                            {label}
                        </div>
                        <div className="w-4/12 lg:w-3/12 border border-gray-300 rounded-r-md flex items-center justify-between">
                            <span id="multi-upload-text" className="p-2"> {selectedFile?.name} </span>
                            <button id="multi-upload-delete" className="hidden" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-red-700 w-3 h-3"
                                    viewBox="0 0 320 512">
                                    <path
                                        d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <input type="file" id="multi-upload-input" className="hidden" required onChange={changeHandler}/>
                    
                    {error && <div className="text-red-500 text-xs text-left self-baseline font-semibold mt-5"><ErrorOutlineRoundedIcon style={{'color':'red'}} fontSize='5em'/> {error}</div>}
                </div>
            </div>
        </>
    )
}

export default UploadButton;