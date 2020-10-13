<template>
  <div class="container">
    <div class="relative w-full max-w-4xl mx-auto bg-white rounded-md shadow-header">
      <div class="md:flex">
        <div
          class="flex-col items-center justify-center flex-1 hidden p-6 border-b md:flex xs:p-10 lg:p-16 md:items-start md:border-b-0 md:border-r"
        >
          <h4
            class="text-5xl font-semibold leading-10 tracking-tighter text-center text-black md:text-left"
          >
            Create your
            <span class="highlight">brand</span> with us.
          </h4>
          <span
            class="block mt-8 text-xl font-semibold leading-none tracking-tighter opacity-75 text-brand-purple"
          >The most popular developer placement platform.</span>
          <p
            class="mt-6 text-center md:text-left"
          >Developwithus is the first of it's kind. With the progression of our freelancers' careers being at the top of our priority list - we aim to help establish credible portfolios full of paid work, and ultimately, secure full time positions for our developers.</p>
        </div>
        <div class="flex-1 p-6 text-center xs:p-10 lg:p-16">
          <h4 class="text-3xl font-semibold tracking-tighter text-black">Sign up today</h4>
          <p class="mt-6">Aenean ornare velit lacus et varius enim proin aliquam facilisis ante.</p>
          <form @submit.prevent="submit" class="w-full max-w-md mx-auto mt-5">
            <div class="form-row">
              <input v-model="email" type="email" placeholder="Email" />
            </div>
            <div class="mt-4 form-row">
              <input v-model="password" type="password" placeholder="Password" />
            </div>
            <Button :loading="loading" class="mt-6" modifier="primary" size="large-full" text="register"></Button>
            <p class="mt-6">
              Already have an account?
              <nuxt-link class="font-semibold text-brand-purple hover:underline" to="/login">Log In</nuxt-link>
            </p>
          </form>
        </div>
      </div>
    </div>
    <div class="items-center justify-between w-full max-w-4xl mx-auto mt-8 text-center md:flex">
      <div class="flex items-center justify-center md:justify-start">
        <a class="social" href>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
            />
          </svg>
        </a>
        <a href class="social">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
            />
          </svg>
        </a>
        <a href class="social">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z"
            />
          </svg>
        </a>
      </div>
      <p class="text-sm">© Developwithus. All rights reserved.</p>
    </div>
    <!-- <div class="flex flex-col items-center max-w-lg mx-auto">
      <nuxt-link
        to="/"
        class="mx-auto text-2xl font-semibold tracking-wide text-offblack"
      >Developwithus</nuxt-link>
      <h2 class="text-center">Get started, it's free.</h2>
      <div class="relative w-full p-10 pt-6 mt-10 text-center bg-white rounded-md shadow-cardSlim">
        <span class="pb-1 mx-auto text-xl leading-none border-b">Register</span>
        <div class="mt-10 form-row">
          <input v-model="first_name" class="bg-indigo-50" placeholder="Name" type="text" />
        </div>
        <div class="mt-5 form-row">
          <input v-model="surname" class="bg-indigo-50" placeholder="Surame" type="text" />
        </div>
        <div class="mt-5 form-row">
          <input v-model="email" class="bg-indigo-50" placeholder="Email" type="email" />
        </div>
        <div class="mt-5 form-row">
          <input v-model="password" class="bg-indigo-50" placeholder="Password" type="password" />
        </div>
        <Button @click="submit" class="mt-8" modifier="primary" size="large-full" text="signup"></Button>
      </div>
      <p class="mt-8 text-center">
        Already have an account?
        <nuxt-link to="/login" class="font-bold text-brand-purple">Log In</nuxt-link>
      </p>
    </div>-->
  </div>
</template>

<script>
export default {
  components: {
    CreateProfile: () =>
      import("~/components/Settings/Modals/CreateProfile.vue")
  },
  transition: "auth",
  layout: "authentication",
  data: () => ({
    email: "",
    password: "",
    loading: false
  }),
  methods: {
    async submit() {
      this.loading = true
      const { email, password } = this;

      try {
        const res = await this.$axios.post("register", {
          email,
          password
        });

        await this.$auth.loginWith("local", {
          data: {
            email,
            password
          }
        });

        this.loading = false

        // this.$router.push("/settings");
      } catch (error) {
        this.loading = false
      }
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