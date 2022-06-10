import { Grid, Typography } from '@mui/material';
import { Stack, Box } from '@mui/material';
import React, { useContext } from 'react'
//import { useNavigate } from 'react-router';
import Post from '../../a-components/Post'
import { AppContext } from '../../context/AppContext'

const Process = () => {

    //let navigate = useNavigate();

    const { login } = useContext(AppContext)
    return (
      <Box bgcolor="background.default" p={3}>
        <Typography color='default' variant='h6' align='center'>
        Interfaz de Menu: {login}
        </Typography>

        <Grid container spacing={4} p={3}>
          <Grid item xs={12} sm={3}>
            <Post />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Post />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Post />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Post />
          </Grid>
        </Grid>
        
        <Stack direction={{ xs: 'column', sm: 'row' }} p={{ xs: 1, sm: 2 }} spacing={3} justifyContent="space-between">
          <Post />
          <Post />
          <Post />
          <Post />
        </Stack>
    </Box>
    )
}

export default Process