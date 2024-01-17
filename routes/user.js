const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
  const userList = await User.find().select('-passwordHash');

  if (!userList) {
    res.status(500).json({ success: false });
  }
  res.send(userList);
});

router.get('/:id', async (req, res) => {
  console.log(req.auth);
  const validation = Joi.object({
    id: Joi.string().required(),
  });
  const { error } = validation.validate(req.params);
  if (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }

  const user = await User.findById(req.params.id).select('-passwordHash');

  if (!user) {
    res.status(500).json({
      success: false,
      message: 'The user with the given ID not exists',
    });
  }
  res.status(200).send(user);
});

router.post('/register', async (req, res) => {
  //   console.log(req.auth);
  const validation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    phone: Joi.string().required(),
    isAdmin: Joi.boolean(),
    zip: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
  });
  const { error } = validation.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
    phone: req.body.phone,
    isAdmin: req.body.isAdmin,
    zip: req.body.zip,
    city: req.body.city,
    country: req.body.country,
  });

  user = await user.save();

  if (!user) return res.status(404).send('User cannot be created');
  res.send(user);
});

router.delete('/:id', (req, res) => {
  const validation = Joi.object({
    id: Joi.string().required(),
  });
  const { error } = validation.validate(req.params);
  if (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
  User.findByIdAndRemove(req.params.id)
    .then(user => {
      if (user) {
        return res
          .status(200)
          .json({ success: true, message: 'User deleted successfully' });
      } else {
        return res
          .status(404)
          .json({ success: false, message: 'User cannot find' });
      }
    })
    .catch(err => {
      return res.status(400).json({ success: false, error: err });
    });
});

router.post('/login', async (req, res, next) => {
  try {
    const validation = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(5).required(),
    });

    const { error } = validation.validate(req.body);

    if (error) {
      res.status(400).json({
        success: false,
        message: error,
      });
    }

    const user = await User.findOne({ email: req.body.email });
    const secret = process.env.secret || 'asdasdjklans';

    if (!user) {
      return res.status(400).send('User with given Email not found');
    }

    if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
      const token = jwt.sign(
        {
          userID: user.id,
          isAdmin: user.isAdmin,
        },
        secret,
        { expiresIn: '1d' },
      );
      res.status(200).send({ user: user.email, token: token });
    } else {
      res.status(400).send('Password is mismatch');
    }
  } catch (err) {
    next(err);
  }
});

router.get('/get/count', async (req, res) => {
  const userCount = await User.countDocuments(count => count);
  if (!userCount) {
    res.status(500), json({ success: false });
  }
  res.status(200).send({
    userCount: userCount,
  });
});

router.post('/forgetpassword', async (req, res) => {
  const validation = Joi.object({
    email: Joi.string().email().required(),
  });

  const { error } = validation.validate(req.body);

  if (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }

  const user = User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).send('User with given Email not found');
  }

  // Send the link for reset password

  return res.status(200).send('Email sent successfully');
});

router.post('/resetpassword', async (req, res) => {
  const validation = Joi.object({
    id: Joi.string().required(),
    newPassword: Joi.string().min(5).required(),
  });

  const { error } = validation.validate(req.body);

  if (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }

  const user = user.findOne({ _id: req.body.id });

  if (!user) {
    return res.status(400).send('User with given Email not found');
  }

  const updateUser = await User.findByIdAndUpdate(
    req.body.id,
    {
      passwordHash: bcrypt.hashSync(req.body.newPassword, 10),
    },
    { new: true },
  );

  if (!updateUser) {
    return res.status(400).send('Password cannot be updated');
  }

  return res.status(200).send(updateUser);
});

module.exports = router;
