<template>
  <button @click="$emit('click')" :class="`button button--${modifier} button:${size}`">{{ text }}</button>
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
    }
  }
};
</script>

<style scoped lang="scss">
.button {
  @apply block border-2 border-brand-blue rounded py-3 text-white text-sm leading-none transition duration-300;

  // Modifier
  &--primary {
    @apply bg-brand-blue;
  }

  &--secondary {
      @apply bg-transparent;
  }

  // Size
  &\:large {
    @apply px-8;
  }

  &\:base {
    @apply px-6;
  }
}

// Hover
.button:hover {
    transform: translateY(-1px);
}

.button--primary:hover {}

.button--secondary:hover {
    @apply bg-brand-blue
}
</style>