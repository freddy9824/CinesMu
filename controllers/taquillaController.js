const sequelize = require('sequelize');
const database = require('../config/database');
const Ticket = require('../models/Ticket');

const controller = {}

controller.getTickets = async function (callback){
    try {
        let tickets = await Ticket.findAll({
        });
        ticktes = tickets.map(result => result.dataValues);
        callback(tickets, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.createTicket = async function (data, callback) {
    console.log(data);
    try {
        let response = await Ticket.create({
            id_funcion: data.id_funcion,
            cant_asientos: data.cant_asientos
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
}

module.exports = controller;