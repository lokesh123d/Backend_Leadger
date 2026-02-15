const router = require('express').Router();
const accountController = require('../controllers/account.controller.js');
const authMiddleware = require('../middlewares/auth.middleware.js');



/** 
 * POST /api/accounts/
 * - create a new account 
 * - Protected Route 
**/

router.post('/',authMiddleware.authMiddleware,accountController.createAccountController);


module.exports = router