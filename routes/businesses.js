const express = require('express');
const router = express.Router();
const controller = require('../controllers/businesses');

router.get('/:userId', controller.getUserBusinesses);
router.post('/post', controller.createUserBusiness);

module.exports = router;