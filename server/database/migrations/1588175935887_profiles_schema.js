'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfilesSchema extends Schema {
  up () {
    this.table('profiles', (table) => {
      table.dropColumn('work')
      table.dropColumn('education')
    })
  }

  down () {
    this.table('profiles', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProfilesSchema
