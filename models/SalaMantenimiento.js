const sequelize = require('sequelize');
const database = require('../config/database');

const SalaMantenimiento = database.define('mantenimiento_salas', {
    id_ms: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,
        autoIncrement: true,

        validate: {
            notEmpty: false,
            isNumeric: true
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
    horario_inicio: {
        type: sequelize.TIME,
        allowNull: false,

        validate: {
            notEmpty: false,

        }
    },
    horario_fin: {
        type: sequelize.TIME,
        allowNull: false,

        validate: {
            notEmpty: true,

        }
    }

},{
    timestamps: false,
    freezeTableName: true

});

module.exports = SalaMantenimiento; 