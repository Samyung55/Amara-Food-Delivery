import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import Message from '../components/Message'
import pizza from '../apis/pizza'
import { doc, setDoc } from "firebase/firestore"; 
import { db, firestore } from '../firebase'

