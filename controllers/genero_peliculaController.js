const sequelize = require('sequelize');
const database = require('../config/database');
const Genero_Pelicula = require('../models/Genero_Pelicula');

const controller = {}

// todas las peliculas
controller.getGenerosPelicula = async function (callback){
    try {
        let generos_pelicula = await Genero_Pelicula.findAll({
        });
        generos_pelicula = generos_pelicula.map(result => result.dataValues);
        callback(generos_pelicula, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.createGeneroPelicula = async function (data, callback) {
    console.log(data);
    try {
        let response = await Genero_Pelicula.create({
            genero: data.genero,
            id_pelicula: data.id_pelicula
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
    
}

module.exports = controller;