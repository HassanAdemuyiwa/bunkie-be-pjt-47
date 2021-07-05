const express = require('express');
const router = express.Router();


// User Model
const User = require('../models/user');

const { requireSignin, isAuth } = require('../controller/auth');

const { userById, allUser } = require('../controller/user');

router.get('/secret/:userId', requireSignin, isAuth, (req, res) => { 
    res.json({
        user: req.profile
    })
})

router.get('/alluser',  (req, res) => { 
    res.json({
        users: req.profile
    })
})
 
router.param('userId', userById)
router.param('allUser', allUser)



module.exports = router;