import { Link } from "react-router-dom";

const NotificationDetail = () => {
    return (  
        <>
            <div className="bg-white my-2" style={{width: "70%"}}>
                <div className="container mt-0 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-md bg-white">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                        <span rel="noopener noreferrer" className="px-2 py-1 rounded bg-violet-300 ">Sent</span>
                    </div>
                    <div className="mt-3">
                        <span rel="noopener noreferrer" className="text-xl font-bold">Lorem Stuff</span>
                        <p className="mt-2">Lorem Lorem Lorem</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <span rel="noopener noreferrer" className="text-sm font-light">4:36 pm</span>
                        <div>
                            <Link rel="noopener noreferrer" className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover mx-2 w-10 h-10 rounded-full bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">Lorem</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default NotificationDetail;