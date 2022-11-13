import * as React from 'react';
import { Outlet } from "react-router-dom";
import StudentList from '../../components/student/connectStudent';
import StudentShowcase from '../../components/general/showcase.component';

export default function Feed() {

  return (
    <>
    <div className='student_home bg-gray-100 min-h-screen'>
        <StudentShowcase/>
        <StudentList/>
    </div>
    <Outlet />
    </>
  );
}
