const express = require('express');
const router = express.Router();
const idioma_peliculaController = require('../controllers/idioma_peliculaController');
const carteleraController = require('../controllers/carteleraController');

router.get('/', (req, res) => {
    idioma_peliculaController.getIdiomasPelicula((idiomas, err) => {
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
                    res.render('idiomas', {idiomas, carteleras})     
                }    
            });   
        }    
    });
});

router.post('/create', (req, res) => {
    console.log(req.body);
    if(req.body){
        idioma_peliculaController.createIdiomasPelicula( req.body, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al crear la película`
                })
            console.log(err);
            }else{
                res.redirect('/idiomas');
            }
        })
    }
});


module.exports = router;