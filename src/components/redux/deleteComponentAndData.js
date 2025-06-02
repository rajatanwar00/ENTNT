import { removeComponent } from "./componentListSlice"
import { removeJobByComponentId } from "./jobsListSlice";

export const deleteComponentAndData=(componentId)=>(dispatch)=>{
    dispatch(removeComponent(componentId));
    dispatch(removeJobByComponentId(componentId));
}