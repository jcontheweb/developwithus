'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ListingSchema extends Schema {
  up () {
    this.create('listings', (table) => {
      table.increments()
      table.integer('profile_id')
      table.string('image').default('default-listing-image.jpg')
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.boolean('paid').default(false)
      table.integer('price_per_hour')
      table.string('services_offered').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('listings')
  }
}

module.exports = ListingSchema
