const sequelize = require('sequelize');
const database = require('../config/database');

const Sede = database.define('Sede', {
    id_sede: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,
        autoIncrement: true,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    estado: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: true
        }
    },
    ciudad: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: true
        }
    },
    ubicacion: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: true
        }
    },
    nombre_fiscal: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: true
        }
    },
    horario_llegada: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: true
        }
    },
    horario_salida: {
        type:  sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: true
        }
    },
    cant_salas: {
        type:  sequelize.INTEGER,
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

module.exports = Sede;