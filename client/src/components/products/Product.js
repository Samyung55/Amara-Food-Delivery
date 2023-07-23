import React,{useState,useEffect} from 'react'
import ProductCard from './ProductCard'
import {useDispatch, useSelector } from 'react-redux';
import SkeletonArticle from '../../skeleton/SkeletonArticle';
import { fetchPizzas } from '../../actions';
import Message from '../Message';