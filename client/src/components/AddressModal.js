import React ,{ useEffect, useState}from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { addAddress, updateAddress } from '../actions/address';
// import axios from 'axios'

const AddressModal = ({show, setShow, addressToEdit}) => {
    const [pinCode, setPinCode] = useState('');
    const [name, setName] = useState('')
    const [mobno, setMobNo] = useState('')
    const [address, setAddress] = useState('')
    const [state,setState]=useState('')
    const [town,setTown]=useState('')
    const [city,setCity]=useState('')

    
}