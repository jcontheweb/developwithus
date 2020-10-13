'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ListingSchema extends Schema {
  up () {
    this.table('listings', (table) => {
      table.dropColumn('image')
      table.dropColumn('paid')
    })
  }

  down () {
    this.table('listings', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ListingSchema
