import { Alert, Button, Grid, Snackbar, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import FormUser from "../../Create/User/FormUser";
import FormPersonal from "../../Create/User/FormPersonal";
import FormRole from "../../Create/User/FormRole";
import { AppContext } from "../../../context/AppContext";
import axios from "axios";
const bcrypt = require("bcryptjs");

const User = () => {

  const { lastObject, setProcesses } = useContext(AppContext)

  //console.log('lastObject',lastObject)
  const [name, setName] = useState(lastObject.name);
  const [lastname, setLastname] = useState(lastObject.lastname);
  const [idPerson, setIdPerson] = useState(lastObject.person_id);
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState(lastObject.mail);
  const [phone, setPhone] = useState(lastObject.phone);

  const [idRole, setIdRole] = useState([]);
  const [startRole, setStartRole] = useState(lastObject.rol)

  /*const [typeUser,setTypeUser] = useState(1)  */

  const handleSubmit = async (e) => {
    e.preventDefault();
    const rondas = 10;
    const secret = await bcrypt.hash(password, rondas)

    const newUser = {
        person_id:idPerson,
        name:name,
        lastname:lastname,
        mail:mail,
        phone:phone,
        id_roles:idRole,
        password:secret
      }
    try {
      axios.post("update/user", newUser).then((res) => {console.log(res)})
      setProcesses([])
      setOpen(true)
      setSeverity("success")
      setValidationMsg(name+' ha sido actualizado exitosamente.')
    } catch (error) {
      setOpen(true)
      setSeverity("error")
      setValidationMsg('Algo ha salido mal.')
    }    
    
  };

  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('error');
  const [validationMsg, setValidationMsg] = useState('');
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          variant="filled"
          onClose={handleClose}
          severity={severity}
          sx={{ width: "100%" }}>
              {validationMsg}
        </Alert>
      </Snackbar>
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
        <FormRole idRole={idRole} setIdRole={setIdRole} startRole={startRole} />
      </Grid>
      <Grid item justify="center" align="right" xs={12}>
        <Button variant="contained" color="secondary" type="submit">
          Actualizar Usuario
        </Button>
      </Grid>
    </Grid>
  );
};

export default User;
