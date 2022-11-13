import * as React from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import University from '../general/Member.component';

export default function UniversityList({unis}) {
    const allUnis = unis;
   
    
    return (
        <>
        <div className="max-w-screen-xl mt-5 mx-auto px-6 fixed top-2 right-0">
            <div className="flex justify-center p-4 px-3 py-10">
                <div className="w-full max-w-md">
                    <div className="bg-white shadow-md rounded-sm px-3 py-2 mb-4">
                        <div className="block text-gray-700 text-lg font-semibold py-2 px-2">
                            Other Universities
                        </div>
                        
                        <div className="py-1 text-sm overflow-y-auto" style={{maxHeight: "80vh"}}>
                            {
                                allUnis?.map((item, key) => {
                                    return (
                                        <University key={key} name={item.name} studentCount = {item.students.length} />
                                    )
                                })
                            }
                            {/* <University />
                            <University />
                            <University />
                            <University />
                            <University /> */}
                            
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <Outlet />
        </>     
    );
}