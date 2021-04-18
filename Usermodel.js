const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsermodelSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    username: String,
    password: String,
    cpassword: String,
    country : String 

    

})

const UserModel = mongoose.model('UserModel', UsermodelSchema)

module.exports = UserModel;