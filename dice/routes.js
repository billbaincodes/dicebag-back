const express = require('express');
const router = express.Router();
const ctrl = require('./ctrl');


router.get('/', ctrl.getBag);


module.exports = router

