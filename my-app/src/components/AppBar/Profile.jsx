import { Box, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material'
import CustomAvatar from '../CustomAvatar'
import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

import RemoveCookie from '../../hooks/removeCookie'
import { useNavigate } from "react-router-dom";

const options = [
    'Ver perfil',
    'Cerrar sesión',
  ];

const Profile = () => {
    const { login, setLogin } = useContext(AppContext)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(anchorEl);

    let navigate = useNavigate();   

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
        
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        switch (index) {
            case 0:
                console.log('ir al perfil')
                break;
            case 1:
                RemoveCookie('usrin')
                setLogin({})
                navigate('/')
                break;
        
            default:
                break;
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    
    //console.log('Profile',login.rol)
    return (          
    <Box>   
        {/*
    <Box  pl={2} pr={2}>
            <Button>
                <CustomAvatar id={login.rol} size={40}/>
                <Typography color='primary.contrast' pl={1}>{login.name}</Typography>
            </Button>
        </Box>
    */}  
        <List
            component="nav"
            aria-label="Device settings"
            >
            <ListItem
                button
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClickListItem}
                >
                    <Box pr={1}>
                        <CustomAvatar id={login.rol} size={40}/>
                    </Box>            
                        <ListItemText
                primary={login.name}
                />
            </ListItem>
        </List>
        <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'lock-button',
            role: 'listbox',
            }}
        >
            {options.map((option, index) => (
            <MenuItem
                key={option}
                //disabled={index === 0}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
            >
                {option}
            </MenuItem>
            ))}
        </Menu>
    </Box>
       
    )
}

export default Profile