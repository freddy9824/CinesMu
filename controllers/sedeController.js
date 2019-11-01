const sequelize = require('sequelize');
const database = require('../config/database');
const Sede = require('../models/Sede');

const controller = {}

// todas las sedes
controller.getSedes = async function (callback){
    try {
        let sedes = await Sede.findAll({
        });
        sedes = sedes.map(result => result.dataValues);
        console.log(sedes);
        callback(sedes, null);
    }catch (error) {
        callback(null, error);
    }
}

// crear una sede
controller.createSede = async function (data, callback) {
    console.log(data);
    try {
        let response = await Sede.create({
            estado: data.estado,
            ciudad: data.ciudad,
            ubicacion: data.ubicacion,
            nombre_fiscal: data.nombre_fiscal,
            horario_llegada: data.horario_llegada,
            horario_salida: data.horario_salida,
            cant_salas: data.cant_salas
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}

//borrar una película
controller.deleteSede = async function (id_sede, callback) {
    try {
        let response = await Sede.destroy({
            where:{
                id_sede
            }
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}

controller.getSede = async function (id_sede, callback){
    try {
        let sede = await Sede.findAll({
            where: {
                id_sede
            }
        });
        
        sede = sede.map(result => result.dataValues);
        console.log(sede);
        callback(sede, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.updateSede = async function (data, id_sede, callback) {
    try {
        let response = await Sede.update({
            estado: data.estado,
            ciudad: data.ciudad,
            ubicacion: data.ubicacion,
            nombre_fiscal: data.nombre_fiscal,
            horario_llegada: data.horario_llegada,
            horario_salida: data.horario_salida,
            cant_salas: data.cant_salas
        },{
            where:{
                id_sede
            } 
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}

module.exports = controller;