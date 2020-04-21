<template>
  <header
    class="lg:hidden fixed mobile top-0 inset-x-0 bg-white z-50 px-4 py-5 flex items-center justify-between shadow-input"
  >
    <p class="font-semibold text-2xl tracking-wide text-offblack">DWU</p>
    <button @click="$emit('toggle')" class="text-black">
      <svg class="fill-current w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>