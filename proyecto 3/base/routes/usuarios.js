var express = require('express');
var router = express.Router();
const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);  
/* GET home page. */
router.get('/usuarios', function(req, res, next) {
    models.usuarios.findAll({
        include: [{ 
           model:  models.redes,
           as: 'redes'
        }],
     })
    .then(usuarios => {
       res.json(usuarios)
    })
    .catch(error => res.status(400).send(error))
   
 
 });
 router.get('/usuarios/:id', function(req, res, next) {
   let ids=parseInt(req.params.id)
   models.usuarios.findOne({
      where:{
         idUsuario:ids
      }
    })
   .then(usuarios => {
      res.json(usuarios)
   })
   .catch(error => res.status(400).send(error))
  

});
router.post('/',function(req,res,next){
   
   res.json({nombre: req.body.nombre.toUpperCase()})   

})

module.exports = router;