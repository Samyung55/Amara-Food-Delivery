import React,{useState,useEffect} from 'react'
import ProductCard from './ProductCard'
import {useDispatch, useSelector } from 'react-redux';
import SkeletonArticle from '../../skeleton/SkeletonArticle';
import { fetchPizzas } from '../../actions';
import Message from '../Message';

const Product = ({ category }) => {
    const dispatch = useDispatch()
    const allPizzas = useSelector(state => state.allPizza)
    const { loading, error, data } = allPizzas 

    const [show, setShow] = useState(error)

      useEffect(() => {
        if(category) {
          dispatch(fetchPizzas(category))
        }
      },[category])

}