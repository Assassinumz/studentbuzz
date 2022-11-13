const Notification = () => {
    return (  
        <div className="flex items-center p-3 w-auto bg-slate-100 rounded-lg shadow-xl mx-auto max-w-sm relative m-3" >
            <span className="text-xs font-semibold uppercase px-2 mt-2 mr-2 text-green-900  rounded-full absolute top-0 right-0">4:36 PM</span>
            {/* <span className="text-xs font-semibold uppercase m-1 py-1 mr-3 text-gray-500 absolute bottom-0 right-0">4:36 PM</span> */}

            <img className="h-9 w-9 rounded-full" alt="John Doe's avatar"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />

            <div className="ml-5">
                <h4 className="text-sm font-semibold leading-tight text-gray-900">John Doe</h4>
                <p className="text-sm text-gray-600">You have a new message!You have a new message!You have a new message!You have a new message!</p>
            </div>
        </div>
    );
}
 
export default Notification;