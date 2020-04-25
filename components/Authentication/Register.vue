<template>
  <div v-if="isActive" class="fixed inset-0 flex items-center justify-center bg-white">
    <input type="email" v-model="email" />
    <input type="text" v-model="username" />
    <input type="text" v-model="password" />
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