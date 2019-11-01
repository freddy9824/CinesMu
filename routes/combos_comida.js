const express = require('express');
const router = express.Router();
const combos_comidaController = require('../controllers/combos_comidaController');
const comidacontroller = require('../controllers/comidacontroller');
const comboController = require('../controllers/comboController');

router.get('/', (req, res) => {
    combos_comidaController.getCombosComida((combos_comida, err) => {
        if (err){
            res.json({
                success: false,
                msg: 'ERROR'
            });
        }else{
            comidacontroller.getComida((comida, err) => {
                if (err){
                    res.json({
                        success: false,
                        msg: 'ERROR'
                    });
                console.log(err)
                }else{
                    comboController.getCombos((combos, err) => {
                        if (err){
                            res.json({
                                success: false,
                                msg: 'ERROR'
                            });
                        console.log(err)
                        }else{
                            res.render('combos_comida', {combos_comida, comida, combos})     
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
        combos_comidaController.createCombosComida( req.body, (err) => {
            if(err){
                res.json({
                   success: false,
                    msg: `Fallo al agregar la comida`
                })
            console.log(err);
            }else{
                res.redirect('/combos_comida');
            }
        })
    }
});


module.exports = router;