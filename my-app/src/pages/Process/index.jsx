import { Grid } from '@mui/material';
import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react'
import Processes from './Process'
import { AppContext } from '../../context/AppContext'
import { useParams } from 'react-router';
import General from './General'
import Strat from './Strat'
import { useEffect } from 'react';
import { useState } from 'react';

const Process = () => {
    const { id } = useParams();
    const { login, processes } = useContext(AppContext)
    const [ show , setShow] = useState([{id: '', name: "", description: "" }])

    useEffect(()=>{
      let aux = []
      if(login.rol === 1 || login.rol === 2){
        setShow(processes)
      }else{
        for (let i = 0; i < processes.length; i++) {        
          for (let j = 0; j < processes[i].indicators.length; j++) {
            if(processes[i].indicators[j].userId === login.userId || processes[i].id === 3){
              aux = aux.concat(processes[i])
            }      
          }    
        }
        setShow(aux)
      }

      

    },[])   

    //console.log(login)
    switch (id) {
      case "inicio":
        return (
          <Box>
            <Typography color='default' variant='h6' align='center' pb={{xs:3, sm:0}}>
            Bienvenido
            </Typography>
            <Typography color='info.main' variant='h6' align='center' pb={{xs:3, sm:0}}>
            {login.name}
            </Typography>
            <Grid container spacing={3} p={{xs:0, sm:3}}>
            
              {show.map((e,i) =>
                <Processes title={e.name} description={e.description} key={e.id}  id={i}/>)}
    
            </Grid> 
          </Box>
        )
      case 'Gestión Estratégica':
        return <Strat title={id} />
      default:
        return <General title={id}/>
    }
    
}

export default Process