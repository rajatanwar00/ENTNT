import React from 'react'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout() {
  return (
    <div className='flex flex-col w-screen h-screen'>
        <Header/>
        <div className='flex flex-1'>
            <Sidebar/>

            <div className='flex-1'>
                <Outlet/>
            </div>            
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default Layout