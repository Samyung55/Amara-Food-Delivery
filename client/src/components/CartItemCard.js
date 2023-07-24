import React,{useState} from 'react'
import {MdDelete} from 'react-icons/md'
import {IoMdAdd,IoMdRemove} from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { deleteItem, updateCart } from '../actions/cart'

const CartItem = ({item}) => {
    const [qty, setQty] = useState(item.qty)
    const dispatch = useDispatch()
    
}