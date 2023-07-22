import pizza from "../apis/pizza"
import { CREATE_ORDER, CREATE_ORDER_ERROR, CREATE_ORDER_REQUEST, DELETE_CART, ORDER_DETAIlS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQURST, PAYMENT_METHOD } from "./types"
import { doc, updateDoc ,getDoc} from "firebase/firestore";
import { firestore, db } from '../firebase'

export const selectPayment = (payment) => async dispatch => {
    dispatch({ type: PAYMENT_METHOD, payload: payment})
}

export const placeOrder=(order)=> async (dispatch,getState)=>{
    dispatch({type:CREATE_ORDER_REQUEST,payload:order})
    console.log(order)

    try{
        const user = getState().user?.user;
        const { data } = await pizza.post('/api/orders', order {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })

        console.log("data", "=>", data?.order.orderItems)
        data?.order.orderItems?.map((item)=>{
         console.log("exicution")
         const docRef = doc(firestore, db.pizzas,item.name);
        getDoc(docRef).then((docSnap)=>{
           console.log(docSnap.data())
         const inStockItem= docSnap.data().inStockItem
          const ref = doc(firestore,db.pizzas,item.name);
          updateDoc(ref, {
            inStockItem: inStockItem-item.qty
           }).then(()=>console.log("added sucessfully"));
        });
    })
    }
    catch {

    }
}