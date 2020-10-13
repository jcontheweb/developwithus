<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-indigo-50">
    <div class="absolute top-0 left-0 flex items-center p-4 transform scale-90">
      <button @click="$router.go(-1)">
        <svg
          class="w-6 text-black transition duration-300 fill-current hover:text-brand-purple"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <polygon
            points="3.828 9 9.899 2.929 8.485 1.515 0 10 .707 10.707 8.485 18.485 9.899 17.071 3.828 11 20 11 20 9 3.828 9"
          />
        </svg>
      </button>
      <nuxt-link
        to="/"
        class="mx-auto ml-4 text-2xl font-semibold tracking-wide transition duration-300 hover:text-brand-purple text-offblack"
      >Developwithus</nuxt-link>
    </div>
    <div class="pt-24 sm:pt-0">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>