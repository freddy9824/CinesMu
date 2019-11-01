const express = require('express');
const router = express.Router();
const comidacontroller = require('../controllers/comidacontroller');
const diasController = require('../controllers/diasController');
const comprasController = require('../controllers/comprasController');

router.get('/', (req, res) => {
    comidacontroller.getComida((comida, err) => {
        if (err){
            res.json({
                success: false,
                msg: 'ERROR'
            });
        console.log(err)
        }else{
            diasController.getDias((dias, err) => {
                if (err){
                    res.json({
                        success: false,
                        msg: 'ERROR'
                    });
                console.log(err)
                }else{
                    comprasController.getCompras((compras, err) => {
                        if (err){
                            res.json({
                                success: false,
                                msg: 'ERROR'
                            });
                        console.log(err)
                        }else{
                            res.render('compras_comida', {comida, dias, compras})     
                        }    
                    });     
                }    
            });   
        }    
    });
});

router.post('/create', (req, res) => {
    console.log(req.body);
    if(req.body){
        comprasController.createCompra( req.body, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al crear la película`
                })
            console.log(err);
            }else{
                res.redirect('/compras');
            }
        })
    }
});


module.exports = router;