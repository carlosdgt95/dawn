var express = require('express');
var router = express.Router();
const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);  
/* GET home page. 
router.get('/redes', function(req, res, next) {
    models.redes.findAll({
        include: [{ 
           model:  models.usuarios,
           as: 'idUsuario_usuario'
        }],
     })
    .then(redes => {
       res.json(redes)
    })
    .catch(error => res.status(400).send(error))
   
 
 });*/
 router.get('/redes/:idUsuario', function(req, res, next) {
   
   let ids=parseInt(req.params.models.usuarios.idUsuario);
   console.log(ids)
   models.redes.findOne({
      where:{idUsuario:ids
      }
    })
   .then(redes => {
      res.json(redes)
   })
   .catch(error => res.status(400).send(error))
  

});

module.exports = router;