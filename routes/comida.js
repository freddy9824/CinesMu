const express = require('express');
const router = express.Router();
const comidacontroller = require('../controllers/comidacontroller');

router.get('/', (req, res) => {
    comidacontroller.getComida((comida, err) => {
        if (err){
            res.json({
                success: false,
                msg: 'ERROR'
            });
        }else{
            res.render('comida', {comida})     
        }    
    });
});

router.post('/create', (req, res) => {
    console.log(req.body);
    if(req.body){
        comidacontroller.createComida( req.body, (err) => {
            if(err){
                res.json({
                   success: false,
                    msg: `Fallo al agregar la comida`
                })
            console.log(err);
            }else{
                res.redirect('/comida');
            }
        })
    }
});

router.post('/delete/:id', (req, res) => {
    console.log(req.params.id)
    if(req.params.id){
        comidacontroller.deleteComida(req.params.id, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al eliminar la comida`
                })
            console.log(err);
            }else{
                res.redirect('/comida');
            }
        })
    }
});

module.exports = router;