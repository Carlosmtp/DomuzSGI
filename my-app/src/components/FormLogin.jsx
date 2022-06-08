import React from 'react'

import { Box, Grid, Typography, Button, Link, TextField, FormControlLabel, Checkbox} from '@mui/material';
import { useNavigate } from 'react-router-dom'

function Copyright(props) { 
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        <Link color="inherit" href="https://www.domuz.com.co/">
        {'Copyright © '} Domuz {new Date().getFullYear()}
        </Link>{' '}
        
        {'.'}
      </Typography>
    );
  }

const FormLogin = () => {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
  
    let navigate = useNavigate();
     
      const handleInputChange = ({target}) => {
        switch (target.id) {
          case "username":
              setUsername(target.value)
            break;
          case "password":
              setPassword(target.value)
            break;
          default:
            console.log("Necesitas crear el espectivo handleInput")
            break;
        }      
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username, password)
        //TODO buscar la variable global
        if(username == "admin" && password == "admin"){
          navigate("test")
        }      
      }
  

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={username}
                onChange={handleInputChange}
              />
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"                
                value={password}
                onChange={handleInputChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
  )
}

export default FormLogin
