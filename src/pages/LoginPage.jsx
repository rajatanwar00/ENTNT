import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setUserList } from '../components/redux/usersListSlice';
import { setShipList } from '../components/redux/shipListSlice';
import { setComponentList } from '../components/redux/componentListSlice';
import { setJobList } from '../components/redux/jobsListSlice';

function LoginPage() {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const userList=useSelector(state=>state.user.userList)
    const shipList=useSelector(state=>state.ship.shipList)
    const componentList=useSelector(state=>state.component.componentList)
    const jobList=useSelector(state=>state.jobs.jobList)

    
    useEffect(()=>{
    
        dispatch(setUserList(userList));
        dispatch(setShipList(shipList));
        dispatch(setComponentList(componentList));
        dispatch(setJobList(jobList));
    },[dispatch])
    

    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem('loggedInUser'));
        if(user){
            navigate('/dashboard')
        }
    },[navigate])
    
    function login(e){
        e.preventDefault();
        const users=JSON.parse(localStorage.getItem('users'));
        const matchedUser=users.find(
            (user)=>user.email===email &&user.password===password
        );

        if(matchedUser){
            localStorage.setItem('loggedInUser',JSON.stringify(matchedUser));
            navigate('/dashboard');
        }
        else{
            alert("Invalid Credentials");
        }
    }
      
    return (
    <div className='relative h-screen w-screen overflow-hidden'>
       
            {/* <video autoPlay loop muted className="absolute">
                <source src="ShipSailing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}

            <img src='Ship.jpg' alt="Background" className="absolute w-full h-full object-cover"/>
            
            
            
            <div className='absolute z-10 flex justify-center items-center h-screen w-screen '>
                <div className='p-12 bg-white/30 text-amber-400 font-bold rounded shadow-lg'>
                    <p className='text-center text-3xl'>Login</p>
                    <div className='p-6'>
                        <div className='p-4'>
                            <label>Email</label>
                            <input type='text' className='p-1 m-2 border border-black' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className='p-4'>
                            <label>Password</label>
                            <input type='password' className='p-1 m-2 border border-black' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div className='flex justify-center p-4'>
                            <button type='submit' className='border-1 p-2 pl-3 pr-3 rounded bg-green-400 hover:bg-green-600 text-white' onClick={login}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
                
            
        
    </div>
  )
}

export default LoginPage