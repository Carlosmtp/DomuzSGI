import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import FormUser from "./FormUser";
import FormPersonal from "./FormPersonal";
import FormRole from "./FormRole";
//const axios = require('axios').default;
const bcrypt = require("bcryptjs");

const User = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [idPerson, setIdPerson] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  const [idRole, setIdRole] = useState([]);

  /*const [typeUser,setTypeUser] = useState(1)  */

  const handleSubmit = async (e) => {
    e.preventDefault();
    //CONEXIÓN CON LA BD.
    //Encripcion de la contraseña
    const rondas = 10;
    const secret = await bcrypt.hash(password, rondas);
    const newUser = {
      person_id: idPerson,
      name: name,
      lastname: lastname,
      mail: mail,
      phone: phone,
      password: secret,
      id_roles: idRole,
    };
    console.log(newUser);
  };

  return (
    <Grid
      container
      component="form"
      spacing={4}
      pl={{ xs: 0, sm: 3 }}
      pr={{ xs: 0, sm: 3 }}
      onSubmit={handleSubmit}
    >
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" pb={3} color="secondary">
          Datos de Usuario
        </Typography>
        <FormUser
          idPerson={idPerson}
          setIdPerson={setIdPerson}
          password={password}
          setPassword={setPassword}
        />

        <Typography variant="h6" pt={3} pb={3} color="secondary">
          Datos personales
        </Typography>
        <FormPersonal
          name={name}
          setName={setName}
          lastname={lastname}
          setLastname={setLastname}
          mail={mail}
          setMail={setMail}
          phone={phone}
          setPhone={setPhone}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormRole setIdRole={setIdRole} />
      </Grid>
      <Grid item justify="center" align="right" xs={12}>
        <Button variant="contained" color="secondary" type="submit">
          Crear Usuario
        </Button>
      </Grid>
    </Grid>
  );
};

export default User;
