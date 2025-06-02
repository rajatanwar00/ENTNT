import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {

    const navigate=useNavigate();
    const user=JSON.parse(localStorage.getItem('loggedInUser'));
    

    function logout(){
        localStorage.clear('loggedInUser')
        navigate('/')
    }


  return (
    <div className='flex flex-col h-28 bg-cyan-700  text-white w-screen '>
        <div className='p-1 w-full'>
            <p className='text-center p-2 text-5xl'>Ship Management</p>
        </div>

        <div className='p-1 flex justify-between w-full text-white'>
            
            <div className='p-1'>
                <p>Logged In User - {user.role}</p>
            </div>

            <div className='p-1'>
                <p className='' onClick={logout}>Logout</p>
            </div>
        </div>
        
    </div>
  )
}

export default Header