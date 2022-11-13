import * as React from 'react';
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import NotificationList from '../../components/notification/notificationList';
import NotificationDetail from '../../components/notification/notificationDetail';

const Notification = () => {
    return (  
        <>
            <div className='student_home bg-gray-100 min-h-screen '> 
                <NotificationList/>
                <div className='flex flex-col items-center mr-44 mt-20'>
                    <section className=" w-8/12 h-fit border rounded-xl flex flex-col bg-gray-50 mb-3">
                        <textarea className="w-11/12 m-3 focus:outline-none bg-gray-50 p-2 self-center" style={{border: "none", borderBottom: "1px solid rgba(0,0,0,0.2)"}} placeholder="Type your reply here..." rows="3"></textarea>
                        <div className="flex items-center justify-between px-4  pb-3">
                            <Link rel="noopener noreferrer" className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover mx-2 w-10 h-10 rounded-full bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">Adnan Yousuff</span>
                            </Link>
                            <button className="bg-indigo-500 text-white px-6 py-2 rounded-xl">Reply</button>
                        </div>
                    </section>
                    <NotificationDetail/>
                    <NotificationDetail/>
                    <NotificationDetail/>
                    <NotificationDetail/>
                </div>
                
            </div>
            <Outlet />
        </>
    );
}
 
export default Notification;