import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage =()=>{
    try{
        const data=localStorage.getItem('components')
        return data?JSON.parse(data):[]
    }
    catch(e){
        console.error("Failed to parse componentList from localStorage:", e);
        return [];
    }
}

const initialState={
    componentList:loadFromLocalStorage()
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