const express = require('express');
const router = express.Router();
const mantenimientoController = require('../controllers/mantenimientoController');
const salaController = require('../controllers/salaController');

router.get('/', (req, res) => {
        mantenimientoController.getMantenimientos((mantenimientos, err) => {
            if (err){
                res.json({
                    success: false,
                    msg: 'Fallo'
                });
            }else{
                salaController.getSalas((salas, err) => {
                    if(err){
                        res.json({
                            success: false,
                            msg: 'Fallo buscar modelos'
                        })
                    }else{
                        res.render('mantenimientos', {mantenimientos, salas})
                    }
                })
            }    
        });
});

router.post('/create', (req, res) => {
    console.log(req.body);
    if(req.body){
        mantenimientoController.createMantenimiento(req.body, (err) => {
            if(err){
                res.json({
                   success: false,
                    msg: `Fallo al agregar el mantenimiento`
                })
            console.log(err);
            }else{
                res.redirect('/mantenimiento');
            }
        })
    }
});

router.post('/delete/:id', (req, res) => {
    console.log(req.params.id)
    if(req.params.id){
        mantenimientoController.deleteMantenimiento(req.params.id, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al eliminar el mantenimiento`
                })
            console.log(err);
            }else{
                res.redirect('/mantenimiento');
            }
        })
    }
});

router.get('/ver/sala/:id', (req, res) => {
    console.log(req.params.id)
    if(req.params.id){
        salaController.getSala(req.params.id, (sala, err) => {
            if(err){
                res.json({
                    success: false,
                    msg: 'Fallo al buscar la película'
                })
            }else{
                res.render('salas', {sala}) 
            }
        });
    }
});

module.exports = router; 