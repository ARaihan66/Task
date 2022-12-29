const express = require('express');
const router = express.Router();
const { getData } = require('../Controllers/UserController');



router.route('/post').post(getData)


module.exports = router;