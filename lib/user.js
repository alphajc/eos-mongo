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


exports.createUser = (payload, callback) => {
	var user = new userSchema(payload);

	user.save(function (error) {
		if (error) {
			callback(error);
		}
		callback();
	});
};

exports.findAll = (callback) => {
	userSchema.find({}).exec(callback);
};

exports.empty = (callback) => {
	userSchema.remove({}, (err) => {
		if (err) {
			callback(err);
		} else {
			callback();
		}
	});
};