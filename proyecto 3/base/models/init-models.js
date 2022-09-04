var DataTypes = require("sequelize").DataTypes;
var _redes = require("./redes");
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var redes = _redes(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);

  redes.belongsTo(usuarios, { as: "idUsuario_usuario", foreignKey: "idUsuario"});
  usuarios.hasMany(redes, { as: "redes", foreignKey: "idUsuario"});

  return {
    redes,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
