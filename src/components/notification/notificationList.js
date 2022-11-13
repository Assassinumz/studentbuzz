import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Notification from './notification';

const NotificationList = () => {
    return (  
        <>
            <div className="max-w-screen-xl w-4/12 mt-5 mx-auto px-6 fixed right-0 ">
                <div className="flex justify-center p-4 px-3 py-10 ">
                    <div className="w-full max-w-md ">
                        <div className="bg-white shadow-md rounded-sm px-3 py-2 mb-4 ">
                            <div className="block text-gray-700 text-lg font-semibold py-2 px-2">
                                Notifications
                            </div>
                            
                            <div className="py-1 text-sm overflow-y-auto" style={{"height": "80vh"}}>
                                <Notification />
                                <Notification />
                                <Notification />
                                <Notification />
                                <Notification />
                                <Notification />
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        <Outlet />
        </>
    );
}
 
export default NotificationList;