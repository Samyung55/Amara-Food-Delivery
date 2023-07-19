import { 
CREATE_ORDER, 
CREATE_ORDER_ERROR, 
CREATE_ORDER_REQUEST, 
ORDER_DETAIlS, 
ORDER_DETAILS_FAIL, 
ORDER_DETAILS_REQURST, 
PAYMENT_METHOD,
SEARCH_SUCCESS,
SHEARCH_REQ,
SERACH_ERROR } from "../actions/types";

export const orderReducer = (state={loading:false,sucess:false}, action) => {
    switch (action.type) {
        case PAYMENT_METHOD:
            return {...state, paymentMethod: action.payload}

        case CREATE_ORDER_REQUEST:
            return {...state}
    }
}