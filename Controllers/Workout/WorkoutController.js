const express = require("express");
const knex = require("../../db/index");
const { ERROR_MSGS } = require("../../Configs/Constants");

const WorkoutController = {
	getWorkouts: async (req, res) => {
		try {
			const { userid } = req.params;
			console.log(userid);
			if (userid === undefined) {
				res.status(500).json({ message: ERROR_MSGS.INTERNAL_SERVER_ERROR });
				return;
			}

			const data = await knex("workout").select("*").where({ user_id: userid });
			console.log(data);

			if (data.length > 0) {
				res.status(200).json(data);
				return;
			}
			res.status(404).json({ message: ERROR_MSGS.NOT_FOUND });
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: ERROR_MSGS.INTERNAL_SERVER_ERROR });
		}
	},
	putWorkout: async (req, res) => {
		try {
			const { userid } = req.params;
			const { name, day_of_week } = req.body;
			console.log(userid);
			if (userid === undefined) {
				res.status(500).json({ message: ERROR_MSGS.INTERNAL_SERVER_ERROR });
				return;
			}

			const data = await knex("workout")
				.where({ user_id: userid })
				.update({ name: name, day_of_week: day_of_week })
				.returning("*");
			console.log(data);

			if (data.length > 0) {
				res.status(200).json(data);
				return;
			}
			res.status(404).json({ message: ERROR_MSGS.NOT_FOUND });
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: ERROR_MSGS.INTERNAL_SERVER_ERROR });
		}
	},
};

module.exports = WorkoutController;
