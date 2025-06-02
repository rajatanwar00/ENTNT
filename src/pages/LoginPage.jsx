import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate();

    useEffect(()=>{
        const users=[
            { id: "1", role: "Admin", email: "admin@entnt.in", password: "admin123" },
            { id: "2", role: "Inspector", email: "inspector@entnt.in", password: "inspect123" },
            { id: "3", role: "Engineer", email: "engineer@entnt.in", password: "engine123" }
        ]

        if(!localStorage.getItem('users')){
            localStorage.setItem('users',JSON.stringify(users));
        }

        const ships=[
                        { id: "s1", name: "Ever Given", imo: "9811000", flag: "Panama", status: "Active" },
                        { id: "s2", name: "Maersk Alabama", imo: "9164263", flag: "USA", status: "Under Maintenance" },
                        { id: "s3", name: "Queen Mary 2", imo: "9241061", flag: "UK", status: "Active" },
                        { id: "s4", name: "Hanjin Seattle", imo: "9335783", flag: "South Korea", status: "Docked" },
                        { id: "s5", name: "Titanic II", imo: "9876543", flag: "Bahamas", status: "Planned" },
                        { id: "s6", name: "Oceanic Vega", imo: "9443774", flag: "Norway", status: "Active" },
                        { id: "s7", name: "USS Enterprise", imo: "CVN-65", flag: "USA", status: "Retired" },
                        { id: "s8", name: "MSC Zoe", imo: "9703318", flag: "Switzerland", status: "Active" },
                        { id: "s9", name: "COSCO Shipping Universe", imo: "9795607", flag: "China", status: "At Sea" },
                        { id: "s10", name: "Yamato", imo: "1234567", flag: "Japan", status: "Sunk" }
                    ]
        
        if(!localStorage.getItem('ships')){
            localStorage.setItem('ships',JSON.stringify(ships));
        }

        const components=[
            
                        { id: "c1", shipId: "s1", name: "Main Engine", serialNumber: "ME-1234", installDate: "2020-01-10", lastMaintenanceDate: "2024-03-12" },
                        { id: "c2", shipId: "s2", name: "Radar", serialNumber: "RAD-5678", installDate: "2021-07-18", lastMaintenanceDate: "2023-12-01" },
                        { id: "c3", shipId: "s1", name: "Propeller", serialNumber: "PR-8890", installDate: "2019-05-20", lastMaintenanceDate: "2023-10-15" },
                        { id: "c4", shipId: "s3", name: "Navigation System", serialNumber: "NAV-3344", installDate: "2022-03-11", lastMaintenanceDate: "2024-02-28" },
                        { id: "c5", shipId: "s4", name: "Fuel Pump", serialNumber: "FP-7788", installDate: "2020-11-05", lastMaintenanceDate: "2023-08-19" },
                        { id: "c6", shipId: "s2", name: "Anchor Winch", serialNumber: "AW-2255", installDate: "2021-09-14", lastMaintenanceDate: "2024-04-01" },
                        { id: "c7", shipId: "s5", name: "Cooling System", serialNumber: "CS-1122", installDate: "2018-12-29", lastMaintenanceDate: "2022-11-10" },
                        { id: "c8", shipId: "s1", name: "Generator", serialNumber: "GEN-6655", installDate: "2020-06-18", lastMaintenanceDate: "2024-01-22" },
                        { id: "c9", shipId: "s4", name: "Communication Antenna", serialNumber: "COM-9090", installDate: "2021-04-22", lastMaintenanceDate: "2023-09-30" },
                        { id: "c10", shipId: "s3", name: "Fire Suppression System", serialNumber: "FSS-5566", installDate: "2022-07-08", lastMaintenanceDate: "2024-05-01" }
                    ]
        
        if(!localStorage.getItem('components')){
            localStorage.setItem('components',JSON.stringify(components));
        }

        const jobs=[
                        { id: "j1", componentId: "c1", shipId: "s1", type: "Inspection", priority: "High", status: "Open", assignedEngineerId: "3", scheduledDate: "2025-05-05" },
                        { id: "j2", componentId: "c3", shipId: "s1", type: "Maintenance", priority: "Medium", status: "Scheduled", assignedEngineerId: "5", scheduledDate: "2025-06-01" },
                        { id: "j3", componentId: "c2", shipId: "s2", type: "Repair", priority: "High", status: "In Progress", assignedEngineerId: "2", scheduledDate: "2025-05-20" },
                        { id: "j4", componentId: "c5", shipId: "s4", type: "Inspection", priority: "Low", status: "Completed", assignedEngineerId: "1", scheduledDate: "2025-04-10" },
                        { id: "j5", componentId: "c4", shipId: "s3", type: "Upgrade", priority: "Medium", status: "Open", assignedEngineerId: "4", scheduledDate: "2025-06-15" },
                        { id: "j6", componentId: "c6", shipId: "s2", type: "Maintenance", priority: "High", status: "Open", assignedEngineerId: "6", scheduledDate: "2025-05-28" },
                        { id: "j7", componentId: "c7", shipId: "s5", type: "Repair", priority: "Low", status: "Scheduled", assignedEngineerId: "3", scheduledDate: "2025-06-10" },
                        { id: "j8", componentId: "c8", shipId: "s1", type: "Inspection", priority: "Medium", status: "Open", assignedEngineerId: "2", scheduledDate: "2025-05-30" },
                        { id: "j9", componentId: "c9", shipId: "s4", type: "Calibration", priority: "Medium", status: "In Progress", assignedEngineerId: "7", scheduledDate: "2025-05-25" },
                        { id: "j10", componentId: "c10", shipId: "s3", type: "Repair", priority: "High", status: "Scheduled", assignedEngineerId: "1", scheduledDate: "2025-06-05" }
        ]

        if(!localStorage.getItem('jobs')){
            localStorage.setItem('jobs',JSON.stringify(jobs));
        }
    },[])

    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem('loggedInUser'));
        if(user){
            navigate('/dashboard')
        }
    })
    
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