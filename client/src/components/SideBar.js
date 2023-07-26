import React ,{useState}from 'react'
import '../styles/sidebar.css'
import {FaHome,FaBoxOpen,FaPizzaSlice,FaTimes} from 'react-icons/fa'
import {BsHeartHalf,BsGear} from 'react-icons/bs'
import {CgFileDocument} from 'react-icons/cg'
import { Link,useLocation } from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/auth'
import { showSideBar } from '../actions'

const SideBar = () => {
    const dispatch =useDispatch()
    const user = useSelector(state=>state.user.user)
    const show =useSelector(state=>state.sidebar.show)

    const location =useLocation()
    const path =location.pathname

 const handleSignOut =()=>{
       dispatch(logout())
 }