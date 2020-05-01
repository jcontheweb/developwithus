'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EducationSchema extends Schema {
  up() {
    this.create('educations', (table) => {
      table.increments()
      table.integer('user_id').notNullable()
      table.string('degree').notNullable()
      table.string('school').notNullable()
      table.string('date_from').notNullable()
      table.string('date_to').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('educations')
  }
}

module.exports = EducationSchema
