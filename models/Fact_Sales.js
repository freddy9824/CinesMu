const sequelize = require('sequelize');
const database = require('../config/database');

const Fact_Sales = database.define('Fact_Sales', {
    id_sede: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    id_fact: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    fecha: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Fact_Sales;
