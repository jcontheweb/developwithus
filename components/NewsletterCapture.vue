<template>
  <section class="relative z-10 py-20 sign-up sm:py-40">
    <div class="container text-center">
      <h2 class="font-bold text-white">Growth starts here.</h2>
      <div class="max-w-2xl mx-auto">
        <p
          class="mt-6 text-white subtitle"
        >Informative content to help you grow right in your inbox. Best of the best. Once per month. No spam.</p>
        <InputWithButton placeholder="Your email" type="email" text="sign up" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    InputWithButton: () => import("~/components/UI/InputWithButton.vue")
  }
};
</script>

<style lang="scss">
</style>