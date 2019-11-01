const sequelize = require('sequelize');
const database = require('../config/database');

const Idioma_Pelicula = database.define('Idioma_Pelicula', {
    id_cartelera: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    idioma: {
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

module.exports = Idioma_Pelicula;