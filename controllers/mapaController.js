const sequelize = require('sequelize');
const database = require('../config/database');
const Mapa_Sala = require('../models/Mapa_Sala');

const controller = {}

controller.getMapas = async function (callback){
    try {
        let mapa_sala = await Mapa_Sala.findAll({
        });
        mapa_sala = mapa_sala.map(result => result.dataValues);
        callback(mapa_sala, null);
    }catch (error) {
        callback(null, error);
    }
}


controller.createMapa = async function (data, callback) {
    console.log(data);
    try {
        let response = await Mapa_Sala.create({
            id_sala: data.id_sala,
            num_fila: data.num_fila,
            num_col: data.num_col,
            cant_entradas: data.cant_entradas,
            cant_salidas: data.cant_salidas
        });

        callback(null);
    } catch (error) {
        callback(error);
    }
}

module.exports = controller; 