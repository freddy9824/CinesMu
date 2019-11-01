const sequelize = require('sequelize');
const database = require('../config/database');
const Funcion = require('../models/Funcion');

const controller = {}

// todas las funciones
controller.getFunciones = async function (callback){
    try {
        let funciones = await Funcion.findAll({
        });
        funciones = funciones.map(result => result.dataValues);
        callback(funciones, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.createFuncion = async function (data, callback) {
    console.log(data);
    try {
        let response = await Funcion.create({
            id_cartelera: data.id_cartelera,
            id_dia: data.id_dia,
            horario_inicio: data.horario_inicio,
            horario_final: data.horario_final,
            id_sala: data.id_sala
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}

controller.getFuncion = async function (id_funcion, callback){
    try {
        let funcion = await Funcion.findAll({
            where: {
                id_funcion
            }
        });
        
        funcion = funcion.map(result => result.dataValues);
        callback(funcion, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.updateSala = async function (data, id_funcion, callback) {
    try {
        let response = await Funcion.update({
            id_cartelera: data.id_cartelera,
            id_dia: data.id_dia,
            horario_inicio: data.horario_inicio,
            horario_final: data.horario_final,
            id_sala: data.id_sala
        },{
            where:{
                id_funcion
            } 
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}

controller.cambiarFunciones = async function (id_sala, callback) {
    try {
        await database.query(
            "UPDATE `funcion` SET `id_sala` = (SELECT `id_sala` FROM `sala` WHERE `disponible` = 1 LIMIT 1)"+
            "WHERE `id_sala` = "+id_sala+"",
            { type: sequelize.QueryTypes.UPDATE}
        );
        callback(null);
    } catch (error) {
        callback(error);
    }
}


module.exports = controller;