import React, { useEffect, useState } from 'react'
import { FaStar , FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../actions/cart';
import { addToWishlist ,deleteItemFromWishlist,getWishlist} from '../../actions/wishlist';
import { useLocation } from 'react-router-dom';
import Spinner from '../Spinner';

const ProductCard = ({ product }) => {
    const user = useSelector(state => state.user.user)
    const wishlist = useSelector(state => state.wishlist)
    const [currentItemClicked, setCurrentItem] = useState()

    const dispatch = useDispatch();
    const cartHandler = (item) => {
        dispatch(addToCart(item))
    }

    
}