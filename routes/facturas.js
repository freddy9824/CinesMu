const express = require('express');
const router = express.Router();
const fact_salesController = require('../controllers/fact_salesController');
const sedeController = require('../controllers/sedeController');
const comprasController = require('../controllers/comprasController');
const taquillaController = require('../controllers/taquillaController');


router.get('/', (req, res) => {
    sedeController.getSedes((sedes, err) => {
                if(err){
                    res.json({
                        success: false,
                        msg: 'Fallo buscar sedes'
                    })
                }else{
                    comprasController.getCompras((compras, err) => {
                        if(err){
                            res.json({
                                success: false,
                                msg: 'Fallo buscar peliculas'
                            })
                        }else{
                            taquillaController.getTickets((tickets, err) => {
                                if(err){
                                    res.json({
                                        success: false,
                                        msg: 'Fallo buscar peliculas'
                                    })
                                }else{
                                    res.render('facturas', {sedes, compras, tickets})
                                }
                            })
                        }
                    })
                }
            })    
});

router.post('/create', (req, res) => {
    console.log(req.body);
    if(req.body){
        fact_salesController.createFactura(req.body, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al crear la película`
                })
            console.log(err);
            }else{
                res.redirect('/facturas');
            }
        })
    }
});


module.exports = router;