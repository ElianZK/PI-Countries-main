const {
    DataTypes
} = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
            
        },

        name: {
            type: DataTypes.STRING
        },

        season: {
            type: DataTypes.STRING
        },

        difficulty: {
            type: DataTypes.STRING,
        },

        duration: {
            type: DataTypes.STRING
        },

    }, {
        timestamps: false
    });
};