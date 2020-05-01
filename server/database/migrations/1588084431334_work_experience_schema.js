'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WorkExperienceSchema extends Schema {
  up () {
    this.create('work_experiences', (table) => {
      table.increments()
      table.integer('user_id').notNullable()
      table.string('job_title').notNullable()
      table.string('company').notNullable()
      table.string('date_from').notNullable()
      table.string('date_to').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('work_experiences')
  }
}

module.exports = WorkExperienceSchema
