<template>
  <div>
    <div class="relative flex justify-between mt-10 bg-white rounded-full xs:p-2 shadow-input">
      <p class="flex flex-1 pl-6">
        <slot />
        <input
          class="w-full px-3 py-5 pr-10 leading-tight placeholder-black rounded-full focus:outline-none xs:pr-3"
          :placeholder="placeholder"
          :type="type"
        />
      </p>
      <Button @click="$emit('click')" class="hidden xs:block" :text="text" modifier="primary" size="large" />
    </div>
    <Button @click="$emit('click')" class="w-full mt-4 xs:hidden" :text="text" modifier="primary" size="large" />
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
};
</script>

<style lang="scss">
</style>