var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var crudModel = require("../models/crud");
var apiError = require("../utils/apiErrorMessages");

var userModel = require("../models/userModel");

var config = require("../utils/config");
var isNullOrEmpty = require('is-null-or-empty');



router.post("/create", function (req, res) {

    var Data = new crudModel({


        _id: new mongoose.Types.ObjectId(),
        userName: req.body.userName,
        emailId: req.body.emailId,
        password: req.body.password,
        mobile: req.body.mobile,
        dob: req.body.dob,

        createdBy: req.body.createdBy
    });



    //data validation should add

    crudModel.createTest(Data, function (err, data) {
        if (err) {
            console.log(err);
            res.json({ "status": "Failure", "Message": apiError.creation_failure });
        }

        else {


            console.log(Data);
            res.json({ "status": "Success", "message": "created successfully", "data": Data });

        }
    });
});

router.post("/getAll", function (req, res) {


    var data = { _id: req.body._id };
    crudModel.getAllTest(data, function (err, data) {
        console.log('err' + err);
        console.log('data ' + data);
        if (err) {
            console.log(err);
            res.json({ "status": "failure" });
        }
        else {
            console.log(data);
            res.json({ "status": "success", "data": data });
        }
    });
});



router.post("/update", function (req, res) {

    var myquery = { _id: req.body._id };
    var newvalues = { $set: { emailId: req.body.emailId } };

    userModel.findOne({ _id: req.body.createdBy }, function (err, data) {
        if (err) {
            console.log(err);
            res.json({ "status": "Failure", "Message": apiError.failed_found_admin });
        } else {
            if (data === null) {
                console.log("user not available");
                res.json({ "status": "Failure", "Message": apiError.failed_found_admin });
            } else {

                crudModel.updateTest(myquery, newvalues, function (err, data) {

                    if (err) {
                        console.log(err);
                        res.json({ "status": "Failure", "Message": "Failure" });
                    }
                    else {
                        //console.log('managerates' + managerates._id);

                        res.json({ "status": "success", "message": "successfully updated", "data": data });
                    }
                });

            }
        }
    });
});




router.post("/delete", function (req, res) {


    var myquery = { _id: req.body._id };
    crudModel.deleteOne(myquery, function (err, data) {
        console.log('err' + err);
        //console.log('data '+data);
        if (err) {
            console.log(err);
            res.json({ "status": "failure" });
        }
        else {
            console.log(data);
            res.json({ "status": "success", "message": "successfully deleted" });
        }
    });
});





module.exports = router;