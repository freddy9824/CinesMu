const sequelize = require('sequelize');
const database = require('../config/database');

const Funcion = database.define('Funcion', {
    id_funcion: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,
        autoIncrement: true,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    id_cartelera: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    horario_inicio: {
        type:  sequelize.INTEGER,
        allowNull: false,

        validate: {
            notEmpty: true
        }
    },
    horario_final: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            notEmpty: false
        }
    },
    id_sala: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Funcion;