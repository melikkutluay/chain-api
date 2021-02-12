const express = require('express');
const router = express.Router();
const connectDB = require('./connectDB')    //veri tabanı bağlantısını tek bir yerde yazıp her yerden çağırıyoruz

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use('/user', require('../routes/user'))


router.use((req, res, next) => {
    const error = new Error('Not Found !')
    error.status = 404;
    next(error)
})

router.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = router;