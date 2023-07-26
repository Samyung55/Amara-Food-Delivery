import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import Message from '../components/Message'
import pizza from '../apis/pizza'
import { doc, setDoc } from "firebase/firestore"; 
import { db, firestore } from '../firebase'

const AddProduct = () => {
    const [img,setImg]=useState("")
    const [name,setName]=useState("")
    const [des,setDes]=useState("")
    const [price,setPrice]=useState()
    const [show,setShow]=useState(false)
    const [category,setCategory]=useState("")
    const [fileName,setFileName]=useState("Add Image")
    const [loading,setLoading]=useState(false)
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setLoading(true)
      const {data}=await pizza.post("/api/products/add-product",{name,description:des,price:parseInt(price),image:img,category}) 
      await setDoc(doc(firestore,db.pizzas,name),{
        name,
        inStockItem:7,
        outOfStock:false,
        img
      });