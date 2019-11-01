const sequelize = require('sequelize');
const database = require('../config/database');

const Cartelera = database.define('Cartelera', {
    id_cartelera: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,
        autoIncrement: true,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    id_sede: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    censura: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: false
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Cartelera;