const sequelize = require('sequelize');
const database = require('../config/database');
const Dias_Funcion = require('../models/Dias_Funcion');

const controller = {}

controller.getDiasFuncion = async function (callback){
    try {
        let dias_funcion = await Dias_Funcion.findAll({
        });
        dias_funcion = dias_funcion.map(result => result.dataValues);
        callback(dias_funcion, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.createDiasFuncion = async function (data, callback) {
    console.log(data);
    try {
        let response = await Dias_Funcion.create({
            id_dia: data.id_dia,
            id_funcion: data.id_funcion
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
    
}


module.exports = controller;