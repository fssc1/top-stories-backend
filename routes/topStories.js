var express = require('express');
var router = express.Router();
const { getStories } = require('../controllers/topStories.controller')
/* GET home page. */
router.get('/', getStories);

module.exports = router;
