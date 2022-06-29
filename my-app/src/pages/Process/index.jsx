import { Grid } from '@mui/material';
import { Box, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import Processes from './Process'
import { AppContext } from '../../context/AppContext'
const axios = require('axios').default;

const Process = () => {

    //let navigate = useNavigate();
    const arr = [1,2,3,4]
    const { login } = useContext(AppContext)

    useEffect(()=>{
      axios.get("http://localhost:6464/get/processes")
      .then((res) => {
        console.log(res.data)
        //setName(res.data[0].name)
        //setDescription(res.data[0].description)

        //setloading(false)
        //setRoles(res.data)
      })        
    },[])

    return (
      <Box>
        <Typography color='default' variant='h6' align='center' pb={{xs:3, sm:0}}>
        Interfaz de Menu: {login}
        </Typography>
        <Grid container spacing={3} p={{xs:0, sm:3}}>
        
          {arr.map((e) =>
            <Processes key={e} />)}

        </Grid> 
      </Box>
    )
}

export default Process