const sequelize = require('sequelize');
const database = require('../config/database');

const Dias_Semana = database.define('Dias_Semana', {
    id_dia: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,
        autoIncrement: true,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    dia: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: true
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Dias_Semana;