import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import AccordionPlans from './AccordionPlans'

import { Box } from '@mui/system';
import { AppContext } from '../../../context/AppContext';

const CheckPlan = () => {
    const { login } = useContext(AppContext)

    const [review, setReview] = useState([])
    const [send, setSend] = useState([])

    useEffect(()=>{
        axios.get('/get/action_plans')
        .then((res) => {
            setReview(res.data)
        })
      },[])

    return (
        <Box pb={2}>
            <AccordionPlans title={'Revisión'} plans={review} access={true}/>
            <AccordionPlans title={'Mis planes'} plans={review} access={false}/>
        </Box>
    )
}

export default CheckPlan