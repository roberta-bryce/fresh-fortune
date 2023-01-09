/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('fortune').del()
  await knex('fortune').insert([
    { id: 1, fortune: 'You have some good news coming' },
    { id: 2, fortune: 'You have some bad news coming' },
    { id: 3, fortune: 'You have some news coming' },
  ])
}
