import { 
ADDRESS_ERROR, 
ADD_ADDRESS, 
DELETE_ADDRESS, 
GET_ADDRESS, 
SELECT_ADDRESS, 
UPDATE_ADDRESS } from "../actions/types";

export const addressReducer = (state={ addressItems:[] }, action) => {
    switch(action.type) {
        case ADD_ADDRESS:
            return {...state, addressItems: [...state.addressItems, action.payload]}

        case DELETE_ADDRESS:
            const id = action.payload.id
            return { addressItems: state.addressItems.filter(x = x._id !== id)}

        case SELECT_ADDRESS:
            return {...state, selectedAddress: action.payload}

        case UPDATE_ADDRESS:
            const item = action.payload
            const findItemToUpdate = state.addressItems.find(x => x._id === item._id)

        if(findItemToUpdate) {
            return {...state, addressItems: state.addressItems.map(x => x._id === findItemToUpdate._id ? item : x)}
        }
        else{
            return {...state, addressItems: [...state.addressItems, item]}
        }

        case ADDRESS_ERROR: 
        return {...state, error: action.payload}
        
        default: 
        return state
    }
}