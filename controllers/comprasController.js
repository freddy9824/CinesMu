const sequelize = require('sequelize');
const database = require('../config/database');
const Compras_Comida = require('../models/Compras_Comida');

const controller = {}

controller.getCompras = async function (callback){
    try {
        let compras = await Compras_Comida.findAll({
        });
        compras = compras.map(result => result.dataValues);
        console.log(compras)
        callback(compras, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.createCompra = async function (data, callback) {
    console.log(data);
    try {
        let response = await Compras_Comida.create({
            id_comida: data.id_comida,
            id_dia: data.id_dia
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
    
}


module.exports = controller;