'use strict'

const User = use('App/Models/User')
const Profile = use('App/Models/Profile')

class AuthenticationController {
    async register({ request, auth, response }) {
        const req = request.only(['username', 'email', 'password'])

        try {
            const userData = { username: req.username, email: req.email, password: req.password }

            const user = await User.create(userData)

            const token = await auth.generate(user)

            const profile = await Profile.create({
                first_name: '',
                surname: '',
                user_id: user.id
            })

            return response.json({
                status: 'success',
                data: token
            })
        } catch (error) {
            return response.status(400).json({
                status: 'error',
                message: error
            })
        }

    }

    async login({ request, auth, response }) {
        const req = request.only(['email', 'password'])

        try {
            const token = await auth.attempt(req.email, req.password)

            return response.json({
                status: 'success',
                data: token
            })
        } catch (error) {
            response.status(400).json({
                status: 'error',
                message: 'Invalid email/password.'
            })
        }

    }

    async me({ auth, response }) {
        const user = await auth.getUser()

        return response.json({
            status: 'success',
            data: user
        })
    }
}

module.exports = AuthenticationController
