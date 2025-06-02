import { faExpand, faPencil, faPlus, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addComponent } from '../components/redux/componentListSlice';
import { deleteComponentAndData } from '../components/redux/deleteComponentAndData';
import { toast } from 'react-toastify';

function Components() {
  
  const componentList=useSelector((state)=>state.component.componentList)
  //console.log(componentList)
  const dispatch=useDispatch();
  const [shipId,setShipId]=useState('')
  const [show,setShow]=useState(false)
  const [name,setName]=useState('')
  const [serialNumber,setSerialNumber]=useState('')
  const [installDate,setInstallDate]=useState('')
  const [lastMaintenanceDate,setLastMaintenanceDate]=useState('')

  function generateUniqueComponentId(componentList) {
        let index = 1;
        let idSet = new Set(componentList.map(component => component.id));
        
        while (idSet.has(`c${index}`)) {
            index++;
        }

        return `c${index}`;
    }

  function addComponentF(){
        const component={
            shipId,name,serialNumber,installDate,lastMaintenanceDate
        }
        const id=generateUniqueComponentId(componentList);
        component.id=id;
    
        dispatch(addComponent(component))
        setShipId('');
        setName('');
        setSerialNumber('');
        setInstallDate('');
        setLastMaintenanceDate('');
        setShow(false);
        toast.success("Component created successfully!")
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
          <div>
            <p className='p-1 '>Add New Components</p>
          </div>          
        </div>
      </div>


                <div className='w-full p-4'>
                  <table className='w-full'>
                  <thead>
                      <tr className='bg-gray-600 text-white'>
                          <td className='p-2'>Component Id</td>
                          <td className='p-2'>ShipId</td>
                          <td className='p-2'>Name</td>
                          <td className='p-2'>Serial Number</td>
                          <td className='p-2'>Install Date</td>
                          <td className='p-2'>Last Maintenance Date</td>
                          <td className='p-2 text-center'>Operations</td>
                      </tr>
                  </thead>
                  <tbody>
                      {componentList.map((component,index) => (
                          <tr className={index%2?'bg-gray-300':'bg-white'}>
                              <td className='p-2'>{component.id}</td>
                              <td className='p-2'>{component.shipId}</td>
                              <td className='p-2'>{component.name}</td>
                              <td className='p-2'>{component.serialNumber}</td>
                              <td className='p-2'>{component.installDate}</td>
                              <td className='p-2'>{component.lastMaintenanceDate}</td>
                              <td className='p-2'><div className='flex justify-around'>
                                      <div>
                                        <FontAwesomeIcon icon={faExpand} />
                                      </div>
                                      
                                      <div>
                                        <FontAwesomeIcon icon={faPencil} />
                                      </div>
                                                                       
                                      <div className='' onClick={()=>{dispatch(deleteComponentAndData(component.id)); toast.info("Component Deleted!!")}}>
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
                              <label>Ship Id</label><br/>
                              <input type='text' className='p-1  m-1' placeholder='Type here' value={shipId} onChange={(e)=> setShipId(e.target.value)}/>
                          </div>
                          <div className='p-2'>
                              <label>Name</label><br/>
                              <input type='text' className='p-1  m-1' placeholder='Type here' value={name} onChange={(e)=> setName(e.target.value)}/>
                          </div>
                          <div className='p-2'>
                              <label>Serial Number</label>
                              <input type='text' className='p-1 m-1' placeholder='Type here' value={serialNumber} onChange={(e)=> setSerialNumber(e.target.value)}/>
                          </div>
                          <div className='p-2'>
                              <label>Install Date</label>
                              <input type='text' className='p-1 m-1' placeholder='Type here' value={installDate} onChange={(e)=> setInstallDate(e.target.value)}/>
                          </div>
                          <div className='p-2'>
                              <label>Maintenance Date</label>
                              <input type='text' className='p-1 m-1' placeholder='Type here' value={lastMaintenanceDate} onChange={(e)=> setLastMaintenanceDate(e.target.value)}/>
                          </div>
                          <div className='p-2 flex justify-center'>
                              <button onClick={addComponentF} className='bg-green-400 text-white p-1 pl-2 pr-2 rounded hover:bg-green-600'>Add</button>
                          </div>
                                          
                      </div>
                  </div>):null}


    </div>
  )
}

export default Components