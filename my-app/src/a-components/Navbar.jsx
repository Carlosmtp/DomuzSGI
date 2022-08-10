import { Bedtime, Mail, Notifications } from '@mui/icons-material'
import { Avatar, styled, Box, AppBar, Toolbar, Typography, InputBase, Badge, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.down("sm")]:{
    display: "flex"
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm:"block" } }}>
          ANYA DEVS
          </Typography>
        <Bedtime sx={{ display: { xs: "block", sm:"none" } }}/>
        <Search><InputBase placeholder='search...'/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{width:30, height:30}} src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/05/Cosplay-demuestra-que-Loid-Forger-el-husbando-de-Spy-x-Family-vive-en-nuestro-mundo.jpg?fit=1280%2C720&quality=80&ssl=1"
          onClick={e=>setOpen(true)}/>
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
        <Avatar sx={{width:30, height:30}} src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/05/Cosplay-demuestra-que-Loid-Forger-el-husbando-de-Spy-x-Family-vive-en-nuestro-mundo.jpg?fit=1280%2C720&quality=80&ssl=1"
        />
        <Typography>Loid</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar