var mongoose = require('mongoose');

var Schema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,

    userName: {
        type: String
    },
    emailId: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    phone:{
        type:String
    },
    dob:{
        type:String
    },
    createdBy: {
        type: String
    },
    modifiedBy: {
        type: String
    },
    createdAt: {
        type: String
    },
    modifiedAt: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    }
},{
    versionKey:false
});

// for saving data in mongodb
//db name users



var crudModel = module.exports = mongoose.model("crud", Schema);

module.exports.createTest = function (testData, callback) {

    testData.save(callback);

}

module.exports.updateTest = function (myquery, newvalues, callback) {

    crudModel.updateOne(myquery, newvalues,callback);

}

module.exports.getAllTest = function (LabData, callback) {

    
	crudModel.findById(LabData, callback);
}

module.exports.deleteTest = function (myquery, callback) {

    crudModel.deleteOne(myquery,callback);

}