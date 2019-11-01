const express = require('express');
const router = express.Router();
const mapaController = require('../controllers/mapaController');
const salaController = require('../controllers/salaController');

router.get('/', (req, res) => {
        mapaController.getMapas((mapa_sala, err) => {
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
                        res.render('mapa_sala', {mapa_sala, salas})
                    }
                })
            }    
        });
});

router.post('/create', (req, res) => {
    console.log(req.body);
    if(req.body){
        mapaController.createMapa(req.body, (err) => {
            if(err){
                res.json({
                   success: false,
                    msg: `Fallo al agregar el mantenimiento`
                })
            console.log(err);
            }else{
                res.redirect('/mapas');
            }
        })
    }
});

module.exports = router; 