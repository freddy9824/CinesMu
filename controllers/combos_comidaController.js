const sequelize = require('sequelize');
const database = require('../config/database');
const Combo_Comida = require('../models/Combo_Comida');

const controller = {}

controller.getCombosComida = async function (callback){
    try {
        let combos_comida = await Combo_Comida.findAll({
        });
       combos_comida = combos_comida.map(result => result.dataValues);
        callback(combos_comida, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.createCombosComida = async function (data, callback) {
    console.log(data);
    try {
        let response = await Comida.create({
            id_combo: data.id_combo,
            id_comida: data.id_comida
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}


module.exports = controller;