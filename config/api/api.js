export const deleteById = async (endpoint, id) => {
    return window.$nuxt.$axios.$delete(endpoint, { data: { id: id } })
}

export const create = async (endpoint, payload) => {
    return window.$nuxt.$axios.$post(endpoint, payload)
}

export const updateLastActive = () => {
    const isLoggedIn = window.$nuxt.$auth.loggedIn
    
    if (isLoggedIn) window.$nuxt.$axios.$post('active')
}

export const getNameById = async (id) => {
    const { data } = await window.$nuxt.$axios.$get(`profile/name/${id}`)
    return data
} 