<template>
  <div class="relative pb-6 pl-4 border-l border-indigo-200 experience-item last:border-l-0">
    <div class="absolute w-2 h-2 bg-indigo-200 rounded-full top-left-overflow"></div>
    <p class="font-semibold leading-none">{{ flattened.job_title }}</p>
    <p>{{ flattened.company }}</p>
    <p class="mt-2">{{ flattened.date_from }} - {{ flattened.date_to }}</p>

    <button
      @click="remove"
      v-if="belongsToAuthenticatedUser"
      class="absolute top-0 right-0 opacity-75 hover:opacity-100"
    >
      <svg class="h-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path
          d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    role: {
      type: Object,
      required: true
    }
  },
  methods: {
    remove() {
        this.$store.dispatch("WorkExperienceRemove", this.role)
        // this.$store.commit("REMOVE_WORK_EXPERIENCE", this.role)
        // this.$bus.$emit("work-experience:remove", this.role)
    }
  },
  computed: {
    belongsToAuthenticatedUser() {
      return this.role.profile_id == this.$store.getters.loggedInUserProfile.id
    },
    flattened() {
      return this.role
    }
  }
};
</script>

<style lang="scss">
</style>