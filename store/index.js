import { create, deleteById } from "~/config/api/api"

export const state = () => ({});

export const mutations = {
    PUSH_NEW_WORK_EXPERIENCE: (state, payload) => {
        state.auth.user.work = [...state.auth.user.work, payload]
    },

    REMOVE_EXPERIENCE_BY_ID: (state, payload) => {
        state.auth.user.work = state.auth.user.work.filter(work => work.id != payload)
    },
}

export const actions = {
    async WorkExperienceRemove({ commit }, payload) {
        const requestedBy = this.getters.loggedInUserProfile.id
        const validated = payload.profile_id == requestedBy

        if (validated) {
            try {
                await deleteById('work-experience', payload.id)
                commit("REMOVE_EXPERIENCE_BY_ID", payload.id)
            } catch (error) {
            }
        }
    },

    async WorkExperienceAdd({ commit }, experience) {
        const response = await create('work-experience', experience)

        if (response.status == "success") {
            commit("PUSH_NEW_WORK_EXPERIENCE", response.data)
        }
    },

    async EducationRemove({ commit }, { id } = payload) {
        const response = await deleteById('education', id)

        if (response.status == "success") {
            commit("REMOVE_EDUCATION_BY_ID", id)
        }
    },

    async EducationAdd({ commit }, education) {
        const response = await create('education', education)

        if (response.status == "success") {
            commit("PUSH_NEW_EDUCATION", response.data)
        }
    },
}

export const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn;
    },

    loggedInUser(state) {
        return state.auth.user;
    },

    loggedInUserProfile(state) {
        return state.auth.user.profile
    },

    hasProfile(state) {
        return state.auth.user.profile != null
    }
};