import pizza from "../apis/pizza"
import { ADDRESS_ERROR, ADD_ADDRESS, DELETE_ADDRESS, GET_ADDRESS, SELECET_ADDRESS, UPDATE_ADDRESS } from "./types"

export const addAddress=(name, mobNo, pinCode, address, town, state, city, userId)=>async dispatch=>{
    try {
        const { data } = await pizza.post('/api/users/address',{ name, mobNo, pinCode, address, town, state, city, userId})
        dispatch({ type: ADD_ADDRESS, payload: data})
    } catch (error) {
        dispatch({type: ADDRESS_ERROR, 
            payload:error.response && error.response.data.message ? error.response.data.message:error.message })
    }
}