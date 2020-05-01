'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class WorkExperience extends Model {
    profile () {
        return this.belongsTo('App/Models/Profile');
    }
}

module.exports = WorkExperience
