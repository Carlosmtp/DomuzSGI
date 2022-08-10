import { Engineering, Leaderboard } from '@mui/icons-material'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Avatar } from '@mui/material'
import { deepPurple, indigo, amber, pink } from '@mui/material/colors'
import React from 'react'

const CustomAvatar = ({ id, size }) => {
    //llega 128
    let sizeIcon = Math.round( size*0.625 )
    let mobileSize = Math.round( size*0.61 )
    let mobileSizeIcon = Math.round( size*0.4375 )
    switch (id) {
        case 1:
            //Admin atm
            return (
                <Avatar
                sx={{ width: { xs: mobileSize, sm: size}, height: { xs: mobileSize, sm: size}, bgcolor:pink[500] }}
                p={2}
                >
                    <PrecisionManufacturingIcon  sx={{ width: { xs: mobileSizeIcon, sm: sizeIcon}, height: { xs: mobileSizeIcon, sm: sizeIcon} }}/>
                </Avatar>
            )
        case 2:
            //Gerente atm
            return (
                <Avatar
                sx={{ width: { xs: mobileSize, sm: size}, height: { xs: mobileSize, sm: size}, bgcolor:amber[500] }}
                p={2}
                >
                    <SupervisorAccountIcon sx={{ width: { xs: mobileSizeIcon, sm: sizeIcon}, height: { xs: mobileSizeIcon, sm: sizeIcon} }}/>
                </Avatar>
            )
        case 3:
            //Lider atm
            return (
                <Avatar
                sx={{ width: { xs: mobileSize, sm: size}, height: { xs: mobileSize, sm: size}, bgcolor:deepPurple[500] }}
                p={2}
                >
                    <Leaderboard sx={{ width: { xs: mobileSizeIcon, sm: sizeIcon}, height: { xs: mobileSizeIcon, sm: sizeIcon} }}/>
                </Avatar>
            )
        case 4:
            //colaborador
            return (
                <Avatar
                sx={{ width: { xs: mobileSize, sm: size}, height: { xs: mobileSize, sm: size}, bgcolor:indigo[500] }}
                p={2}
                >
                    <Engineering sx={{ width: { xs: mobileSizeIcon, sm: sizeIcon}, height: { xs: mobileSizeIcon, sm: sizeIcon} }}/>
                </Avatar>
            )
        default:
            break;
    }
    
}

export default CustomAvatar