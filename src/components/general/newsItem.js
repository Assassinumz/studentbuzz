import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { Link } from 'react-router-dom';

const NewsItem = () => {
    return (  
        <>  
            <div className="flex justify-center my-3 items-start">
                <div className="flex p-3 w-64 bg-white rounded-lg shadow-xl h-60 max-w-sm relative my-2 mx-3" style={{"boxShadow": "0 0 10px 1px rgba(130, 130, 130, 0.2)"}}>
                    <span className="text-xs font-semibold uppercase px-2 mt-2 mr-2 text-gray-400  rounded-full absolute top-0 right-0">20th December, 2020</span>
                    
                    <div className="mt-3">
                        <h4 className="text-base font-semibold leading-tight text-gray-900">Reva Hack Runner up</h4>
                        <p className="text-sm mt-2 text-gray-600">Built a file converter</p>
                    </div>
                </div>
                <div>
                    <Link>
                        <DeleteSharpIcon style={{"color":"#F56565","marginTop":"1.5em"}}/>
                    </Link>
                </div>
            </div>
            
        </>
    );
}
 
export default NewsItem;