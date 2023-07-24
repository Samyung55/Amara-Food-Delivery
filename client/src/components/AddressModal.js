import React ,{ useEffect, useState}from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { addAddress, updateAddress } from '../actions/address';
// import axios from 'axios'

const AddressModal = ({show, setShow, addressToEdit}) => {
    const [pinCode, setPinCode] = useState('');
    const [name, setName] = useState('')
    const [mobNo, setMobNo] = useState('')
    const [address, setAddress] = useState('')
    const [state,setState]=useState('')
    const [town,setTown]=useState('')
    const [city,setCity]=useState('')

    useEffect(() => {
        if(addressToEdit) {
           setPinCode(addressToEdit.pinCode)
           setName(addressToEdit.name)
           setMobNo(addressToEdit.mobNo)
           setAdress(addressToEdit.address)
           setState(addressToEdit.state)
           setTown(addressToEdit.town)
           setCity(addressToEdit.city)
        }
    }, [addressToEdit])
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
     // console.log(pinCode)
    // const getPinCode=async()=>{
    // const {data} = await axios.get(`https://api.postalpincode.in/pincode/${415110}`)
    // console.log(data)
    // setData(data)

    // }
    // useEffect(()=>{
    //    getPinCode()
    // },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addAddress(name, mobNo, pinCode, address, town, state, city, user._id))
        setShow(false)
    }

    const handleUpdateAddress=(e)=>{
        e.preventDefault()
       dispatch(updateAddress(name,mobNo,pinCode,address,town,state,city,user._id,addressToEdit._id))
       setShow(false)
    }
}