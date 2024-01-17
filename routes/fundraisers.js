const express = require('express');
const Joi = require('joi');
const router = express.Router();
const User = require('../models/user');
const Fundraiser = require('../models/Fundraiser');

router.get('/fundraisers', async (req, res, next) => {
  try {
    const fundraiserList = await Fundraiser.find();
    if (!fundraiserList) {
      res.status(500).json({ success: false });
    }
    res.send(fundraiserList);
  } catch (error) {
    next(error);
  }
});

router.post('/fundraisers', async (req, res, next) => {
  try {
    const validation = Joi.object({
      name: Joi.string().required(),
      priceTarget: Joi.number().required(),
      description: Joi.string().required(),
      userId: Joi.string().required(),
      donationProgress: Joi.number(),
      QnAObject: Joi.array(),
    });
    const { error } = validation.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    let fundraiser = new Fundraiser({
      name: req.body.name,
      priceTarget: req.body.priceTarget,
      description: req.body.description,
      userId: req.body.userId,
      donationProgress: req.body.donationProgress,
      QnAObject: req.body.QnAObject,
    });
    fundraiser = await fundraiser.save();
    if (!fundraiser) {
      return res.status(404).send('The fundraiser cannot be created');
    }
    res.send(fundraiser);
  } catch (error) {
    next(error);
  }
});
