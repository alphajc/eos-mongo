"use strict";
var mongoose = require("mongoose");
var assert = require("assert-plus");

exports.createConnection = (config, callback) => {
	assert.object(config, "config");
	var userInfo = "";
	var host = "localhost";
	var port = "";
	var database = "";
	if (config.username || config.password) {
		if (config.username && config.password) {
			userInfo = config.username + ":" + config.password + "@";
		} else {
			callback(new Error("用户名与密码没有同时设置。"));
		}
	}
	if (config.host) {
		host = config.host;
	}
	if (config.port) {
		port = ":" + config.port;
	}
	if (config.database) {
		database = "/" + config.database;
	}
	mongoose.connect("mongodb://" + userInfo + host + port + database);

	process.on("SIGINT", function () {
		mongoose.connection.close(function () {
			console.log("由于程序中断Mongoose断开连接");
			process.exit(0);
		});
	});

	callback();
};

exports.disconnect = (callback) =>  {
	mongoose.connection.close(function (error) {
		if (error) {
			return callback(error);
		}
		callback();
	});
};

exports.user = require("./lib/user");