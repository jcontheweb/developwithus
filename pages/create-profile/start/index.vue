<template>
  <div class="w-full max-w-4xl mx-auto bg-white rounded-md shadow-header" style="width: 28rem">
    <div class="md:flex">
      <div class="relative flex flex-col items-center justify-center flex-1 p-6 text-center xs:p-10 lg:p-16">
        <transition mode="out-in" name="fade2">
          <component :profile="profile" @step:forward="handleStepForward" :is="currentStep"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
const steps = [
  "FirstName",
  "LastName",
  "Location",
  "Languages",
  "Gender",
  "Role",
  "Avatar"
];
export default {
  components: {
    FirstName: () => import("~/components/Profile/Create/FirstName.vue"),
    LastName: () => import("~/components/Profile/Create/LastName.vue"),
    Location: () => import("~/components/Profile/Create/Location.vue"),
    Languages: () => import("~/components/Profile/Create/Languages.vue"),
    Gender: () => import("~/components/Profile/Create/Gender.vue"),
    Role: () => import("~/components/Profile/Create/Role.vue"),
    Avatar: () => import("~/components/Profile/Create/Avatar.vue")
  },
  // middleware: "has-profile",
  transition: "auth",
  layout: "authentication",
  data: () => ({
    email: "",
    password: "",
    currentStep: "FirstName",
    steps,
    profile: {},
    started: false
  }),
  methods: {
    handleStepForward(event) {
      if (event) {
        const key = Object.keys(event)[0];
        const value = Object.values(event)[0];

        this.profile[key] = value;
      }
      const index = steps.indexOf(this.currentStep);

      this.currentStep = steps[index + 1];
    },
    handleStepBackward() {
      const index = steps.indexOf(this.currentStep);

      this.currentStep = steps[index - 1];
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  @apply text-black50;
}

.highlight {
  @apply relative;

  &:after {
    @apply absolute inset-0 bg-brand-purple opacity-25;
    height: 55%;
    width: 105%;
    top: 37%;
    left: -2%;
    // transform: translateY(-50%);
    content: "";
  }
}
</style>