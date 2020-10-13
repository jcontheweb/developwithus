'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Profile extends Model {
    user() {
        return this.belongsTo('App/Models/User');
    }

    work_experiences() {
        return this.hasMany('App/Models/WorkExperience')
    }

    educations() {
        return this.hasMany('App/Models/Education')
    }

    listings () {
        return this.hasMany('App/Models/Listing')
    }
}

module.exports = Profile
