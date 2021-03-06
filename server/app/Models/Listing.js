'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Listing extends Model {
    profile () {
        return this.belongsTo('App/Models/Profile')
    }
}

module.exports = Listing
