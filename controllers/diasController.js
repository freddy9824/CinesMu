const sequelize = require('sequelize');
const database = require('../config/database');
const Dias_Semana = require('../models/Dias_Semana');

const controller = {}

controller.getDias = async function (callback){
    try {
        let dias = await Dias_Semana.findAll({
        });
        dias = dias.map(result => result.dataValues);
        callback(dias, null);
    }catch (error) {
        callback(null, error);
    }
}

module.exports = controller;