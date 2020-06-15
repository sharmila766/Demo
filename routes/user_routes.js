var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongodb = require('mongodb');
var jwt = require('jsonwebtoken');
var ObjectId = mongodb.ObjectID;
// var app = express();


var userModel = require("../models/crud");

var isNullOrEmpty = require('is-null-or-empty');


var apiError = require("@utils/apiErrorMessages");
var config = require("../utils/config");

var requireLoginPage = require("@auth/SessionValidation_loginpage");







router.post("/createAdmin", function (req, res) {
    // console.log('create admin req :  + req.body.emailId)
    if (!(isNullOrEmpty(req.body) && isNullOrEmpty(req.body.userName) && isNullOrEmpty(req.body.emailId)
        && isNullOrEmpty(req.body.password))) {


        var userData = new userModel({

            _id: new mongoose.Types.ObjectId(),
            // parentOrgId: req.body.parentOrgId,
            // subOrgId: req.body.subOrgId,

            userName: req.body.userName,
            emailId: req.body.emailId,
            password: req.body.password,
            mobile: req.body.mobile,
            dob: req.body.dob,
            userRole: config.admin,

        });

        var query = { emailId: req.body.emailId };

        userModel.findOne(query, function (err, data) {
            if (err) {
                console.log(err);
                res.json({ "status": "Failure", "Message": apiError.create_admin_failure, "error": err });
            } else {
                if (data === null) {


                    res.json({ "status": "Success", "Message": "Admin created successfully", "data": userData });

                } else {
                    console.log(err);
                    res.json({ "status": "Failure", "Message": apiError.unique_mail_id_error });
                }
            }
        });
    } else {
        res.json({ "status": "Failure", "Message": apiError.all_fields_required });
    }


});


router.post("/createUser", function (req, res) {

    var userData = new userModel({

        _id: new mongoose.Types.ObjectId(),
     
        userName: req.body.userName,
        emailId: req.body.emailId,
        password: req.body.password,
        mobile: req.body.mobile,
        dob: req.body.dob,
        userRole: config.user,
        adminId: req.body.adminId

    });
    userModel.findOne({ _id: req.body.adminId }, function (err, data) {

        console.log('admin data ' + data);
        if (err) {
            res.json({ "status": "Failure", "Message": apiError.failed_found_admin });
        } else {

            console.log('User data ' + data);
            if (data === null) {
                //   res.json({ "status": "Failure", "Message": "Invalid login credentilas" });

                res.json({ "status": "Failure", "Message": apiError.failed_found_admin });
            } else {


                userModel.createUser(userData, function (err, userData) {
                    if (err) {
                        console.log(err);
                        res.json({ "status": "Failure", "Message": apiError.unique_mail_id_error });
                    }
                    else {

                        if (userData === null) {
                            console.log(err);

                            res.json({ "status": "Failure", "Message": "failed to found new user" });

                        } else {
                            res.json({ "status": "Success", "Message": "user created successfully", "data": userData });
                        }

                    }
                });

            }


        }

    });
})







router.post("/updateUser", function (req, res) {

    var userData = {
        userId: req.body.userId, userName: req.body.userName, emailId: req.body.emailId,
        password: req.body.password,
    };
    userData.modifiedDate = Date.now();

    userModel.updateUser(userData, function (err, data) {

        if (err) {
            console.log(err);
            res.json({ "status": "failure" });
        }
        else {
            console.log(data);
            if (data === null) {
                res.json({ "status": "failure" });
            } else {
                res.json({ "status": "success" });
            }
        }

    });

});

router.post("/removeUser", function (req, res) {

    var userData = { userId: req.body.userId, modifiedAt: req.body.modifiedAt };
    userData.modifiedDate = Date.now();

    userModel.removeUser(userData, function (err, data) {

        if (err) {
            console.log(err);
            res.json({ "status": "failure" });
        }
        else {
            console.log(data);
            if (data === null) {
                res.json({ "status": "failure" });
            } else {
                res.json({ "status": "success" });
            }
        }

    });

});

router.post("/login", function (req, res) {
    console.log(req.body + " " + req.body.emailId + " " + req.body.password + " " + isNullOrEmpty(req.body)
        + " " + isNullOrEmpty(req.body.emailId) + " " + isNullOrEmpty(req.body.password));
    if (!(isNullOrEmpty(req.body) && isNullOrEmpty(req.body.emailId) && isNullOrEmpty(req.body.password))) {
        //login logic goes here

        userModel.findOne({ emailId: req.body.emailId }, function (err, userData) {

            console.log('User data ' + userData);

            if (userData) {
                userModel.checkUser(req, function (data) {

                    //check whether the user subscription is valid or not


                    if (data === null) {
                        res.json({ "status": "Failure", "Message": apiError.login_details_failure });
                    } else {

                        //console.log('user role ' + data.userRole);
                        var adminId;
                        if (data.userRole == config.admin) {
                            adminId = data._id;
                        } else {
                            adminId = data.adminId;
                        }


                        console.log('data ' + data)

                        res.json({ "status": "Success", "Message": "Success11", "data": data });
                    }
                });
            } else {
                res.json({ "status": "Failure", "Message": apiError.user_not_found });
            }


        });

    } else {
        res.json({ "status": "Failure", "Message": apiError.all_fields_required });
    }


});



module.exports = router;