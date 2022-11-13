import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';

const BoardMember = () => {
    return (  
        <>
            <div className="flex justify-center items-center">
                <div className="job-box px-4 py-2 rounded-md d-md-flex align-items-center mx-3 justify-content-between w-fit h-fit" style={{"marginBottom":"0.7em", "width":"18vw", "boxShadow": "0 0 10px 1px rgba(130, 130, 130, 0.2)"}}>
                    <div className="job-left my-2  w-full d-md-flex align-items-center justify-between flex-wrap">
                        <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex" style={{"position":"relative"}}>
                        <img className="h-9 w-9 rounded-full" alt="John Doe's avatar"
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                        </div>
                        <p className="text-center text-md-left" style={{"fontSize":"1em","fontWeight":"400","paddingLeft":"1em"}}>Mr. Bleh John</p>
                        <div className="job-content flex justify-around">
                            
                            {/* <p style={{"fontWeight":"400","paddingLeft":"1em","fontSize":"0.9em"}}>1MS20IS081</p> */}
                            <p className='ml-1' style={{"fontWeight":"400","fontSize":"1.2em", "display": "flex", "alignItems": "center"}}>1 <StarPurple500SharpIcon fontSize='small'/> </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}
 
export default BoardMember;