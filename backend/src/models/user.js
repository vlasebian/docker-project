const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    preferences: Array,
});

const User = mongoose.model('User', userSchema);

module.exports = User;