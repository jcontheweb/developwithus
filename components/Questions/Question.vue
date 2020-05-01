<template>
  <button
    ref="trigger"
    @click="toggle"
    class="w-full overflow-hidden text-sm font-semibold text-black border-t border-indigo-200 focus:outline-none accordion-trigger"
    :class="{ 'expanded': expanded }"
  >
    <div class="flex items-center justify-between py-3 pointer-events-none">
      <span v-html="question.question"></span>
      <svg
        v-if="expanded"
        class="w-auto h-4 text-brand-purple"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
      <svg
        v-else
        class="w-auto h-4 text-black"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </div>
    <div @click.stop class="bg-white">
      <div class="p-4">
        <p v-html="question.answer" class="text-sm font-normal text-left"></p>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    expanded: false
  }),
  methods: {
    toggle(event) {
      const button = this.$refs.trigger;

      this.expanded ? this.close(button) : this.open(button);
    },
    open(button) {
      this.expanded = true;
      const height = button.scrollHeight;
      button.style.maxHeight = `${height}px`;
    },
    close(button) {
      button.style.maxHeight = "45px";
      this.expanded = false;
    }
  }
};
</script>

<style scoped lang="scss">
.accordion-trigger {
  max-height: 45px;
  transition: all 0.25s ease-in-out;
}
</style>