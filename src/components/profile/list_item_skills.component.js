import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { Link } from 'react-router-dom';

const ListItemSkills = () => {
    return ( 
        <>
        <div className='flex justify-center'>
        <div className="flex justify-start items-center cursor-pointer w-[27em] shadow-md text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2" style={{"boxShadow": "0 0 10px 1px rgba(130, 130, 130, 0.2)"}}>
            <div>
                <div className="flex-grow px-2"><p style={{"fontSize":"1.2em"}}>NodeJS</p></div>
            </div>
        </div>
        <div className='mb-3 ml-3'>
            <Link>
                <DeleteSharpIcon style={{"color":"#F56565","marginTop":"1.5em"}}/>
            </Link>
        </div>
        </div>
         
        </>
    );
}
 
export default ListItemSkills;