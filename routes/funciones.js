const express = require('express');
const router = express.Router();
const funcionController = require('../controllers/funcionController');
const sedeController = require('../controllers/sedeController');
const carteleraController = require('../controllers/carteleraController');
const diasController = require('../controllers/diasController');
const salaController = require('../controllers/salaController');

router.get('/', (req, res) => {
    funcionController.getFunciones((funciones, err) => {
        if (err){
            res.json({
                success: false,
                msg: 'Fallo'
            });
        }else{
            carteleraController.getCarteleras((carteleras, err) => {
                if(err){
                    res.json({
                        success: false,
                        msg: 'Fallo buscar carteleras'
                    })
                }else{
                    diasController.getDias((dias, err) => {
                        if(err){
                            res.json({
                                success: false,
                                msg: 'Fallo buscar sedes'
                            })
                        }else{
                            res.render('funciones', {funciones, carteleras, dias})
                        }
                    })
                }
            })
        }    
    });
});

router.post('/create', (req, res) => {
    console.log(req.body);
    if(req.body){
        funcionController.createFuncion(req.body, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al crear la función`
                })
            console.log(err);
            }else{
                res.redirect('/funciones');
            }
        })
    }
});

router.get('/buscar', (req, res) => {
    console.log(req.body);
    if(req.body){
        salaController.getSalasPorSede(req.body, (SalasPorSede, err) => {
            if(err){
                res.json({
                    success: false,
                    msg: 'Fallo buscar sedes'
                })
            }else{
                res.render('funciones', {SalasPorSede})
            }
        })
    }
});


router.get('/:id', (req, res) => {
    console.log(req.params.id)
    if(req.params.id){
        funcionController.getFuncion(req.params.id, (funcion, err) => {
            if (err){
                res.json({
                    success: false,
                    msg: 'Fallo'
                });
            }else{
                sedeController.getSedes((sedes, err) => {
                    if(err){
                        res.json({
                            success: false,
                            msg: 'Fallo buscar sedes'
                        })
                    }else{
                        diasController.getDias((dias, err) => {
                            if(err){
                                res.json({
                                    success: false,
                                    msg: 'Fallo buscar sedes'
                                })
                            }else{
                                res.render('funciones', {funcion, sedes, dias})
                            }
                        })
                    }
                })
            }    
        });
    }
});

router.post('/update/:id', (req, res) => {
    if(req.params.id){
        funcionController.updateFuncion(req.body, req.params.id, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al modificar la película ${req.params.id}`
                })
            }else{
                res.redirect('/funciones');
            }
        })
    }
});

router.get('/funciones/:id');


module.exports = router;