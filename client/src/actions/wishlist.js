import pizza from "../apis/pizza"
import { ADD_WISHLIST_ERROR, ADD_WISHLIST_REQ, ADD_WISHLIST_SUCCESS ,DELETE_WISHLIST_ITEM,GET_WISHLIST} from "./types"

export const addToWishlist =(item)=>async (dispatch,getState)=>{
    console.log(item)
    dispatch({type:ADD_WISHLIST_REQ,payload:item})