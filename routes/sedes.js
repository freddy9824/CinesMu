const express = require('express');
const router = express.Router();
const sedeController = require('../controllers/sedeController');

router.get('/', (req, res) => {
    sedeController.getSedes((sedes, err) => {
        if (err){
            res.json({
                success: false,
                msg: 'ERROR'
            });
        }else{
            res.render('sedes', {sedes})     
        }    
    });
});

router.post('/create', (req, res) => {
    console.log(req.body);
    let id_sede = req.body.id_sede;
    if(req.body){
        sedeController.createSede(req.body, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al crear la película`
                })
            console.log(err);
            }else{
                res.redirect('/sedes');
            }
        })
    }
});

router.post('/delete/:id', (req, res) => {
    console.log(req.params.id)
    if(req.params.id){
        sedeController.deleteSede(req.params.id, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al eliminar la película`
                })
            console.log(err);
            }else{
                res.redirect('/sedes');
            }
        })
    }
});

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    if(req.params.id){
        sedeController.getSede(req.params.id, (sede, err) => {
            if(err){
                res.json({
                    success: false,
                    msg: 'Fallo al buscar la película'
                })
            }else{
                res.render('sedes', {sede});
            }
        });
    }
});

router.post('/update/:id', (req, res) => {
    if(req.params.id){
        sedeController.updateSede(req.body, req.params.id, (err) => {
            if(err){
                res.json({
                    success: false,
                    msg: `Fallo al modificar la película ${req.params.id}`
                })
            }else{
                res.redirect('/sedes');
            }
        })
    }
});

router.get('/sedes/:id');

module.exports = router;