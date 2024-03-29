import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
//import { useNavigate } from 'react-router';
import PersonIcon from '@mui/icons-material/Person';
import FlagIcon from '@mui/icons-material/Flag';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { deepPurple, red, teal, orange, lightBlue, indigo } from '@mui/material/colors'
import CardAdmin from './CardAdmin';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';

const Administration = () => {
  const { login } = useContext(AppContext)

  const [show, setShow] = useState(<Box />)

  const [adminCount,setAdminCount] = useState({
    users : '',
    processes : '',
    objetives : '',
  })

    useEffect(()=>{
      axios.get("get/counters")
      .then((res) => {
        console.log(res.data)
        setAdminCount(res.data)
      })
    
      if(login.rol === 1){
        showAdmin()
      }
  },[])
    
  const showAdmin = () => {
    setShow(
      <React.Fragment>
          <Grid item xs={12} sm={4}>
            <CardAdmin Icon={AssignmentIcon} color={orange} title='PROCESOS' created={adminCount.processes} link_create="/app/crear/proceso" link_show="/app/procesos/inicio"/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardAdmin Icon={AccountTreeIcon} color={teal} title='PROYECTOS' created={adminCount.proyects} link_create="/app/crear/proyecto"/>
          </Grid>          
          <Grid item xs={12} sm={4}>
            <CardAdmin Icon={FlagIcon} color={red} title='OBJETIVOS' created={adminCount.objetives} link_create="/app/crear/objetivo" link_show="/app/ver/objetivos"/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardAdmin Icon={BusinessCenterIcon} color={deepPurple} title='EMPRESAS' created={adminCount.companies} link_create="/app/crear/empresa" link_show="/app/ver/empresa"/>
          </Grid>
      </React.Fragment>
    )
  }
    return (
      <Box>
        <Typography variant="h4">
          Administración
        </ Typography>
        <Grid container spacing={3} p={{xs:0, sm:3}}>
          <Grid item xs={12} sm={4}>
            <CardAdmin Icon={PersonIcon} color={lightBlue} title='PERSONAS' created={adminCount.users} link_create="/app/crear/usuario" link_show="/app/ver/usuarios"/>
          </Grid>
          {show}
          <Grid item xs={12} sm={4}>
            <CardAdmin Icon={PersonIcon} color={indigo} title='PLAN DE ACCIÓN' created={adminCount.action_plans} link_create="/app/crear/plan" link_show="/app/ver/plan"/>
          </Grid>
        </Grid>        
      </ Box>
    )
}

export default Administration