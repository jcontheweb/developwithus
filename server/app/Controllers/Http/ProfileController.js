'use strict'

const Profile = use('App/Models/Profile')
const WorkExperience = use('App/Models/WorkExperience')
const Database = use('Database')
const Helpers = use('Helpers')
const crypto = require('crypto')

class ProfileController {
    async update({ response, request, auth }) {
        const data = request.except(['work', 'education', 'user_id', 'id', 'created_at', 'updated_at'])

        const user = await auth.getUser()
        const UserProfile = await Profile.findBy('user_id', user.id)

        if (!UserProfile) {
            return response.status(400).json({
                status: "error",
                message: `No profile associated with user_id: ${user.id}`
            })
        } else {
            UserProfile.merge({ ...data })
            await UserProfile.save()

            return response.json({
                status: "success",
                data: UserProfile
            })
        }
    }

    async get({ response, params }) {
        const user_id = params.id
        let UserProfile = await Profile.findBy('user_id', user_id)

        if (!UserProfile) {
            return response.status(400).json({
                status: "error",
                message: `No profile associated with user_id: ${user_id}`
            })
        } else {
            const data = UserProfile
            data.work = await UserProfile.work_experiences().orderBy('date_from', 'desc').fetch()
            data.education = await UserProfile.educations().orderBy('date_from', 'desc').fetch()

            return response.json({
                data
            })
        }
    }

    async avatar({ request, response, auth }) {
        const user = await auth.getUser()
        const UserProfile = await Profile.findBy('user_id', user.id)

        const profilePic = request.file('avatar', {
            types: ['image'],
            size: '2mb'
        })

        const id = crypto.randomBytes(16).toString("hex")
        const fileType = profilePic.subtype
        const url = `${id}.${fileType}`

        await profilePic.move(`${Helpers.publicPath()}/uploads`, {
            name: url,
            overwrite: true
        })

        // if (!profilePic.moved()) {
        //     return profilePic.error()
        // }
        if (profilePic.moved()) {
            UserProfile.avatar = url
            await UserProfile.save()
        }

        return response.json({
            status: "success",
            message: UserProfile
        })
    }
}

module.exports = ProfileController
