<template>
  <div
    @click="$emit('close')"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black50"
  >
    <div @click.stop class="w-full max-w-2xl bg-white rounded">
      <div class="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <p class="text-xl font-bold">Add experience</p>
        <button
          class="text-black transition duration-300 opacity-75 hover:opacity-100"
          @click="$emit('close')"
        >
          <svg class="h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
            />
          </svg>
        </button>
      </div>
      <div class="p-8">
        <div class="mb-6 form-row">
          <label for class="required">Job</label>
          <input v-model="job_title" type="text" />
        </div>
        <div class="mb-6 form-row">
          <label for class="required">Company</label>
          <input v-model="company" type="text" />
        </div>
        <div class="mb-6 form-row">
          <label for class="required">From</label>
          <input v-model="date_from" type="text" />
        </div>
        <div class="form-row">
          <label for>To</label>
          <input v-model="date_to" type="text" />
        </div>
        <Button @click="submit" modifier="primary" text="add new experience" class="mt-6"></Button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";
export default {
  data: () => ({
    job_title: "",
    company: "",
    date_to: "",
    date_from: ""
  }),
  mounted() {
    // disableBodyScroll(this.$el);
  },
  beforeDestroy() {
    //   clearAllBodyScrollLocks()
  },
  methods: {
    async submit() {
      const { job_title, company, date_from, date_to } = this;
      this.$emit("submit", {
        job_title,
        company,
        date_from,
        date_to,
        profile_id: this.$store.getters.loggedInUserProfile.id
      });
    }
  }
};
</script>

<style lang="scss">
</style>