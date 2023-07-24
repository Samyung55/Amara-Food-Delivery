import React,{useState} from 'react'
import {MdDelete} from 'react-icons/md'
import {IoMdAdd,IoMdRemove} from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { deleteItem, updateCart } from '../actions/cart'

const CartItem = ({item}) => {
    const [qty, setQty] = useState(item.qty)
    const dispatch = useDispatch()
    if(qty < 1) {
       setQty(1)
    }

    const increaseQty = () => {
        setQty(qty + 1)
        dispatch(updateCart(item,Number(qty+1)))
    }

    const decreaseQty=()=>{
        setQty(qty-1)
        dispatch(upadteCart(item,Number(qty-1)))
     }
}