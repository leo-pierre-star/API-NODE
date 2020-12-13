const mongoose = require("mongoose");
const RestoSchema = require("../models/restoModels");

// creation du model resto
const Resto = mongoose.model("Resto", RestoSchema.obj);
//export de la methode d'ajout
exports.addNewResto = (req, res) => {
  const newResto = new Resto(req.body);

  newResto.save((err, resto) => {
    if (err) res.send(err);
    res.json(resto);
    console.log("function addNewResto from restoControllers return:", resto);
  });
};

// exports de la methode de liste
exports.getRestos = (req, res) => {
  Resto.find({}, (err, resto) => {
    if (err) res.send(err);
    res.json(resto);
  });
};

// exports de la methode d'un resto par son id
exports.getRestoById = (req, res) => {
  Resto.findById(req.params.restoId, (err, resto) => {
    if (err) res.send(err);
    res.json(resto);
    console.log(
      "function getRestoById from restoControllers return:",
      resto + " with Id " + req.params.restoId
    );
  });
};

// exports de la methode de modif par son id
exports.updateResto = (req, res) => {
  Resto.findByIdAndUpdate(
    { _id: req.params.restoId },
    req.body,
    { new: true },
    (err, resto) => {
      if (err) res.send(err);
      res.json(resto);
    }
  );
};

// exports de la methode de suppression par son id
// exports.deleteResto = (req, res) => {
//   Resto.remove(
//     { _id: req.params.restoId },
//     (err, resto) => {
//       if (err) res.send(err);
//       res.json(resto);
//       console.log(
//         "suppression reussie"
//       );
//     }
//   );
// };

exports.deleteResto = (req, res) => {
  Resto.deleteOne(
    { _id: req.params.restoId },
    (err, resto) => {
      if (err) res.send(err);
      res.json(resto);
      console.log("suppression reussie");
    }
  );
};
