import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import AccordionPlans from './AccordionPlans'

import { Box } from '@mui/system';
import { AppContext } from '../../../context/AppContext';
//import { AppContext } from '../../../context/AppContext';

const CheckPlan = () => {
    const { login } = useContext(AppContext)

    const [review, setReview] = useState([])
    const [send, setSend] = useState([])

    useEffect(()=>{
        axios.get('/get/action_plans/state?id=1')//Pendientes del mes y año
        .then((res) => {
            setReview(res.data)
        })

        axios.get('/get/action_plans/user?id='+login.userId)//UserID no aprobados
        .then((res) => {
            setSend(res.data)
        })
        
      },[send, review])

    return (
        <Box pb={2}>
            <AccordionPlans title={'Revisión'} plans={review} setUpdate={setReview} access={true}/>
            <AccordionPlans title={'Mis planes'} plans={send} setUpdate={setSend} access={false}/>
        </Box>
    )
}

export default CheckPlan