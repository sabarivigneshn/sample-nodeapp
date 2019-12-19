'use strict';
const moment = require('moment')

const userService = require('../services/UserService');

module.exports.createUser = function (req, res) {
    let userData = req.body;
    let responseBody = { data: "", status: 0, error: null }
    //store utc date time format

    // userData.createdAt = '26/01/1990'
    console.log('=========', userData)
    userService.createUser(
        userData, (response) => {
            responseBody.status = 200
            responseBody.data = response
            res.json(responseBody)
        }, error => {
            responseBody.status = 400
            responseBody.error = error
            res.send(responseBody)
        });
}

module.exports.getAllUser = function (req, res) {
    res.send("successsssssssss    one")
}




