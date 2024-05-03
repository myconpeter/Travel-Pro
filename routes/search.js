const express = require("express");
const router = express.Router();

const Ship = require("../models/createShipSchema");
const Plane = require("../models/createPlaneSchema");

router.post('/searchPlane', async (req, res) => {
    const { planeTicket } = req.body;
    try {
        const foundPlane = await Plane.findOne({ client: planeTicket});

        if (!foundPlane) {
            return res.redirect('/planeNotFound');
        }

        return res.render('planeItemFound', { plane: foundPlane });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});


router.post('/searchShip', async (req, res) => {
    const { itemTicket } = req.body;
    console.log(itemTicket)
    console.log(req.body)
    try {
        const foundItem = await Ship.findOne({ client: itemTicket});

        if (!foundItem) {
            return res.redirect('/itemNotFound');
        }

        return res.render('shipFound', { item: foundItem });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});







module.exports = router; 

