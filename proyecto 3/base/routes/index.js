var express = require('express');
var router = express.Router();
const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
const Redes = require('../models').redes;  
const Usuarios = require('../models').usuarios;  
var models = initModels(sequelize);  
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
