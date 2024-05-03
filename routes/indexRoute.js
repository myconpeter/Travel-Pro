const express = require("express");
const router = express.Router();


router.get('/', (req, res)=>{
    res.render('index')
});


router.get('/about', (req, res)=>{
    res.render('about')
});

router.get('/contact', (req, res)=>{
    res.render('contact')
});

router.get('/services', (req, res)=>{
    res.render('services')
});

router.get('/shipment', (req, res)=>{
    res.render('shipment')
});

router.get('/404', (req, res)=>{
    res.render('404')
});

router.get('/itemNotFound', (req, res)=>{
    res.render('itemNotFound')
});


router.get('/planeNotFound', (req, res)=>{
    res.render('planeNotFound')
});
router.get('/shipFound', (req, res)=>{
    res.render('shipFound')
});








    
    
    
module.exports = router; 