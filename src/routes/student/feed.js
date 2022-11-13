import * as React from 'react';
import { Outlet } from "react-router-dom";
import StudentList from '../../components/student/connectStudent';
import StudentShowcase from '../../components/general/showcase.component';
import { Navigate } from "react-router-dom";
import {useEffect, useState} from 'react';
// import FacultyShowcase from '../../components/general/showcase.component';
import UniversityList from '../../components/uni/connectUni';



export default function Feed() {
  const [user, setUser ] = useState(localStorage.getItem('user'))
  const [postsFac, setPostsFac] = useState()
  const [unis, setUnis] = useState([]);

  const fetchPosts = async () => {
    
    const response = await fetch('https://studentbuzz.assassinumz.repl.co/api/student/posts', {
      headers: {'Authorization': user},
    })
    const json = await response.json()
    
    if (response.ok) {
      setPostsFac(json.posts)
  }
}

const fetchUnis = async () => {
  const response = await fetch('https://studentbuzz.assassinumz.repl.co/api/uni/get-all-unis', {
    headers: {'Authorization': user},
  })
  const json = await response.json()

  if (response.ok) {
    setUnis(json.uni)
  }
}

useEffect(() => {
  if(user) {
    fetchUnis()
    fetchPosts()
  }
  
}, [user])


  return (
    <>
    {!user && <Navigate to="/login-faculty" /> }
    <div className='student_home bg-gray-100 min-h-screen'>
    {postsFac && <StudentShowcase postsFac = {postsFac} />} 
    {unis && <UniversityList unis = {unis}/>}
    </div>
    <Outlet />
    </>
  );
}
