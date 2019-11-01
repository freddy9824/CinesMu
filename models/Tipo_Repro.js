const sequelize = require('sequelize');
const database = require('../config/database');

const Tipo_Repro = database.define('Tipo_Repro', {
    id_sala: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    tipo_repro: {
        type: sequelize.STRING,
        allowNull: false,
        primaryKey:  true,

        validate: {
            notEmpty: false
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Tipo_Repro;