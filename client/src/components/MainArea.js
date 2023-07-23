import React, { useState } from 'react'
import '../styles/mainarea.css'
import Header from './Header'
import pizzaboy from '../assests/pizzaboy.png'
import pizzaSilce from '../assests/pizzaSilce.png'
import Product from './products/Product'
import { useSelector } from 'react-redux'

const MainArea = () => {
    const user = useSelector(state => state.user)
    const [category, setCategory] = useState('pizza')

    
}