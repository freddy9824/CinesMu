const express = require('express');
const router = express.Router();
const genero_peliculaController = require('../controllers/genero_peliculaController');
const peliculaController = require('../controllers/peliculaController');

router.get('/', (req, res) => {
    genero_peliculaController.getGenerosPelicula((generos_pelicula, err) => {
        if (err){
            res.json({
                success: false,
                msg: 'ERROR'
            });
        }else{
            peliculaController.getPeliculas((peliculas, err) => {
                if (err){
                    res.json({
                        success: false,
                        msg: 'ERROR'
                    });
                }else{
                    res.render('genero', {generos_pelicula, peliculas})     
                }    
            });   
        }    
    });
});

router.post('/create', (req, res) => {
    console.log(req.body);
    if(req.body){
        genero_peliculaController.createGeneroPelicula(req.body, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al crear la película`
                })
            console.log(err);
            }else{
                res.redirect('/generos');
            }
        })
    }
});

module.exports = router;