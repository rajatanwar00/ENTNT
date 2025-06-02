import { createSlice } from '@reduxjs/toolkit'

// const loadFromLocalStorage = () => {
//   try {
//     const data = localStorage.getItem('ships');
//     return data ? JSON.parse(data) : []; 
//   } catch (e) {
//     console.error("Failed to parse shipList from localStorage:", e);
//     return [];
//   }
// };

const shipsData=[
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

const initialState={
    shipList:shipsData
}

export const shipListSlice=createSlice({
    name:'ship',
    initialState,
    reducers:{
        setShipList:(state,action)=>{
            state.shipList=action.payload
            localStorage.setItem('ships',JSON.stringify(state.shipList))
        },
        addShip:(state,action)=>{
            state.shipList.push(action.payload)
            localStorage.setItem('ships',JSON.stringify(state.shipList))
        },
        removeShip:(state,action)=>{
            state.shipList=state.shipList.filter(ship=>ship.id!==action.payload)
            localStorage.setItem('ships',JSON.stringify(state.shipList))
        },
    },
})

export const { setShipList,addShip,removeShip} =shipListSlice.actions
export default shipListSlice.reducer;