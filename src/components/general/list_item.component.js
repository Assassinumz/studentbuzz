import { Link } from "react-router-dom";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import RestoreSharpIcon from '@mui/icons-material/RestoreSharp';

const ListItem = (props) => {
    return ( 
        <>
            <div className="flex justify-center items-center">
                <div className="job-box px-4 py-2 rounded-md d-md-flex align-items-center mx-3 justify-content-between w-full h-fit" style={{"marginBottom":"0.7em", "width": "25vw", "boxShadow": "0 0 10px 1px rgba(130, 130, 130, 0.2)"}}>
                    <div className="job-left my-2 w-full d-md-flex align-items-center justify-between flex-wrap">
                        <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex" style={{"position":"relative"}}>
                        <img className="h-9 w-9 rounded-full" alt="John Doe's avatar"
                            src="https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0=" />
                        </div>
                        <p className="text-center text-md-left" style={{"fontSize":"0.9em","fontWeight":"400","paddingLeft":"1em"}}>{props.name}</p>
                        <div className="job-content" style={{"display":"flex"}}>  
                            <p style={{"fontWeight":"400","fontSize":"0.9em"}}>{props.secondary}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Link>
                        {/* <RestoreSharpIcon className="text-indigo-500" /> */}
                    </Link>
                    <Link>
                        {/* <DeleteSharpIcon style={{"color":"#F56565", "marginLeft":"1em", "fontSize": "1.2em"}}/> */}
                    </Link>
                </div>
                
            </div>
        
        </>
     );
}
 
export default ListItem;

