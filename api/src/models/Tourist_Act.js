const {
    DataTypes
} = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('Tourist_Act', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            // allowNull: false
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allownull: false
        },
        difficulty: {
            type: DataTypes.STRING,
            allownull: false
        },
        duration: {
            type: DataTypes.STRING,
            allownull: false
        },
        season: {
            type: DataTypes.STRING,
            allownull: false
        },
    });
};