const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('Country', {
    id:{
      type:DataTypes.TEXT,
      alluwNull:false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      alluwNull: false,
    },
    flag_image:{
      type:DataTypes.STRING,
      alluwNull: false
    },
    continent:{
      type:DataTypes.STRING,
      alluwNull: false
    },
    capital:{
      type:DataTypes.STRING,
      alluwNull: false
    },
    subregion:{
      type:DataTypes.STRING,
      alluwNull: false
    },
    area:{
      type:DataTypes.STRING,
      alluwNull: false
    },
    population:{
      type:DataTypes.STRING,
      alluwNull: false
    }
  });
}; 
 
