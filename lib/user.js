/**
 * Created by gavin on 3/27/17.
 */
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name: String,
	dept: String,
	email: String,
	tel: String,
	username: String,
	id: String,
	password: String
});

var User = mongoose.model('User', userSchema);

exports.createUser = (payload, callback) => {
	var user = new User(payload);

	user.save(function (error) {
		if (error) {
			callback(error);
		}
		callback();
	});
};

exports.findAll = (callback) => {
	User.find({}).exec(callback);
};

exports.empty = (callback) => {
	User.remove({}, (err) => {
		if (err) {
			callback(err);
		} else {
			callback();
		}
	});
};