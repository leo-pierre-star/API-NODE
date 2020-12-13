const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// chargement des routes dans le routeur
const router = require("./src/routes/restoRoutes");

const app = express();
const port = 3000;

// connection mongoose
mongoose.set("useUnifiedTopology", true);
mongoose.connect(
  "mongodb://localhost/RESTO_DB",
  { useNewUrlParser: true },
  () => {
    console.log("connecté a BDD DE RESTO");
  }
);

// body-parser pour traiter les request en JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// on fait passer l'app dans notre module routes
router.routes(app);

app.use(express.static("public"));
app.use(cors())
const message = "Express is running on port " + port;

app.get("/", (req, res) => {
  res.send(message);
});

app.listen(port, () => {
  console.log(message);
});
