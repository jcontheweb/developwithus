'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WorkExperiencesSchema extends Schema {
  up () {
    this.table('work_experiences', (table) => {
      table.dropColumn('user_id')
      table.integer('profile_id')
    })
  }

  down () {
    this.table('work_experiences', (table) => {
      // reverse alternations
    })
  }
}

module.exports = WorkExperiencesSchema
