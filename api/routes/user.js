const express = require('express');
const router = express.Router();
const User = require('../model/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    try {
        //db = await mongoosedb;
        res.status(200).json({
            message: "Get service is RUNNİNG"
        })
    } catch (error) {
        res.status(500).json({
            message: "Get service is RUNNİNG"
        })
    }
})

router.post('/signup', (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: " This email already exist"
                });
            }
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                }
                const user = new User({
                    _id: mongoose.Types.ObjectId(),
                    email: req.body.email,
                    password: hash
                });
                user
                    .save()
                    .then(result => {
                        console.log(result);
                        res.status(201).json({
                            message: 'Create User'
                        })
                    })
                    .catch(err => {
                        console.log(err);
                        res.json(500).json({
                            message: err
                        })
                    })
            });
        });
});

router.post('/', async (req, res) => {
    try {
        //db = await mongoosedb;
        res.status(200).json(req.body)
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
})

module.exports = router;    