import { faExpand, faPencil, faPlus, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addJob, removeJob } from '../components/redux/jobsListSlice'
import { toast } from 'react-toastify'

function Jobs() {

  const jobList=useSelector((state)=>state.jobs.jobList)
  const dispatch=useDispatch();
  const [componentId,setComponentId]=useState('')
  const [shipId,setShipId]=useState('')
  const [show,setShow]=useState(false)
  const [type,setType]=useState('')
  const [priority,setPriority]=useState('')
  const [status,setStatus]=useState('')
  const [assignedEngineerId,setAssignedEngineerId]=useState('')
  const [scheduledDate,setScheduledDate]=useState('')

  function generateUniqueJobId(jobList) {
        let index = 1;
        let idSet = new Set(jobList.map(job => job.id));
        
        while (idSet.has(`j${index}`)) {
            index++;
        }

        return `j${index}`;
    }

  function addJobF(){
        const job={
            componentId,shipId,type,priority,status,assignedEngineerId,scheduledDate
        }
        const id=generateUniqueJobId(jobList)
        job.id=id;
    
        dispatch(addJob(job))
        setComponentId('')
        setShipId('')
        setType('')
        setPriority('')
        setStatus('')
        setAssignedEngineerId('')
        setScheduledDate('')
        setShow(false)
        toast.success("Job created successfully!")
    }

  return (
    <div className='relative h-full w-full flex flex-col'>

            <div className='flex justify-between p-2'>

                <div className='p-1 overflow-clip'>
                    <p className='p-1'>Currently only add/delete functionality works, although it works synchronously throughout all the members, which are ships, containers and jobs.</p>
                </div>

              <div className='flex p-1 items-center border rounded-md' onClick={()=>setShow(true)}>
                <div className='p-1'>
                  <FontAwesomeIcon icon={faPlus} size="2xl" style={{color: "#74C0FC",}} />
                </div>
                <p className='p-1 '>Add New Job</p>
              </div>
            </div>

            <div className='w-full p-4'>
                  <table className='w-full'>
                  <thead>
                      <tr className='bg-gray-600 text-white'>
                          <td className='p-2'>Job Id</td>
                          <td className='p-2'>ComponentId</td>
                          <td className='p-2'>ShipId</td>
                          <td className='p-2'>Type</td>
                          <td className='p-2'>Priority</td>
                          <td className='p-2'>Status</td>
                          <td className='p-2'>AssignedEngineerId</td>
                          <td className='p-2'>ScheduledDate</td>
                          <td className='p-2 text-center'>Operations</td>
                      </tr>
                  </thead>
                  <tbody>
                      {jobList.map((job,index) => (
                          <tr className={index%2?'bg-gray-300':'bg-white'}>
                              <td className='p-2'>{job.id}</td>
                              <td className='p-2'>{job.componentId}</td>
                              <td className='p-2'>{job.shipId}</td>
                              <td className='p-2'>{job.type}</td>
                              <td className='p-2'>{job.priority}</td>
                              <td className='p-2'>{job.status}</td>
                              <td className='p-2'>{job.assignedEngineerId}</td>
                              <td className='p-2'>{job.scheduledDate}</td>
                              <td className='p-2'><div className='flex justify-around'>
                                    <div>
                                        <FontAwesomeIcon icon={faExpand} />
                                    </div>
                                                                          
                                    <div>
                                        <FontAwesomeIcon icon={faPencil} />
                                    </div>
                                                                                                           
                                    <div className='' onClick={()=>{dispatch(removeJob(job.id)); toast.info("Job Deleted!!")}}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </div> 
                                  </div>
                              </td>
                          </tr>
                      ))}
                  </tbody>
                  </table>
                </div>





      {show?(<div className='h-full w-full absolute z-10 flex justify-center items-center'>
                      <div className='p-6 border rounded bg-white/90'>
                          <div className='p-2 flex w-full'>
                              <p className='text-center text-2xl'>
                                  Enter Component Details
                              </p>
                              
                              <div className='flex justify-end flex-grow'>
                                  <FontAwesomeIcon icon={faXmark} onClick={()=>setShow(false)}/>
                              </div>                    
                          </div>
                          <div className='p-2'>
                              <label>Component Id</label><br/>
                              <input type='text' className='p-1  m-1' placeholder='Type here' value={componentId} onChange={(e)=> setComponentId(e.target.value)}/>
                          </div>
                          <div className='p-2'>
                              <label>Ship Id</label><br/>
                              <input type='text' className='p-1  m-1' placeholder='Type here' value={shipId} onChange={(e)=> setShipId(e.target.value)}/>
                          </div>
                          <div className='p-2'>
                              <label>Type</label><br/>
                              <input type='text' className='p-1  m-1' placeholder='Type here' value={type} onChange={(e)=> setType(e.target.value)}/>
                          </div>
                          <div className='p-2'>
                              <label>Priority</label>
                              <input type='text' className='p-1 m-1' placeholder='Type here' value={priority} onChange={(e)=> setPriority(e.target.value)}/>
                          </div>
                          <div className='p-2'>
                              <label>Status</label>
                              <input type='text' className='p-1 m-1' placeholder='Type here' value={status} onChange={(e)=> setStatus(e.target.value)}/>
                          </div>
                          <div className='p-2'>
                              <label>AssignedEngineerId</label>
                              <input type='text' className='p-1 m-1' placeholder='Type here' value={assignedEngineerId} onChange={(e)=> setAssignedEngineerId(e.target.value)}/>
                          </div>
                          <div className='p-2'>
                              <label>Scheduled Date</label>
                              <input type='text' className='p-1 m-1' placeholder='Type here' value={scheduledDate} onChange={(e)=> setScheduledDate(e.target.value)}/>
                          </div>
                          <div className='p-2 flex justify-center'>
                              <button onClick={addJobF} className='bg-green-400 text-white p-1 pl-2 pr-2 rounded hover:bg-green-600'>Add</button>
                          </div>
                                          
                      </div>
                  </div>):null}

    </div>
  )
}

export default Jobs