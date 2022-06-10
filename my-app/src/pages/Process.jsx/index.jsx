import { Typography } from '@mui/material';
import { Stack, Box } from '@mui/material';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import Post from '../../a-components/Post'
import Dashboard from '../../components/AppBar';
import { LoginContext } from '../../context/LoginContext'

const Process = () => {

    let navigate = useNavigate();

    const { login } = useContext(LoginContext)
    return (
      <Box bgcolor="white" p={3}>
        <Typography color='primary' variant='h6' align='center'>
        Interfaz de Menu: {login}
        </Typography>
        <Stack direction="row" p={2} spacing={4} justifyContent="space-between">
          <Post />
          <Post />
          <Post />
          <Post />
        </Stack>
        <Stack direction="row" p={2} spacing={4} justifyContent="space-between">
          <Post />
          <Post />
          <Post />
          <Post />
        </Stack>
    </Box>
    )
}

export default Process