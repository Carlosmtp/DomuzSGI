import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { AppContext } from '../../../context/AppContext'

const CardPlan = ({ plan, setUpdate, access }) => {
    const { setLastObject, setProcesses } = useContext(AppContext)

    const [user, setUser] = useState('')
    const [options, setOptions] = useState()

    useEffect(()=>{
        axios.get('/get/user?user_id='+plan.userId)
        .then((res) => {
            let aux = res.data
            setUser(aux.name + ' ' + aux.lastname)            
        })
        if(access){
            review()
        }else{
            send()
        }
       // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])

        
    const review = ()=>{
        setOptions(
            <Grid item xs={6} sm={4}>
                <Button 
                    variant="contained"
                    color='secondary'
                    onClick = {()=>{
                        axios.post("approve/action_plan?id="+plan.id).then((res)=>{
                            console.log('actualizar plan a estado a aprobado', res.data) 
                            axios.get('/get/process?id=3').then((res) => {
                                console.log(res.data)
                                setProcesses([])
                                setLastObject(res.data)
                                setUpdate([])
                            })
                        })
                        
                    }}
                    > Aceptar </Button>
                <Button 
                    variant="contained"
                    color='info'
                    onClick = {()=>{
                        console.log('actualizar plan a estado a no aprobado')
                        let obj = {
                            id : plan.id, 
                            name : plan.name,     
                            description : plan.description,   
                            delivery_date : plan.delivery_date,
                            initiativeId : plan.initiativeId,
                            userId :  plan.userId,
                            stateId : 3
                        }
                        axios.post("update/action_plan", obj).then((res)=>{
                            console.log(res.data)
                            setUpdate([])
                        })
                    }}
                    > Rechazar </Button>
            </Grid>
        )
    }

    const send = ()=>{
        setOptions(
            <Grid item xs={6} sm={4}>
                <Button 
                    variant="contained"
                    color='secondary'
                    onClick = {()=>{                     
                        console.log('actualizar plan a estado a en espera')
                        let obj = {
                            id : plan.id, 
                            name : plan.name,     
                            description : plan.description,   
                            delivery_date : plan.delivery_date,
                            initiativeId : plan.initiativeId,
                            userId :  plan.userId,
                            stateId : 1
                        }
                        axios.post("update/action_plan", obj).then((res)=>{
                            console.log(res.data)
                            setUpdate([])
                        })                        
                    }}
                    > Enviar </Button>
            </Grid>
        )
    }

  return (
    <Box mt={1} p={2} sx={{ border: 2, borderRadius: '16px', borderColor: 'background.default', boxShadow: 4 }} bgcolor='white'>
        <Grid container>
            <Grid item xs={12} sm={8}>
                <Typography color='black'>
                    {plan.name}
                </Typography>                
            
            </Grid>
            {options}
            <Grid item xs={12} sm={8}>
                <Typography color='black'>
                    {user}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography color='gray'>
                    {plan.delivery_date.substring(0,10)}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Typography color='black'>
                    {plan.description}
                </Typography>
            </Grid>
            
        </Grid>
    </Box>
  )
}

export default CardPlan