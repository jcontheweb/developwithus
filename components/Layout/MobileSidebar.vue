<template>
  <div class="fixed inset-0 z-50 bg-white sm:max-w-xs w-full">
    <div class="py-5 px-4 flex items-center justify-between border-b">
      <p class="font-semibold text-2xl tracking-wide text-offblack">DWU</p>
      <button @click="$emit('close')" class="text-black">
        <svg class="fill-current w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>