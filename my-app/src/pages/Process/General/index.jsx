import { Grid } from '@mui/material'
import React, { useContext } from 'react'
import InfoProcess from './InfoProcess'
import InfoIndicator from './InfoIndicator'
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

  //console.log('get/user?user_id='+lastObject.indicators[0])
  try {
    return (
      <Grid container component="form" spacing={4} pl={{xs:0,sm:3}} pr={{xs:0,sm:3}}>
        <Grid item xs={12} sm={12}>      
          <InfoProcess title={lastObject.name} description={lastObject.description} goal={lastObject.goal}/>
        </Grid>
        <Grid item xs={12} sm={12}>
        {lastObject.indicators.map((e,i) =>
          <InfoIndicator indicator={e} title={e.name} key={e.id} userId={e.userId}/>)}   
        </Grid>
      </Grid>
    )
  } catch (error) {
    
  }  
}

export default General