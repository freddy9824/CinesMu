const sequelize = require('sequelize');
const database = require('../config/database');
const Fact_Sales = require('../models/Fact_Sales');

const controller = {}

// obtener productos más vendidos por día de la semana
controller.getProductos = async function (callback){
    try{
        let productos = await database.query(
            "SELECT COUNT(F.`id_fact`) AS cantidad, O.`nombre_comida` AS nombre, D.`dia` AS dia FROM `fact_sales` AS F" +
            " INNER JOIN `compras_comida` AS C ON F.`id_fact` = C.`id_fact`" +
            " INNER JOIN `comida` AS O ON C.`id_comida` = O.`id_comida`" +
            " INNER JOIN `dias_semana` AS D ON C.`id_dia` = D.`id_dia`" +
            " GROUP BY D.`dia` ORDER BY COUNT(F.`id_fact`) DESC",
            {type: sequelize.QueryTypes.SELECT}
        );
        console.log(productos)
        callback(productos, null);
    }catch (error) {
        callback(null, error);
    }
}

// obtener distribución de ventas de películas por sede 
controller.getVentasPeliculas = async function (callback){
    try{
        let ventasPeliculas = await database.query(
            "SELECT COUNT(F.`id_fact`) AS cantidad, P.`titulo`, S.`estado`, S.`ciudad`, S.`ubicacion`" +
            " FROM `fact_sales` AS F INNER JOIN `ticket` AS T ON F.`id_fact` = T.`id_fact`" +
            " INNER JOIN `funcion` AS U ON T.`id_funcion` = U.`id_funcion`" +
            " INNER JOIN `cartelera` AS C ON U.`id_cartelera` = C.`id_cartelera`" +
            " INNER JOIN `cartelera_pelicula` AS A ON C.`id_cartelera` = A.`id_cartelera`" +
            " INNER JOIN `pelicula` AS P ON A.`id_pelicula` = P.`id_pelicula`" +
            " INNER JOIN `sede` AS S ON C.`id_sede` = S.`id_sede`" +
            " GROUP BY P.`titulo`, S.`estado`, S.`ciudad`, S.`ubicacion`" +
            " ORDER BY COUNT(F.`id_fact`) ASC",
            {type: sequelize.QueryTypes.SELECT}
        );
        console.log(ventasPeliculas)
        callback(ventasPeliculas, null);
    }catch (error) {
        callback(null, error);
    }
}

controller.createFactura = async function (data, callback) {
    console.log(data);
    try {
        let response = await Fact_Sales.create({
            id_sede: data.id_sede,
            id_fact: data.id_fact,
            fecha: data.fecha
        });
        
        callback(null);
    } catch (error) {
        callback(error);
    }
    
}

module.exports = controller;
