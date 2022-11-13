import * as React from 'react';
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import UniversityList from '../../components/uni/connectUni';
import UniShowcase from '../../components/general/showcase.component';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useEffect } from 'react';
import { Navigate } from "react-router-dom";

export default function Feed() {
    
    const [postsFac, setPostsFac] = useState()
    const [unis, setUnis] = useState([]);
    const [user, setUser] = useState(localStorage.getItem('user'))
   
    useEffect(() => {
      console.log(user)
      const fetchPosts = async () => {
        const response = await fetch('https://studentbuzz.assassinumz.repl.co/api/uni/posts', {
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
      if (user) {
        fetchPosts()
        fetchUnis()
      }
    }, [user])

  
    return (
      <>
        {!user && <Navigate to="/login-uni" /> }
        <div className='student_home bg-gray-100 min-h-screen'>
            { postsFac && <UniShowcase postsFac = {postsFac}/>}
            { unis && <UniversityList unis = {unis}/>}
        </div>
        <Outlet />
      </>
    );
}
