const express = require('express');
const router = express.Router();
const funcionController = require('../controllers/funcionController');
const taquillaController = require('../controllers/taquillaController');

router.get('/', (req, res) => {
    funcionController.getFunciones((funciones, err) => {
        if (err){
            res.json({
                success: false,
                msg: 'ERROR'
            });
        }else{
            res.render('taquilla', {funciones})     
        }    
    });
});

router.post('/create', (req, res) => {
    console.log(req.body);
    if(req.body){
        taquillaController.createTicket( req.body, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al crear la película`
                })
            console.log(err);
            }else{
                res.redirect('/taquilla');
            }
        })
    }
});

module.exports = router;