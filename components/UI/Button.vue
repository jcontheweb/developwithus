<template>
  <button @keyup.enter="$emit('click')" @click="$emit('click')" :class="`button button--${modifier} button--${size} ${loading && 'spinner'}`">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    modifier: {
      type: String,
      required: true,
      default: "primary"
    },
    size: {
      type: String,
      default: "base"
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.button {
  @apply uppercase rounded-full leading-none transition duration-300 font-bold;

  &:focus {
    @apply outline-none;
  }

  // Modifier
  &--primary {
    @apply bg-brand-purple shadow-purple text-white;

    &:hover {
      @apply shadow-purpleLg;
    }
  }

  &--secondary {
    @apply bg-white border border-indigo-100 text-brand-purple;

    &:hover {
      @apply shadow-button;
    }
  }

  // Size
  &--large {
    @apply py-5 px-8;
    font-size: 15px;
  }

  &--base {
    @apply py-4 px-8;
    font-size: 14px;
  }

  &--small {
    @apply py-3 px-5;
    font-size: 14px;
  }
  
  &--small-wide {
    @apply py-3 px-8;
    font-size: 14px;
  }

  &--small-full {
    @apply py-3 w-full;
    font-size: 14px;
  }

  &--large-full {
    @apply py-5 px-8 w-full;
    font-size: 15px;
  }
}
</style>