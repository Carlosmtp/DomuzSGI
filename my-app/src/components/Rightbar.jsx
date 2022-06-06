import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  }
];

const Rightbar = () => {
  return (
    <Box 
    flex={2} 
    p={2}
    sx={{ display: { xs: "none", sm:"block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={4}>
          <Avatar alt="anya" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYGKGPMYs364eT2sCpK_RkBH7UFJtJKm0YyQ&usqp=CAU" />
          <Avatar alt="damian" src="http://pm1.narvii.com/7974/2f0fa221c0118e797c9da12e062c4458ec9ea590r1-330-330v2_00.jpg" />
          <Avatar alt="becky" src="https://api.duniagames.co.id/api/content/upload/file/8324944721623923894.png" />
          <Avatar alt="yor" src="https://gcdn.lanetaneta.com/wp-content/uploads/2022/05/El-cosplay-de-Spy-x-Family-aprovecha-los-atuendos-cotidianos.jpg"/>
          <Avatar alt="yor" src="https://gcdn.lanetaneta.com/wp-content/uploads/2022/05/El-cosplay-de-Spy-x-Family-aprovecha-los-atuendos-cotidianos.jpg"/>
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={164} gap={5} align="center">
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={100}>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar