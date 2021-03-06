const express = require('express');
const router = express.Router();

const api_controller = require('../controllers/api_controller');

router.get('/', api_controller.index);
// router.get('/:userId', api_controller.user);
router.post('/create', api_controller.createUser);
router.post('/userInfo', api_controller.getUser);

module.exports = router;
