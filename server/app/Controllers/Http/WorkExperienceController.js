'use strict'

const WorkExperience = use('App/Models/WorkExperience')
const User = use('App/Models/User')
const Profile = use('App/Models/Profile')
const Database = use('Database')

class WorkExperienceController {
    async create({ request, response, auth }) {
        const user = await auth.getUser()

        if (!user) {
            return response.status(400).json({
                status: "error",
                message: "No user found."
            })
        } else {
            const { job_title, company, date_from, date_to, profile_id } = request.only(['job_title', 'company', 'date_from', 'date_to', 'profile_id'])
            const workExperienceData = { profile_id, job_title, company, date_from, date_to }

            const workExperience = await WorkExperience.create(workExperienceData)

            return response.json({
                status: "success",
                data: workExperience
            })
        }
    }

    // async get({ request, response, params }) {
    //     const user = await User.find(params.id)
    //     const profile = Profile.findBy('user_id', user.id)

    //     if (!user) {
    //         return response.status(400).json({
    //             status: "error",
    //             message: "Profile not found."
    //         })
    //     } else {
    //         const WorkExperienceList = await Database.from('work_experiences').where('profile_id', profile.id).orderBy('date_from', 'desc')

    //         return response.json({
    //             status: "success",
    //             data: WorkExperienceList
    //         })
    //     }
    // }

    async delete({ request, response, auth }) {
        const authUser = await auth.getUser()
        const user = await User.find(authUser.id)
        const profile = await user.profile().fetch()
        const { id } = request.only(['id'])
        const experience = await WorkExperience.find(id)

        if (profile.id != experience.profile_id) {
            return response.status(400).json({
                status: "error",
                message: "Unauthorized"
            })
        } else {
            await Database.table("work_experiences").where('id', id).delete()

            return response.json({
                status: "success"
            })
        }
    }
}

module.exports = WorkExperienceController
