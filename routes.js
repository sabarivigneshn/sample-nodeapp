var express = require ('express');
var router = express.Router();
var usercontroller = require ('./app/controllers/UserController')




router.post('/user/create',usercontroller.createUser)
router.get('/user/',usercontroller.getAllUser)


module.exports = router;