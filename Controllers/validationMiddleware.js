const express = require("express");
const jwt = require("jsonwebtoken");
const { ERROR_MSGS, REGEXES } = require("../Configs/Constants");
require("dotenv").config();
const knex = require("../db/index");

const verifyToken = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	if (authHeader !== undefined) {
		if (authHeader.split(" ")[0] === "Bearer") {
			try {
				const token = jwt.verify(
					authHeader.split(" ")[1],
					process.env.JWT_SECRET || "my_secret"
				);
				if (Date.now() < token.exp * 1000) {
					console.log(token);
					next();
				} else {
					res.status(401).json({ error: ERROR_MSGS.UNAUTHORIZED });
				}
			} catch (e) {
				console.log(e.message);
				res.status(401).json({ error: e.message });
			}
		} else {
			res.status(401).json({ error: ERROR_MSGS.UNAUTHORIZED });
		}
	} else {
		res.status(401).json({ error: ERROR_MSGS.UNAUTHORIZED });
	}
};

const validatePostUser = async (req, res, next) => {
	const { email } = req.body;
	const errorMessage = [];
	const isEmailValid = email.match(REGEXES.EMAIL);
	if (!isEmailValid) {
		errorMessage.push(ERROR_MSGS.INVALID_EMAIL);
	}

	const data = await knex.select("*").from("user").where({ email: email });
	if (data.length > 0) {
		errorMessage.push(ERROR_MSGS.EMAIL_IN_USE);
	}

	if (errorMessage.length > 0) {
		res.status(400).json({
			message: ERROR_MSGS.VALIDATION_ERROR,
			error: JSON.stringify(errorMessage),
		});
		return;
	} else {
		next();
		return;
	}
};

const validatePutExercise = async (req, res, next) => {
	const { name, sets, reps, break_time } = req.body;
	const errorMessage = [];
	if (name.length <= 0) {
		errorMessage.push(ERROR_MSGS.INVALID_INPUT);
	}

	if (typeof Number(sets) !== "number") {
		errorMessage.push(ERROR_MSGS.INVALID_INPUT);
	}

	if (typeof Number(reps) !== "number") {
		errorMessage.push(ERROR_MSGS.INVALID_INPUT);
	}

	if (typeof Number(break_time) !== "number") {
		errorMessage.push(ERROR_MSGS.INVALID_INPUT);
	}

	if (errorMessage.length > 0) {
		res.status(400).json({
			message: ERROR_MSGS.VALIDATION_ERROR,
			error: JSON.stringify(errorMessage),
		});
		console.log(errorMessage);
		return;
	} else {
		next();
		return;
	}
};

const validatePutWorkout = async (req, res, next) => {
	const { name, day_of_week } = req.body;
	const errorMessage = [];
	if (name.length <= 0) {
		errorMessage.push(ERROR_MSGS.INVALID_INPUT);
	}

	if (typeof Number(day_of_week) !== "number") {
		errorMessage.push(ERROR_MSGS.INVALID_INPUT);
	}

	if (errorMessage.length > 0) {
		res.status(400).json({
			message: ERROR_MSGS.VALIDATION_ERROR,
			error: JSON.stringify(errorMessage),
		});
		console.log(errorMessage);
		return;
	} else {
		next();
		return;
	}
};

const validatePutUser = async (req, res, next) => {
	const { first_name, last_name, password, height, weight } = req.body;
	const errorMessage = [];
	if (first_name.length <= 0) {
		errorMessage.push(ERROR_MSGS.INVALID_INPUT);
	}

	if (last_name.length <= 0) {
		errorMessage.push(ERROR_MSGS.INVALID_INPUT);
	}

	if (password.length <= 0) {
		errorMessage.push(ERROR_MSGS.INVALID_INPUT);
	}

	if (typeof Number(height) !== "number") {
		errorMessage.push(ERROR_MSGS.INVALID_INPUT);
	}

	if (typeof Number(weight) !== "number") {
		errorMessage.push(ERROR_MSGS.INVALID_INPUT);
	}

	if (errorMessage.length > 0) {
		res.status(400).json({
			message: ERROR_MSGS.VALIDATION_ERROR,
			error: JSON.stringify(errorMessage),
		});
		console.log(errorMessage);
		return;
	} else {
		next();
		return;
	}
};

module.exports = {
	verifyToken,
	validatePostUser,
	validatePutExercise,
	validatePutWorkout,
	validatePutUser,
};
