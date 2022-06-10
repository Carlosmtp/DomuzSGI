import React, { useContext } from 'react'

import { Grid, Typography, Button, Link, TextField, FormControlLabel, Checkbox, Stack, InputAdornment} from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';
import { AccountCircle, Security } from '@mui/icons-material';

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

    const { setLogin } = useContext(AppContext)

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
        if(username === "admin" && password === "admin"){
          setLogin('Usuario identificado. Bienvenido '+username)
          navigate("app/procesos")
        }      
      }
  

  return (
    <Stack component="form" direction="column" spacing={2} justifyContent="space-between" onSubmit={handleSubmit} sx={{ mt: 1 }}> 
    {/*</Stack><Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>*/}
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={username}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                required
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"                
                value={password}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Security />
                    </InputAdornment>
                  ),
                }}
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
                color='secondary'
              >
                Sign In
              </Button>
              <Grid container>
                  <Link href="#" variant="body2">
                  </Link>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Stack>
  )
}

export default FormLogin
