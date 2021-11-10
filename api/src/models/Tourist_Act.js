const {
    DataTypes,
    Sequelize
} = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('Tourist_Act', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
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