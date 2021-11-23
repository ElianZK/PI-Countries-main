const {
  DataTypes
} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING,
      alluwNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      alluwNull: false,
    },
    flag_image: {
      type: DataTypes.STRING,
      alluwNull: false
    },
    continent: {
      type: DataTypes.STRING,
      alluwNull: false
    },
    capital: {
      type: DataTypes.STRING,
      alluwNull: false
    },
    subregion: {
      type: DataTypes.STRING,
     
    },
    area: {
      type: DataTypes.FLOAT,
      
    },
    population: {
      type: DataTypes.INTEGER,
      
    }
  
  },{timestamps: false}
  );
};