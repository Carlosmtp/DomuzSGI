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
    const [show, setShow] = useState(<Box />)

    useEffect(()=>{
        axios.get('/get/action_plans/state?id=1')//Pendientes del mes y año
        .then((res) => {
            setReview(res.data)
        })

        axios.get('/get/action_plans/user?id='+login.userId)//UserID no aprobados
        .then((res) => {
            setSend(res.data)
        })
        
        if(login.rol === 1 || login.rol === 2){
            showAccordion()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[send, review])

      const showAccordion = () => {
        setShow(
            <AccordionPlans title={'Revisión'} plans={review} setUpdate={setReview} access={true}/>
        )
    }
    return (
        <Box pb={2}>
            {show}
            <AccordionPlans title={'Mis planes'} plans={send} setUpdate={setSend} access={false}/>
        </Box>
    )
}

export default CheckPlan