import { createSlice } from "@reduxjs/toolkit";

// const loadFromLocalStorage =()=>{
//     try{
//         const data=localStorage.getItem('jobs')
//         return data?JSON.parse(data):[]
//     }
//     catch(e){
//         console.error("Failed to parse jobList from localStorage:", e);
//         return [];
//     }
// }

const jobsData=[
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

const initialState={
    jobList:jobsData
}

export const jobsListSlice=createSlice({
    name:'jobs',
    initialState,
    reducers:{
        setJobList:(state,action)=>{
            state.jobList=action.payload
            localStorage.setItem('jobs',JSON.stringify(state.jobList))
        },
        addJob:(state,action)=>{
            state.jobList.push(action.payload)
            localStorage.setItem('jobs',JSON.stringify(state.jobList))
        },
        removeJob:(state,action)=>{
            state.jobList=state.jobList.filter(job=>job.id!==action.payload)
            localStorage.setItem('jobs',JSON.stringify(state.jobList))
        },
        removeJobByShipId:(state,action)=>{
            state.jobList=state.jobList.filter(job=>job.shipId!==action.payload)
            localStorage.setItem('jobs',JSON.stringify(state.jobList))
        },
        removeJobByComponentId:(state,action)=>{
            state.jobList=state.jobList.filter(job=>job.componentId!==action.payload)
            localStorage.setItem('jobs',JSON.stringify(state.jobList))
        }
    }
})

export const { setJobList, addJob, removeJob, removeJobByShipId, removeJobByComponentId } =jobsListSlice.actions;
export default jobsListSlice.reducer;