var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');



var userSchema = mongoose.Schema({

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

    adminId: {
        type: String
    },
    phone:{
        type:String
    },
    dob:{
        type:String
    },
    userRole: {
        type: String,

    },
    createdAt:
    {
        type: Date, default: Date.now
    },
    modifiedAt: {
        type: Date, default: Date.now
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

var userModel = module.exports = mongoose.model("Users", userSchema);

module.exports.createUser = function (userData, callback) {

    bcrypt.hash(userData.password, 10, function (err, hash) {
        userData.password = hash; //bcrypt for password encryption.
        userData.save(callback);

    });

}

module.exports.updateUser = function (userData, callback) {

    userModel.findByIdAndUpdate({ _id: userData.userId }, {
        $set: {
            userName: userData.userName, emailId: userData.emailId, password: userData.password,
           
        }
    }, callback);

}


module.exports.checkUser = function (req, callback) {

    // userModel.findByIdAndUpdate({ _id: userData.userId }, {
    //     $set: {
    //         userName: userData.userName, emailId: userData.emailId, password: userData.password,
    //         organizationName: userData.organizationName, subscriptionId: userData.subscriptionId
    //     }
    // }, callback);


    var query = { emailId: req.body.emailId };
    userModel.findOne(query).then((data) => {
        if (data) {
            console.log('hashed password '+req.body.password+" "+data.password)
            bcrypt.compare(req.body.password, data.password, function (err, res) {
                console.log('bcrypt compare '+res);
                if (res) {
                    data.password="";
                    console.log('bcrypt compare '+data);
                  //  delete data["password"];
                    callback(data);
                } else {
                    callback();
                }
            });
        } else {
            callback();
        }
    });


}

module.exports.removeUser = function (userData, callback) {
console.log('remove user id '+userData._id)
    userModel.deleteMany({ _id: userData._id }, {
        $set: {
            isActive: false,
            modifiedAt: userData.modifiedAt, modifiedDate: userData.modifiedDate
        }
    }, callback);

}

//based on the query it will retrieve all the users like supervisor,sub admin,executives and ship enginneers
module.exports.getAllUsers = function (query, callback) {


    userModel.find(query, callback);

}

// module.exports.updateUserOrgId = function (userData, callback) {

//     userModel.findByIdAndUpdate({ _id: userData._id }, {
//         $set: {
           
//             organizationId: userData.organizationId
//         }
//     }, callback);

// }
