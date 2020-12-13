// import des methodes du  controlleur
const controllers = require("../controllers/restoControllers");

const routes = (app) => {
  // route initiale des restos
  app
    .route("/restos")
    //get pour lister les restos
    .get((req, res, next) => {
      console.log("method get from " + req.originalUrl);
      next();
    }, controllers.getRestos)
    // post pour creer un resto
    .post(controllers.addNewResto);

  // .post((req, res) => {
  //     res.send("method post success");
  //   });

  // route pour la gestion d'un resto
  app
    .route("/restos/:restoId")
    // retourne un resto par son Id
    .get(controllers.getRestoById)
    //modifier d'un resto
    .put(controllers.updateResto)
    // supprimer un resto
    .delete(controllers.deleteResto)
};



exports.routes = routes;
