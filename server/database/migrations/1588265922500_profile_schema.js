'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const Env = use('Env')

class ProfileSchema extends Schema {
  up () {
    this.table('profiles', (table) => {
      table.string('avatar').default(`${Env.get('APP_URL')}/uploads/default.jpg`)
    })
  }

  down () {
    this.table('profiles', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProfileSchema
