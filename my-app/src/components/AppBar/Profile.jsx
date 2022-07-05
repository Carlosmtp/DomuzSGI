import { Box, Typography } from '@mui/material'
import CustomAvatar from '../CustomAvatar'
import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Profile = () => {
    const { login } = useContext(AppContext)
    console.log('Profile',login.rol)
    return (
        <Box pl={2} pr={2} display='flex'alignItems="center"
        >
            <CustomAvatar id={login.rol} size={40}/>
            <Typography pl={1}>{login.name}</Typography>
        </Box>
    )
}

export default Profile