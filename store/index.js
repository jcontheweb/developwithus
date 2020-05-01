import { create, deleteById } from "~/config/api/api"

export const state = () => ({
    user_profile: null
});

export const mutations = {
    SET_PROFILE: (state, payload) => {
        state.user_profile = payload
    },

    PUSH_NEW_EDUCATION: (state, payload) => {
        state.user_profile.education = [...state.user_profile.education, payload]
    },

    PUSH_NEW_WORK_EXPERIENCE: (state, payload) => {
        state.user_profile.work = [...state.user_profile.work, payload]
    },

    REMOVE_EXPERIENCE_BY_ID: (state, payload) => {
        state.user_profile.work = state.user_profile.work.filter(work => work.id != payload)
    },

    REMOVE_EDUCATION_BY_ID: (state, payload) => {
        state.user_profile.education = state.user_profile.education.filter(education => education.id != payload)
    }
}

export const actions = {
    async nuxtServerInit({ commit, context, getters }, { req }) {
        if (getters.isAuthenticated) {
            const { data } = await this.$axios.$get(
                `profile/${getters.loggedInUser.id}`
            );

            commit("SET_PROFILE", data);
        }
    },
    async WorkExperienceRemove({ commit }, payload) {
        const requestedBy = this.getters.loggedInUserProfile.id
        const validated = payload.profile_id == requestedBy

        if (validated) {
            try {
                await deleteById('work-experience', payload.id)
                commit("REMOVE_EXPERIENCE_BY_ID", payload.id)
            } catch (error) {
                console.log(error.response.message)
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
        return state.user_profile
    }
};