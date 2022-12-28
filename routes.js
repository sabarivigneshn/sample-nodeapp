var express = require ('express');
var router = express.Router();


// asd asdasdasd
// asdasdasd


router.post('/user/create',usercontroller.createUser)
router.get('/user/',usercontroller.getAllUser)


module.exports = router;