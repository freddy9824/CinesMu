const express = require('express');
const router = express.Router();
const subtitulo_peliculaController = require('../controllers/subtitulo_peliculaController');
const carteleraController = require('../controllers/carteleraController');

router.get('/', (req, res) => {
    subtitulo_peliculaController.getSubtitulos((subtitulos, err) => {
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
                    res.render('subtitulos', {carteleras, subtitulos})     
                }    
            });   
        }    
    });
});

router.post('/create', (req, res) => {
    console.log(req.body);
    if(req.body){
        subtitulo_peliculaController.createSubtitulos( req.body, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al crear la película`
                })
            console.log(err);
            }else{
                res.redirect('/subtitulos');
            }
        })
    }
});


module.exports = router;