import { Box, Button, Card, Divider, Stack, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';

import React from 'react'
import { useNavigate } from 'react-router';

const CardAdmin = ({Icon, color, title, created, link_create, link_show}) => {
  let navigate = useNavigate();
  return (    
    <Card>
              <Stack direction='row'>
                <Box flex={3} p={1} display="flex" alignItems="center" bgcolor={color[900]}>
                  <Icon sx={{width: { xs: 56, sm: 70}, height: { xs: 56, sm: 70}, color:'white'}}/>
                </Box>
                <Box flex={7} p={1} bgcolor={color[500]}>
                  <Box p={1}>
                    <Typography sx={{color:'white'}}>{title}</Typography>
                    <Typography variant='h6' sx={{color:'white'}}>
                      En sistema: {created}
                    </Typography>
                    <Divider sx={{background:'white'}}/>
                  </Box>
                    <Button sx={{color:'white'}} onClick={() => navigate(link_create)}> Crear </Button>
                </Box>
                <Box flex={1} display="flex" alignItems="center" pr={1} bgcolor={color[500]}>
                  <Button onClick={() => navigate(link_show)}>
                    <VisibilityIcon sx={{color:'white'}}/>
                  </Button>    
                </Box>
              </Stack>
            </Card>
  )
}

export default CardAdmin