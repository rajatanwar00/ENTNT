import { createSlice } from '@reduxjs/toolkit'

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('ships');
    return data ? JSON.parse(data) : []; 
  } catch (e) {
    console.error("Failed to parse shipList from localStorage:", e);
    return [];
  }
};

const initialState={
    shipList:loadFromLocalStorage()
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