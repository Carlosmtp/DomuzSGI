const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());

// Midle
app.use(express.json()); //Permite a express leer json

//Settings
app.set("appName", "API Domuz");
app.set("port", 6464);

// Routes
app.use(require("./routes/users"));
app.use(require("./routes/roles"));
app.use(require("./routes/companies"));
app.use(require("./routes/projects"))

app.listen(app.get("port"), () => {
  console.log(app.get("appName"));
  console.log("Server Port ", app.get("port"));
});
