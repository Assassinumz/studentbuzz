import FellowImage from '../../assets/images/images_studHome/profile_image.png';

const Member = (props) => {
    return (  
        <div className="flex justify-start items-center cursor-pointer  w-80 shadow-md text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
            <img src={FellowImage} className="bg-gray-400 w-8 m-2 rounded-full"></img>
            <div>
                <div className="flex-grow font-medium px-2 w-44">{props.name}</div>
                <div className="flex-grow text-gray-500 text-xs px-2 w-44"> {props.studentCount}</div>
            </div>
            
            <div className="text-sm font-normal text-white tracking-wide"><button className='bg-indigo-500 rounded-sm px-2 p-1 hover:bg-indigo-400'> Connect </button></div>
        </div>
    );
}
 
export default Member;