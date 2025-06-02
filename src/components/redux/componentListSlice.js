import { createSlice } from "@reduxjs/toolkit";

// const loadFromLocalStorage =()=>{
//     try{
//         const data=localStorage.getItem('components')
//         return data?JSON.parse(data):[]
//     }
//     catch(e){
//         console.error("Failed to parse componentList from localStorage:", e);
//         return [];
//     }
// }

const componentsData=[
            
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

const initialState={
    componentList:componentsData
}

export const componentListSlice=createSlice({
    name:'component',
    initialState,
    reducers:{
        setComponentList:(state,action)=>{
            state.componentList=action.payload
            localStorage.setItem('components',JSON.stringify(state.componentList))
        },
        addComponent:(state,action)=>{
            state.componentList.push(action.payload)
            localStorage.setItem('components',JSON.stringify(state.componentList))
        },
        removeComponent:(state,action)=>{
            state.componentList=state.componentList.filter(component=>component.id!==action.payload)
            localStorage.setItem('components',JSON.stringify(state.componentList))
        },
        removeComponentByShipId:(state,action)=>{
            state.componentList=state.componentList.filter(component=>component.shipId!==action.payload)
            localStorage.setItem('components',JSON.stringify(state.componentList))
        }
    }
})

export const { setComponentList, addComponent, removeComponent, removeComponentByShipId} = componentListSlice.actions;
export default componentListSlice.reducer