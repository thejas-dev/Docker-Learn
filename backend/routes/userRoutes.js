const router = require('express').Router();
const {getMessage,generateToken} = require('../controllers/userControllers');


router.get('/hello',getMessage);
router.get('/generateToken',generateToken);

module.exports = router;