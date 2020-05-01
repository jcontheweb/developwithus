'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterProfileSchema extends Schema {
  up () {
    this.table('profiles', (table) => {
      table.integer('user_id')
    })
  }

  down () {
    this.table('alter_profiles', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterProfileSchema
