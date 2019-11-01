const sequelize = require('sequelize');
const database = require('../config/database');
const Pelicula = require('../models/Pelicula');

const controller = {}

// todas las peliculas
controller.getPeliculas = async function (callback){
    try {
        let peliculas = await Pelicula.findAll({
        });
        peliculas = peliculas.map(result => result.dataValues);
        console.log(peliculas);
        callback(peliculas, null);
    }catch (error) {
        callback(null, error);
    }
}

// crear una película
controller.createPelicula = async function (data, callback) {
    console.log(data);
    try {
        let response = await Pelicula.create({
            titulo: data.titulo,
            fecha_estreno: data.fecha_estreno,
            descripcion: data.descripcion,
            duracion: data.duracion
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}

//borrar una película
controller.deletePelicula = async function (id_pelicula, callback) {
    try {
        let response = await Pelicula.destroy({
            where:{
                id_pelicula
            }
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}

controller.getPelicula = async function (id_pelicula, callback){
    try {
        let pelicula = await Pelicula.findAll({
            where: {
                id_pelicula
            }
        });
        
        pelicula = pelicula.map(result => result.dataValues);
        console.log(pelicula);
        callback(pelicula, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.updatePelicula = async function (data, id_pelicula, callback) {
    try {
        let response = await Pelicula.update({
            titulo: data.titulo,
            fecha_estreno: data.fecha_estreno,
            descripcion: data.descripcion,
            duracion: data.duracion
        },{
            where:{
                id_pelicula
            } 
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}

module.exports = controller;