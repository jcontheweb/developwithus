'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ListingSchema extends Schema {
  up () {
    this.table('listings', (table) => {
      table.string('languages')
      table.string('location')
    })
  }

  down () {
    this.table('listings', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ListingSchema
