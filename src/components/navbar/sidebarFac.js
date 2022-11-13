import { Outlet } from "react-router-dom"
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';


const SidebarFac = () => {
    var nav = {
        clubs: false,
        feed: true,
        notif: false,
        search: false,
    } 
    
    const [active, setActive] = useState(nav);

    function changeActive() {
        const url = window.location.href;
        if(url.includes('notif')) {
            nav = {feed: false, class: false, notif: true, search: false}
        }
        if(url.includes('search')) {    
            nav = {feed: false, class: false, notif: false, search: true}
        }
        if(url.includes('clubs')) {
            nav = {feed: false, class: true, notif: false, search: false}
        }
        if(url.includes('feed')) {
            nav = {feed: true, class: false, notif: false, search: false}
        }
        var current
        Object.keys(nav).forEach(key => {
            if(nav[key] === true) {
                current = key;
            }
        })
        setActive(nav)
        var activeElement = document.getElementById(current);
        var grandparent = activeElement.parentElement.parentElement;
        document.querySelectorAll('.sidebar-cat').forEach((el) => {
            el.classList.remove('bg-white');
            el.classList.add('hover:translate-x-2')
        })
        grandparent.classList.add(['bg-white']);
        grandparent.classList.remove(['hover:translate-x-2']);
    }

    useEffect(() => {
        changeActive();
    }, [])


    function handleActive (event) {
        const current = event.target.id;
        Object.keys(nav).forEach(key => {
            nav[key] = false;
        })
        nav[current] = true;
        setActive(nav);
        var activeElement = document.getElementById(current);
        var grandparent = activeElement.parentElement.parentElement;
        document.querySelectorAll('.sidebar-cat').forEach((el) => {
            el.classList.remove('bg-white');
            el.classList.add('hover:translate-x-2')
        })
        grandparent.classList.add(['bg-white']);
        grandparent.classList.remove(['hover:translate-x-2']);
    }


    return ( 
        <>
            <div className="min-h-screen w-52 z-10 flex flex-row bg-gray-100 fixed left-0 shadow-2xl" id="nav_container">
                <div className="flex flex-col mt-5 w-full">
                    <ul className="flex flex-col py-4" id="nav_list">
                    <li >
                        <a href="#" className="sidebar-cat flex flex-row items-center h-12 transition-transform ease-in duration-200 bg-white transform text-gray-500 hover:text-gray-800 " >
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                        <span className="text-sm font-medium hover:#6366f1 flex items-center justify-start"> <FeedOutlinedIcon fontSize="small" className="text-indigo-500 mr-3"/> <Link to="/faculty/feed" onClick={handleActive} id="feed" >Feed</Link>
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="sidebar-cat flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                        <span className="text-sm font-medium hover:#6366f1 flex items-center justify-start"> <EmailOutlinedIcon fontSize="small" className="text-indigo-500 mr-3"/> <Link to="/faculty/notif" onClick={handleActive} id="notif">Notifications</Link> </span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="sidebar-cat flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                        <span className="text-sm font-medium hover:#6366f1 flex items-center justify-start"> <PersonSearchOutlinedIcon fontSize="small" className="text-indigo-500 mr-3"/> <Link to="/faculty/search" onClick={handleActive} id="search">Search</Link> </span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="sidebar-cat flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>
                        <span className="text-sm font-medium hover:#6366f1 flex items-center justify-start"> <Diversity1OutlinedIcon fontSize="small" className="text-indigo-500 mr-3"/> <Link to="/faculty/class" onClick={handleActive} id="clubs"> Class </Link> </span>
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    );
}
 
export default SidebarFac;