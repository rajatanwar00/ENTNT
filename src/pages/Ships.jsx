import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faPencil, faPlus, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { deleteShipAndData } from '../components/redux/deleteShipAndData'
import { addShip } from '../components/redux/shipListSlice'
import { toast } from 'react-toastify'

function Ships() {

    const shipList=useSelector((state)=>state.ship.shipList)
    const dispatch=useDispatch()
    const [show,setShow]=useState(false)
    const [name,setName]=useState('')
    const [imo,setImo]=useState('')
    const [flag,setFlag]=useState('')
    const [status,setStatus]=useState('')

    function generateUniqueShipId(shipList) {
        let index = 1;
        let idSet = new Set(shipList.map(ship => ship.id));
        
        while (idSet.has(`s${index}`)) {
            index++;
        }

        return `s${index}`;
    }

    
    function addShipF(){
        const ship={
            name,imo,flag,status
        }
        const id=generateUniqueShipId(shipList)
        ship.id=id;
    
        dispatch(addShip(ship))
        setName('');
        setImo('');
        setFlag('');
        setStatus('');
        setShow(false);
        toast.success("Ship created successfully!")
    }

  return (
    <div className='relative flex flex-col '>

        <div className='flex justify-between p-2'>
            <div className='p-1'>
                <p className='p-1'>Currently only add/delete functionality works, although it works synchronously throughout all the members, which are ships, containers and jobs.</p>
            </div>
            <div className='flex p-1 items-center border rounded-md' onClick={()=>setShow(true)}>
                <div className='p-1'>
                    <FontAwesomeIcon icon={faPlus} size="2xl" style={{color: "#74C0FC",}} />
                </div>
                <p className='p-1 '>Add New Ship</p>
            </div>
        </div>
        
        
        <div className=' p-4 '>
            <table className='w-full '>
            <thead>
                <tr className='bg-gray-600 text-white'>
                    <td className='p-2'>Ship Id</td>
                    <td className='p-2'>Name</td>
                    <td className='p-2'>IMO Number</td>
                    <td className='p-2'>Flag</td>
                    <td className='p-2'>Status</td>
                    <td className='p-2 text-center'>Operations</td>
                </tr>
            </thead>
            <tbody>
                {shipList.map((ship,index) => (
                    <tr className={index%2?'bg-gray-300':'bg-white'}>
                        <td className='p-2'>{ship.id}</td>
                        <td className='p-2'>{ship.name}</td>
                        <td className='p-2'>{ship.imo}</td>
                        <td className='p-2'>{ship.flag}</td>
                        <td className='p-2'>{ship.status}</td>
                        <td className='p-2'><div className='flex justify-around'>
                                <div>
                                    <FontAwesomeIcon icon={faExpand} />
                                </div>

                                <div>
                                    <FontAwesomeIcon icon={faPencil} />
                                </div>
                                 
                                <div className='' onClick={()=>{dispatch(deleteShipAndData(ship.id)); toast.info("Ship Deleted!!")}}>
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
                        Enter Ship Details
                    </p>
                    
                    <div className='flex justify-end flex-grow'>
                        <FontAwesomeIcon icon={faXmark} onClick={()=>setShow(false)}/>
                    </div>                    
                </div>
                <div className='p-2'>
                    <label>Name</label><br/>
                    <input type='text' className='p-1  m-1' placeholder='Type here' value={name} onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className='p-2'>
                    <label>IMO Number</label>
                    <input type='text' className='p-1 m-1' placeholder='Type here' value={imo} onChange={(e)=> setImo(e.target.value)}/>
                </div>
                <div className='p-2'>
                    <label>Flag</label>
                    <input type='text' className='p-1 m-1' placeholder='Type here' value={flag} onChange={(e)=> setFlag(e.target.value)}/>
                </div>
                <div className='p-2'>
                    <label>Status</label>
                    <input type='text' className='p-1 m-1' placeholder='Type here' value={status} onChange={(e)=> setStatus(e.target.value)}/>
                </div>
                <div className='p-2 flex justify-center'>
                    <button onClick={addShipF} className='bg-green-400 text-white p-1 pl-2 pr-2 rounded hover:bg-green-600'>Add</button>
                </div>
                                
            </div>
        </div>):null}
        
        
    </div>
  )
}

export default Ships