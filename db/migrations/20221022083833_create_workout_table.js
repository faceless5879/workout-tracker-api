/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("workout", function (table) {
		table.increments("id").unsigned().primary();
		table.string("name", 255);
		table.integer("day_of_week", 7);
		table.integer("user_id").unique().references("id").inTable("user");
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("workout");
};
