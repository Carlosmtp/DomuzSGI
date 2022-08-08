import { Fab, Grid } from '@mui/material'
import React, { useContext } from 'react'
import InfoProcess from '../General/InfoProcess'
import InfoIndicator from '../General/InfoIndicator'
import CheckPlan from '../Strat/checkPlan'
import EditIcon from '@mui/icons-material/Edit';
import { AppContext } from '../../../context/AppContext'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
 
const General = () => {
  let navigate = useNavigate() 

  const { lastObject } = useContext(AppContext)

  useEffect(()=>{
    if(lastObject.indicators === undefined){
      navigate("/app/procesos/inicio")
    } 
    //No borrar este coment
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  try {
    return (
      <Grid container component="form" spacing={4} pl={{xs:0,sm:3}} pr={{xs:0,sm:3}}>
        <Fab
          color='info'
          sx={{
            position: 'absolute',
            bottom: (theme) => theme.spacing(2),
            right: (theme) => theme.spacing(4),
          }}
          onClick={()=>{navigate("/app/actualizar/proceso")}}
        >
          <EditIcon />
        </Fab>        
        <Grid item xs={12} sm={12}>      
          <InfoProcess title={lastObject.name} description={lastObject.description} goal={lastObject.goal}/>
        </Grid>
        <Grid item xs={12} sm={12}>      
          <CheckPlan />
        </Grid>
        <Grid item xs={12} sm={12}>
        {lastObject.indicators.map((e,i) =>
          <InfoIndicator indicator={e} key={e.id} />)}   
        </Grid>
      </Grid>
    )
  } catch (error) {
    
  }  
}

export default General