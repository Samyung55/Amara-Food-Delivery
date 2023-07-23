import React, { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import {HiMenuAlt1} from 'react-icons/hi'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { searchProducts, showSideBar } from '../actions'
import Spinner from './Spinner'

const Header = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate();
    const search = useSelector(state => state.search)
    const dispatch = useDispatch()
    const handleSearch
}