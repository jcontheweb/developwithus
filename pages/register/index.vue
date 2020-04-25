<template>
  <Register />
</template>

<script>
export default {
  components: {
    Register: () => import("~/components/Authentication/Register.vue")
  }
};
</script>

<style lang="scss">
</style>