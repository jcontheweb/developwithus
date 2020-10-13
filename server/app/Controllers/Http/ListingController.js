'use strict'

const Listing = use('App/Models/Listing')
const Profile = use('App/Models/Profile')
const User = use('App/Models/User')

const mock = [
    {
        id: 1,
        title: 'Profesional de RRHH | Ex-Apple | Creador @ Mentory',
        slug: 'Profesional-de-RRHH-or-Ex-Apple-or-Creador-@-Mentory',
        description: `
            Durante la última década me he dedicado al mundo de los RRHH, habiendo pasado por empresas multinacionales tales como Apple, donde he podido desarrollar mis capacidades de coaching y liderazgo. 

            Si estás buscando ayuda para diseñar un CV ganador, superar tu siguiente entrevista u optimizar tu perfil LinkedIn, estaré encantado de ayudarte.
            
            Contáctame y reserva tu sesión gratuita.
        `,
    },
    {
        id: 2,
        title: 'this is a test title 12 3123',
        slug: 'this-is-a-test-title-12-3123',
        description: `
            test description
        `,
    },
]

class ListingController {
    async index({ response }) {
        return response.json({
            status: "success",
            data: await Listing.all()
        })
    }

    async create({ request, response, auth }) {
        // return await Listing.truncate()

        const { id } = await auth.getUser()
        const user = await User.find(id)
        const profile = await user.profile().fetch()

        const { image, title, description, paid, price_per_hour, services_offered } = request.all()

        let listing = await Listing.create({
            profile_id: profile.id,
            location: profile.location,
            languages: profile.languages,
            image, title, description, paid, price_per_hour, services_offered
        })

        return response.json({
            status: "success",
            data: listing
        })
    }

    async find({ request, response, params }) {
        const listing = mock.filter(_listing => _listing.slug == params.slug)[0]
        return response.json({
            status: "success",
            data: listing
        })
    }
}

module.exports = ListingController
