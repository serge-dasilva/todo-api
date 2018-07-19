const mongoose = require('mongoose');
const validator = require('validator'); 
var Schema = mongoose.Schema

var userSchema = new Schema ({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not an email'
        }
    },
    password: {
        type: String,
        require: true,
        minlenght: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

var User = mongoose.model('User', userSchema);

module.exports = {
    User
};