const sequelize = require('sequelize');
const database = require('../config/database');

const Genero_Pelicula = database.define('Genero_Pelicula', {
    genero: {
        type: sequelize.STRING,
        allowNull: false,
        primaryKey:  true,

        validate: {
            notEmpty: false
        }
    },
    id_pelicula: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Genero_Pelicula;