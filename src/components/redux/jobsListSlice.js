import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage =()=>{
    try{
        const data=localStorage.getItem('jobs')
        return data?JSON.parse(data):[]
    }
    catch(e){
        console.error("Failed to parse jobList from localStorage:", e);
        return [];
    }
}

const initialState={
    jobList:loadFromLocalStorage()
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