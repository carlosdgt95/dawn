'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    for (let i = 0; i <10; i++) {  
      await queryInterface.bulkInsert('redes', [{  
          idUsuario: i,  
          nombre: "nombre"+i,  
          email:"hola@"+i+".com",
          descripcion:"descripcion"+i,
          ip:"193.0.1."+String(i),
          fecha_creacion: new Date()
      }], {});  
   } 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('redes', null, {});  
  }
};
