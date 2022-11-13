import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Student from '../general/Member.component';

export default function StudentList() {
    return (
        <>
        <div className="max-w-screen-xl mt-5 mx-auto px-6 fixed top-2 right-0">
            <div className="flex justify-center p-4 px-3 py-10">
                <div className="w-full max-w-md">
                    <div className="bg-white shadow-md rounded-sm px-3 py-2 mb-4">
                        <div className="block text-gray-700 text-lg font-semibold py-2 px-2">
                            Students From Your University
                        </div>
                        
                        <div className="py-1 text-sm overflow-y-auto" style={{maxHeight: "80vh"}}>
                            <Student />
                            <Student />
                            <Student />
                            <Student />
                            <Student />
                            
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <Outlet />
        </>     
    );
}