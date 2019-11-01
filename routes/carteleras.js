const express = require('express');
const router = express.Router();
const carteleraController = require('../controllers/carteleraController');
const sedeController = require('../controllers/sedeController');
const idioma_peliculaController = require('../controllers/idioma_peliculaController');
const peliculaController = require('../controllers/peliculaController');
const subtitulo_peliculaController = require('../controllers/subtitulo_peliculaController');

router.get('/', (req, res) => {
    carteleraController.getCarteleras((carteleras, err) => {
        if (err){
            res.json({
                success: false,
                msg: 'ERROR'
            });
        }else{
            sedeController.getSedes((sedes, err) => {
                if(err){
                    res.json({
                        success: false,
                        msg: 'Fallo buscar sedes'
                    })
                }else{
                    peliculaController.getPeliculas((peliculas, err) => {
                        if(err){
                            res.json({
                                success: false,
                                msg: 'Fallo buscar peliculas'
                            })
                        }else{
                            res.render('carteleras', {carteleras, sedes, peliculas})
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
        carteleraController.createCartelera(req.body, (err) => {
            if(err){
                console.log(err);
                res.json({
                    success: false,
                    msg: `Fallo al crear cartelera`
                })
            console.log(err);
            }else{
                idioma_peliculaController.createIdiomaPelicula(req.body, (err) => {
                    if(err){
                        res.json({
                            success: false,
                            msg: `Fallo al crear idioma`
                        })
                    console.log(err);
                    }else{
                        subtitulo_peliculaController.createSubtituloPelicula(req.body, (err) => {
                            if(err){
                                res.json({
                                    success: false,
                                    msg: `Fallo al crear subtitulo`
                                })
                            console.log(err);
                            }else{
                                res.redirect('/carteleras');
                            }
                        })
                    }
                })
            }
        })
    }
});

module.exports = router;