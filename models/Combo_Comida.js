const sequelize = require('sequelize');
const database = require('../config/database');

const Combo_Comida = database.define('Combo_Comida', {
    id_combo: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    id_comida: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,

        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
},{
    timestamps: false,
    freezeTableName: true

});

module.exports = Combo_Comida;