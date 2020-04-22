<template>
  <div>
    <div class="relative bg-white xs:p-2 flex justify-between rounded-full shadow-input mt-10">
      <p class="pl-6 flex flex-1">
        <slot />
        <input
          class="focus:outline-none py-5 px-3 pr-10 xs:pr-3 w-full placeholder-black rounded-full leading-tight"
          :placeholder="placeholder"
          :type="type"
        />
      </p>
      <Button @click="$emit('click')" class="hidden xs:block" :text="text" modifier="primary" size="large" />
    </div>
    <Button @click="$emit('click')" class="xs:hidden mt-4 w-full" :text="text" modifier="primary" size="large" />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: true,
      default: "text"
    },
    text: {
      type: String,
      required: true,
      default: "submit"
    }
  },
  components: {
      Button: () => import('~/components/UI/Button.vue')
  }
};
</script>

<style lang="scss">
</style>