'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.create('profiles', (table) => {
      table.increments()
      table.string('first_name').notNullable()
      table.string('surname').notNullable()
      table.string('location')
      table.string('currency').default('USD')
      table.string('gender')
      table.string('dob')
      table.string('languages')
      table.string('bio')
      table.timestamps()
    })
  }

  down () {
    this.drop('profiles')
  }
}

module.exports = ProfileSchema
