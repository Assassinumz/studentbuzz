import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

const EventCard = () => {
    return (  
        <>
            <div className="bg-white w-3/12 shadow-md rounded m-3">
                    <div className=" w-full">
                        <img className="w-full h-56 object-cover rounded-t" src="https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="piña"/>
                    </div>
                    <div className="w-full p-3">
                        <a href="#" className=" hover:text-indigo-500 text-gray-700">
                        <span className="text-sm font-semibold uppercase tracking-wide ">Centuriton</span>
                        </a>
                        <p className="text-gray-600 text-xs leading-5 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <DeleteSharpIcon fontSize='' className="text-black mr-0 hover:text-red-600 cursor-pointer"/>
                    </div>
                </div>
           
        </>
    );
}
 
export default EventCard;