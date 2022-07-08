import React, { useContext, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import logo from "../../assets/logodomuz.png";
import { useNavigate } from "react-router-dom";

import FormLogin from "./FormLogin";
import { Paper, Box, Grid, Typography, Snackbar, Alert } from "@mui/material";

import { AppContext } from "../../context/AppContext";
const axios = require("axios").default;
const bcrypt = require("bcryptjs");

const Login = () => {
  const { setLogin } = useContext(AppContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(username, password)
    axios
      .post("login", {
        person_id: username,
      })
      .then((res) => {
        if (Object.keys(res.data).includes("error")) {
          console.log("Error:", res.data.error);
          setOpen(true);
        } else {
          //Cuando se loguea
          bcrypt.compare(password, res.data.secret, (err, coinciden) => {
            if (err) {
              console.log("Error, Comprobando:", err);
            } else {
              if (coinciden) {
                navigate("app/procesos/inicio");
                setLogin("Usuario identificado. Bienvenido, " + res.data.name + ".");
              } else {
                console.log("Error en contraseña.");
                setOpen(true);
              }
            }
          });
        }
      });
  };

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Grid container component="main" sx={{ height: "10vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2017/12/21/12/08/consulting-3031678_1280.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: "secondary",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            py: 8,
            px: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          bgcolor="background.default"
        >
          <Box
            component="img"
            sx={{
              height: 106,
              weight: 30
            }}
            alt="Domuz"
            src={logo}
          />
          <Typography variant="h5" pb={4} color="info">
            Sistema de Gestión Integral
          </Typography>

          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              variant="filled"
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Datos inválidos. Por favor, intente nuevamente.
            </Alert>
          </Snackbar>
          <Box component="form" onSubmit={handleSubmit}>
            <FormLogin
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
