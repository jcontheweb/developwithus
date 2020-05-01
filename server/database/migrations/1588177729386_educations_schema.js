'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EducationsSchema extends Schema {
  up () {
    this.table('educations', (table) => {
      table.dropColumn('user_id')
      table.integer('profile_id')
    })
  }

  down () {
    this.table('educations', (table) => {
      // reverse alternations
    })
  }
}

module.exports = EducationsSchema
