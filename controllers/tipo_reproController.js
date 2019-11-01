const sequelize = require('sequelize');
const database = require('../config/database');
const Tipo_Repro = require('../models/Tipo_Repro');

const controller = {}

// todas las peliculas
controller.getTiposRepro = async function (callback){
    try {
        let tipos_repro = await Tipo_Repro.findAll({
        });
        tipos_repro = tipos_repro.map(result => result.dataValues);
        callback(tipos_repro, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.createTipoRepro = async function (data, callback) {
    console.log(data);
    try {
        let response = await Tipo_Repro.create({
            tipo_repro: data.tipo_repro
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
    
}

module.exports = controller;