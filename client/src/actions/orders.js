import pizza from "../apis/pizza"
import { CREATE_ORDER, CREATE_ORDER_ERROR, CREATE_ORDER_REQUEST, DELETE_CART, ORDER_DETAIlS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQURST, PAYMENT_METHOD } from "./types"
import { doc, updateDoc ,getDoc} from "firebase/firestore";
import { firestore, db } from '../firebase'
