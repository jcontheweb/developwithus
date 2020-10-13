'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.table('profiles', (table) => {
      table.string('last_active')
    })
  }

  down () {
    this.table('profiles', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProfileSchema
