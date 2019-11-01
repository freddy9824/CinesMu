const express = require('express');
const router = express.Router();
const peliculaController = require('../controllers/peliculaController');
const genero_peliculaController = require('../controllers/genero_peliculaController');

router.get('/', (req, res) => {
    peliculaController.getPeliculas((peliculas, err) => {
        if (err){
            res.json({
                success: false,
                msg: 'ERROR'
            });
        }else{
            genero_peliculaController.getGenerosPelicula((generos_pelicula, err) => {
                if (err){
                    res.json({
                        success: false,
                        msg: 'ERROR'
                    });
                }else{
                    res.render('pelicula', {peliculas, generos_pelicula})     
                }    
            }); 
        }    
    });
});

router.post('/create', (req, res) => {
    console.log(req.body);
    if(req.body){
        peliculaController.createPelicula( req.body, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al crear la película`
                })
            console.log(err);
            }else{
                res.redirect('/pelicula');
            }
        })
    }
});

router.post('/delete/:id', (req, res) => {
    console.log(req.params.id)
    if(req.params.id){
        peliculaController.deletePelicula(req.params.id, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al eliminar la película`
                })
            console.log(err);
            }else{
                res.redirect('/pelicula');
            }
        })
    }
});

router.get('/edit/:id', (req, res) => {
    console.log(req.params.id)
    if(req.params.id){
        peliculaController.getPelicula(req.params.id, (pelicula, err) => {
            if(err){
                res.json({
                    success: false,
                    msg: 'Fallo al buscar la película'
                })
            }else{
                generoController.getGeneros((generos, err) => {
                    if (err){
                        res.json({
                            success: false,
                            msg: 'ERROR'
                        });
                    }else{
                        res.render('pelicula', {pelicula, generos})     
                    }    
                }); 
            }
        });
    }
});

router.get('/ver/genero/:id', (req, res) => {
    console.log(req.params.id)
    if(req.params.id){
        generoController.getGenero(req.params.id, (genero, err) => {
            if(err){
                res.json({
                    success: false,
                    msg: 'Fallo al buscar la película'
                })
            }else{
                res.render('pelicula', {genero}) 
            }
        });
    }
});

router.post('/update/:id', (req, res) => {
    if(req.params.id){
        peliculaController.updatePelicula(req.body, req.params.id, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al modificar la película ${req.params.id}`
                })
            }else{
                res.redirect('/pelicula');
            }
        })
    }
});

router.get('edit/:id');

module.exports = router;