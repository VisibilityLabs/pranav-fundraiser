const express = require('express');
const Joi = require('joi');
const router = express.Router();
const User = require('../models/user');
const Fundraiser = require('../models/Fundraiser');
const Donation = require('../models/Donation');


router.get('fundraiser/:id', (req, res, next) => {
    try {
        const { page, limit, id } = req.query;
        const offset = (page - 1) * limit;
        const donation = Donation.find({
            fundraiserId: id
        }).skip(offset).limit(limit).populate('userId');
        return res.status(200).json({ donation });
    } catch(err) {
        next(err);
    }
});

router.get('/user/:id', (req,res, next)=> {
    try{
        const { page, limit, id } = req.query;
        const offset = (page - 1) * limit;
        const donation = Donation.find({
            userId: id
        }).skip(offset).limit(limit);
        return res.status(200).json({ donation });
    } catch(err) {
        next(err);
    }
});



module.exports = router;
