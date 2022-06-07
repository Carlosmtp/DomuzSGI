import { Box } from '@mui/material'


import React from 'react'
import Post from './Post'

const Feed = () => {
  return (
    <Box 
    //bgcolor="pink" 
    flex={4} 
    p={2}>
    <Post />
    <Post />
    <Post />
    <Post />
    </Box>
  )
}

export default Feed