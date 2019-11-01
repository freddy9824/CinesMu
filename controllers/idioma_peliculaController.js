const sequelize = require('sequelize');
const database = require('../config/database');
const Idioma_Pelicula = require('../models/Idioma_Pelicula');

const controller = {}

controller.getIdiomasPelicula = async function (callback){
    try {
        let idiomas = await Idioma_Pelicula.findAll({
        });
        idiomas = idiomas.map(result => result.dataValues);
        console.log(idiomas);
        callback(idiomas, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.createIdiomasPelicula = async function (data, callback) {
    console.log(data);
    try {
        let response = await Idioma_Pelicula.create({
            id_cartelera: data.id_cartelera,
            idioma: data.idioma
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
    
}


module.exports = controller;