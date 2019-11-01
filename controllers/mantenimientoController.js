const sequelize = require('sequelize');
const database = require('../config/database');
const Mantenimiento = require('../models/SalaMantenimiento');

const controller = {}

// todos los mant
controller.getMantenimientos = async function (callback){
    try {
        let mantenimientos = await Mantenimiento.findAll({
        });
        mantenimientos = mantenimientos.map(result => result.dataValues);
        console.log(mantenimientos);
        callback(mantenimientos, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.getMantenimiento = async function (id_ms, callback){
    try {
        let ms = await Mantenimiento.findAll({
            where: {
                id_ms
            }
        });

        ms = ms.map(result => result.dataValues);
        callback(ms, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.createMantenimiento = async function (data, callback) {
    console.log(data);
    try {
        let response = await Mantenimiento.create({
            id_sala: data.id_sala,
            horario_inicio: data.horario_inicio,
            horario_fin: data.horario_fin
        });

        callback(null);
    } catch (error) {
        callback(error);
    }
}

controller.updateMantenimiento = async function (data, id_sm, callback) {
    try {
        let response = await Mantenimiento.update({
            id_ms : data.id_ms,
            id_sala : data.id_sala,
            horario_inicio: data.horario_inicio,
            horario_fin: data.horario_fin
        },{
            where:{
                id_ms
            } 
        });

        callback(null);
    } catch (error) {
        callback(error);
    }
}

controller.deleteMantenimiento = async function (id_ms, callback) {
    try {
        let response = await Mantenimiento.destroy({
            where:{
                id_ms
            }
        });

        callback(null);
    } catch (error) {
        callback(error);
    }
}


module.exports = controller; 