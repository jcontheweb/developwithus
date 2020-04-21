<template>
  <header ref="header" class="hidden lg:block absolute top-0 inset-x-0 z-50 py-5">
    <div class="px-12 flex justify-between items-center">
      <p class="font-semibold text-2xl tracking-wide text-offblack">Developwithus</p>
      <div>
        <nuxt-link
          class="link ml-12 transition duration-300 text-white hover:text-brand-purple"
          to="/"
        >Find a developer</nuxt-link>
        <nuxt-link
          class="link ml-12 transition duration-300 text-white hover:text-brand-purple"
          to="/"
        >Become a developer</nuxt-link>
        <nuxt-link
          class="link ml-12 transition duration-300 text-white hover:text-brand-purple"
          to="/"
        >Login</nuxt-link>
        <button
          class="ml-8 rounded-full focus:outline-none border border-indigo-100 bg-white leading-none py-3 px-8 uppercase text-brand-purple shadow-button hover:shadow-input text-sm font-bold transition duration-300"
        >sign up</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    const header = this.$refs.header;
    window.addEventListener("scroll", event => {
      if (window.scrollY >= 300) {
        header.classList.remove("absolute");
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
        header.classList.add("absolute");
      }
    });
  }
};
</script>

<style scoped lang="scss">
header.fixed {
  @apply bg-white shadow-input py-3;

  .link {
    @apply text-offblack;
  }

  .link:hover {
    @apply text-brand-purple;
  }

  button {
    @apply bg-brand-purple border-brand-purple text-white shadow-purple;
  }

  button:hover {
    @apply shadow-purpleLg;
  }
}
</style>