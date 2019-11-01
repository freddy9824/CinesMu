const sequelize = require('sequelize');
const database = require('../config/database');

const Comida = database.define('Comida', {
    id_comida: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,
        autoIncrement: true,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    id_categoria: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    nombre_comida: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: true
        }
    },

},{
    timestamps: false,
    freezeTableName: true

});

module.exports = Comida;