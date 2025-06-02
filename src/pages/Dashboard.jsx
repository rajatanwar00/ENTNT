import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function Dashboard() {

  const shipList=useSelector((state)=>state.ship.shipList)
  const dispatch=useDispatch()
  const jobs=useSelector((state)=>state.jobs.jobList)
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const components=useSelector((state)=>state.component.componentList)

  const shipCount=shipList.reduce((acc,ship)=>{
    acc[ship.status]=(acc[ship.status]||0)+1;
    return acc;
  },{});

  const barData=Object.entries(shipCount).map(([status,value])=>({
    name: status,
    value
  }));

  const statusCount = jobs.reduce((acc, job) => {
    acc[job.status] = (acc[job.status] || 0) + 1;
    return acc;
  }, {});


  const pieData = Object.entries(statusCount).map(([status, value]) => ({
    name: status,
    value
  }));

  
  const componentsDList=components.reduce((acc,component)=>{
    const date=component.lastMaintenanceDate;
    const mDate=new Date(date);
    mDate.setFullYear(mDate.getFullYear()+2);
    const newDate=mDate.toISOString().split('T')[0];
    const d=new Date();
    const today=d.toISOString().split('T')[0];
    
    if(newDate<=today){
      acc.push({...component,dueDate:newDate})
    }

    return acc
  },[])


  return (
    <div className=''>
      <div className='p-4 flex flex-col '>

        <div className='p-2 flex flex-col justify-between  sm:flex-row '>
            <div className='p-1 border rounded-md w-md  sm:w-lg '>

              <div className='p-1'>
                <p className='text-center text-2xl'>Ships Count</p>
              </div>

              <div className='p-1 flex justify-center text-xl'>
                <label className='text-center'>Total : {shipList.length}</label>
              </div>

              <div className='w-full'>
                <ResponsiveContainer width='100%' height={280}> 
                <BarChart
                  // width={500}
                  // height={280}
                  data={barData}
                  layout='vertical'
                  margin={{ top: 20, right: 30, left: 50, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
                </ResponsiveContainer> 
              </div>
            </div>

            <div className='p-1 border rounded-md  sm:w-lg w-md  '> 
              <div className='p-1'>
                <p className='text-center text-2xl'>Job Status Count</p>
              </div>

              <div className='flex justify-center '>
                <ResponsiveContainer width="100%" height={320}>
                  <PieChart 
                  // width={400} height={320}
                   >
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip/>
                    <Legend/>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
            </div>

        </div>


        <div className='p-2'>

            <div className='p-2 border rounded-md '>
              <div className='p-1'>
                <p className='text-center text-2xl'>Components with Overdue Maintenance </p>
              </div>

              <div className='p-1 flex justify-center'>
                <table className='w-full'>
                  <thead>
                    <tr className='bg-gray-600 text-white'>
                      <td className='p-2'>Name</td>
                      <td className='p-2'>Ship Id</td>
                      <td className='p-2'>Last Maintenance Date</td>
                      <td className='p-2'>Due Date</td>
                    </tr>
                  </thead>
                  <tbody>
                    {componentsDList.map((component,index)=>(
                      <tr className={index%2?'bg-gray-300':'bg-white'}>
                        <td className='p-2'>{component.name}</td>
                        <td className='p-2'>{component.shipId}</td>
                        <td className='p-2'>{component.lastMaintenanceDate}</td>
                        <td className='p-2'>{component.dueDate}</td>
                      </tr>                  
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

        </div>        

      </div>
    </div>
  )
}

export default Dashboard