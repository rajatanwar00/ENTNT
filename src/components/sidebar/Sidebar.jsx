import React from 'react'
import Label from './Label'
import { useLocation, useNavigate } from 'react-router-dom'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function Sidebar() {
    const navigate=useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    

  return (
    <div className='w-0 sm:w-1/7 bg-cyan-800  text-white'>
        <div className='flex flex-col '>
            <Label name={"Dashboard"} onClick={()=>navigate('/dashboard')} className={currentPath === '/dashboard' ? 'bg-cyan-500' : ''} />
            <Label name={"Ships"} onClick={()=>navigate('/ships')} className={currentPath === '/ships' ? 'bg-cyan-500' : ''} />
            <Label name={"Components"} onClick={()=>navigate('/components')} className={currentPath === '/components' ? 'bg-cyan-500' : ''} />
            <Label name={"Jobs"} onClick={()=>navigate('/jobs')} className={currentPath === '/jobs' ? 'bg-cyan-500' : ''} />
            <div className=' text-2xl font-light'>
                <p className='p-4'>Calendar</p>
                {/* <div className='mt-0 scale-100 bg-white rounded-md text-black'> 
                  <Calendar />
                </div>                 */}
            </div>
        </div>
    </div>
  )
}

export default Sidebar