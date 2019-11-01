const sequelize = require('sequelize');
const database = require('../config/database');

const Subtitulo_Pelicula = database.define('Subtitulo_Pelicula', {
    id_cartelera: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:  true,

        validate: {
            notEmpty: false,
            isNumeric: true
        }
    },
    subtitulos: {
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

module.exports = Subtitulo_Pelicula;