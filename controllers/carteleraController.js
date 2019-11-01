const sequelize = require('sequelize');
const database = require('../config/database');
const Cartelera = require('../models/Cartelera');

const controller = {}

// todas las peliculas
controller.getPeliculasPorSede = async function (callback){
    try {
        let PeliculasPorSede = await database.query(
            "SELECT P.`titulo`, C.`id_cartelera` FROM `cartelera` AS C" +
            " INNER JOIN `pelicula` AS P ON C.`id_pelicula` = P.`id_pelicula`",
            {type: sequelize.QueryTypes.SELECT}
        );
        console.log(carteleras);
        callback(carteleras, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.getCarteleras = async function (callback){
    try {
        let carteleras = await Cartelera.findAll({
        });
        carteleras = carteleras.map(result => result.dataValues);
        callback(carteleras, null);
    }catch (error) {
        callback(null, error);
    }
} 

controller.createCartelera = async function (data, callback) {
    console.log(data);
    try {
        let response = await Cartelera.create({
            id_sede: data.id_sede,
            censura: data.censura
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}

module.exports = controller;