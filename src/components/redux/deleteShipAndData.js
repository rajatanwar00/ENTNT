import { removeShip } from "./shipListSlice"
import { removeComponentByShipId } from "./componentListSlice";
import { removeJobByShipId } from "./jobsListSlice";


export const deleteShipAndData=(shipId)=>(dispatch)=>{
    dispatch(removeShip(shipId));
    dispatch(removeComponentByShipId(shipId));
    dispatch(removeJobByShipId(shipId));
}