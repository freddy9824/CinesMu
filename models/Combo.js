const sequelize = require('sequelize');
const database = require('../config/database');

const Combo = database.define('Combo', {
    id_combo: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,
        autoIncrement: true,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    nombre_combo: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    nombre_combo: {
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

module.exports = Combo;