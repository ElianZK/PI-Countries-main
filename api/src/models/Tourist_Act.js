const {
    DataTypes
} = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('Tourist_Act', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
        },
        difficulty: {
            type: DataTypes.STRING,
        },
        duration: {
            type: DataTypes.STRING,
        },
        season: {
            type: DataTypes.STRING,
        },
    },{ timestamps: false }
    );
};