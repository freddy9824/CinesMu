const sequelize = require('sequelize');
const database = require('../config/database');
const Combo = require('../models/Combo');

const controller = {}

controller.getCombos = async function (callback){
    try {
        let combos = await Combo.findAll({
        });
        combos = combos.map(result => result.dataValues);
        callback(combos, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.createCombo = async function (data, callback) {
    console.log(data);
    try {
        let response = await Comida.create({
            nombre_combo: data.nombre_combo
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}

controller.deleteComida = async function (id_combo, callback) {
    try {
        let response = await Combo.destroy({
            where:{
                id_combo
            }
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}



module.exports = controller;