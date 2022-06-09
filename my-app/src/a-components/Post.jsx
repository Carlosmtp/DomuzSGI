import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'

//iMG aNYA https://cdn.realsport101.com/images/ncavvykf/epicstream/9f61396712ba4244e029d0646e1420fdea90567b-1277x716.jpg?rect=2,0,1272,716&w=700&h=394&dpr=2

import React from 'react'

const Post = () => {
  return (
    <Card sx={{p:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYGKGPMYs364eT2sCpK_RkBH7UFJtJKm0YyQ&usqp=CAU"/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title="Anya Forger"
        subheader="May 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://cdn.pixabay.com/photo/2017/12/21/12/08/consulting-3031678_1280.jpg"
        alt="AnyaPost"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Peanuts.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:"red"}}/>}/>
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  )
}
export default Post

