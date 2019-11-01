const sequelize = require('sequelize');
const database = require('../config/database');
const Subtitulo_Pelicula = require('../models/Subtitulo_Pelicula');

const controller = {}

controller.getSubtitulos = async function (callback){
    try {
        let subtitulos = await Subtitulo_Pelicula.findAll({
        });
        subtitulos = subtitulos.map(result => result.dataValues);
        callback(subtitulos, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.createSubtitulos = async function (data, callback) {
    console.log(data);
    try {
        let response = await Subtitulo_Pelicula.create({
            id_cartelera: data.id_cartelera,
            subtitulos: data.subtitulos
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
    
}


module.exports = controller;