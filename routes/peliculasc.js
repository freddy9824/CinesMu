const express = require('express');
const router = express.Router();
const cartelera_peliculaController = require('../controllers/cartelera_peliculaController');
const carteleraController = require('../controllers/carteleraController');
const peliculaController = require('../controllers/peliculaController');

router.get('/', (req, res) => {
    cartelera_peliculaController.getPeliculasC((peliculasc, err) => {
        if (err){
            res.json({
                success: false,
                msg: 'ERROR'
            });
        console.log(err)
        }else{
            carteleraController.getCarteleras((carteleras, err) => {
                if (err){
                    res.json({
                        success: false,
                        msg: 'ERROR'
                    });
                console.log(err)
                }else{
                    peliculaController.getPeliculas((peliculas, err) => {
                        if (err){
                            res.json({
                                success: false,
                                msg: 'ERROR'
                            });
                        console.log(err)
                        }else{
                            res.render('peliculas_cartelera', {peliculasc, carteleras, peliculas})     
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
        cartelera_peliculaController.createPeliculasC( req.body, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al crear la película`
                })
            console.log(err);
            }else{
                res.redirect('/peliculasc');
            }
        })
    }
});


module.exports = router;