'use strict'

const Education = use('App/Models/Education')
const User = use('App/Models/User')
const Database = use('Database')

class EducationController {
    async create({ request, response, auth }) {
        const user = await auth.getUser()

        if (!user) {
            return response.status(400).json({
                status: "error",
                message: "No user found."
            })
        } else {
            const { degree, school, date_from, date_to } = request.only(['degree', 'school', 'date_from', 'date_to'])
            const educationData = { user_id: user.id, degree, school, date_from, date_to }

            const education = await Education.create(educationData)

            return response.json({
                status: "success",
                data: education
            })
        }
    }

    async delete({ request, response, auth }) {
        const user = await auth.getUser()
        const { id } = request.only(['id'])
        const education = await Education.find(id)

        if (user.id != education.user_id) {
            return response.status(400).json({
                status: "error",
                message: "Unauthorized"
            })
        } else {
            await Database.table("educations").where('id', id).delete()

            return response.json({
                status: "success"
            })
        }
    }

    // async get({ request, response, params }) {
    //     const user = await User.find(params.id)

    //     if (!user) {
    //         return response.status(400).json({
    //             status: "error",
    //             message: "Profile not found."
    //         })
    //     } else {
    //         const WorkExperienceList = await Database.from('work_experiences').where('user_id', user.id).orderBy('date_from', 'desc')

    //         return response.json({
    //             status: "success",
    //             data: WorkExperienceList
    //         })
    //     }
    // }
}

module.exports = EducationController
