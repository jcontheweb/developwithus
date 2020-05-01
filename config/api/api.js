export const deleteById = async (endpoint, id) => {
    return window.$nuxt.$axios.$delete(endpoint, { data: { id: id } })
}

export const create = async (endpoint, payload) => {
    return window.$nuxt.$axios.$post(endpoint, payload)
}