import react from 'react';
import {useEffect, useState} from 'react';
import { Outlet } from "react-router-dom";
// import FacultyList from '../../components/faculty/connectFac';
import FacultyShowcase from '../../components/general/showcase.component';
import UniversityList from '../../components/uni/connectUni';
import CreatePost from '../../components/posts/createPost';
import { Navigate } from "react-router-dom";

export default function Feed() {

  const [user, setUser ] = useState(localStorage.getItem('user'))
  const [postsFac, setPostsFac] = useState()
  const [unis, setUnis] = useState([]);

  const fetchPosts = async () => {
    
      const response = await fetch('https://studentbuzz.assassinumz.repl.co/api/faculty/posts', {
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
    <CreatePost />
    <div className='student_home bg-gray-100 min-h-screen'>
    {postsFac && <FacultyShowcase postsFac = {postsFac} />} 
    {unis && <UniversityList unis = {unis}/>}
      
    </div>
    <Outlet />
    </>
  );
}

  {/*  
         */}
