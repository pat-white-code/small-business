const express = require('express');
const router = express.Router();
const controller = require('../controllers/businesses');

router.get('/:userId', controller.getUserBusinesses);

module.exports = router;