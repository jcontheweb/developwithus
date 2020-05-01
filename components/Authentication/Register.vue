<template>
  <div v-if="isActive" class="fixed inset-0 flex items-center justify-center bg-white">
    <div class="form-row">
      <label for>email</label>
      <input type="email" v-model="email" />
    </div>
    <div class="form-row">
      <label for>username</label>
      <input type="text" v-model="username" />
    </div>
    <div class="form-row">
      <label for>password</label>
      <input type="text" v-model="password" />
    </div>
    <button @click="register">test</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "",
    username: "",
    password: ""
  }),
  asyncData() {},
  methods: {
    async register() {
      const { email, username, password } = this;

      const res = await this.$axios.post("register", {
        email,
        username,
        password
      });

      await this.$auth.loginWith("local", {
        data: {
          email,
          password
        }
      });

      const { data } = await this.$axios.$get(
        `profile/${this.$store.getters.loggedInUser.id}`
      );

      this.$store.commit("SET_PROFILE", data);

      this.$router.push("/settings");
    }
  },
  computed: {
    isActive() {
      return this.$route.fullPath == "/register";
    }
  }
};
</script>

<style lang="scss">
</style>