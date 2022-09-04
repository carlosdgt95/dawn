'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    for (let i = 0; i <10; i++) {  
      await queryInterface.bulkInsert('usuarios', [{  
          idUsuario: i,  
          nombre: "nombreI"+i,
          apellidos: "apellidoI"+i, 
          email:"hola@"+i+".com",
          contraseña:"descripcion"+i,
          celula:"0988888"+String(i),
          fecha_creacion: new Date()
      }], {});  
   } 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});  
  }
};