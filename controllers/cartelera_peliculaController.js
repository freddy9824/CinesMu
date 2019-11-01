const sequelize = require('sequelize');
const database = require('../config/database');
const Cartelera_Pelicula = require('../models/Cartelera_Pelicula');

const controller = {}

controller.getPeliculasC = async function (callback){
    try {
        let peliculasc = await Cartelera_Pelicula.findAll({
        });
        peliculasc = peliculasc.map(result => result.dataValues);
        callback(peliculasc, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.createPeliculasC = async function (data, callback) {
    console.log(data);
    try {
        let response = await Cartelera_Pelicula.create({
            id_cartelera: data.id_cartelera,
            id_pelicula: data.id_pelicula
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
    
}


module.exports = controller;