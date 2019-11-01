const express = require('express');
const router = express.Router();
const fact_salesController = require('../controllers/fact_salesController');

router.get('/', (req, res) => {
    fact_salesController.getVentasPeliculas((ventasPeliculas, err) => {
        if (err){
            res.json(ventasPeliculas);
        console.log(err)
        }else{
            fact_salesController.getProductos((productos, err) => {
                if (err){
                    res.json(ventasPeliculas);
                console.log(err)
                }else{
                    res.render('reportes', {ventasPeliculas, productos})   
                }    
            });
        }    
    });  
});


module.exports = router;