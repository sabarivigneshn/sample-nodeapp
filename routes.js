var express = require ('express');
var router = express.Router();


// asd


router.post('/user/create',usercontroller.createUser)
router.get('/user/',usercontroller.getAllUser)


module.exports = router;