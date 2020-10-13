<template>
  <div data-step="role">
    <h4
      class="text-2xl font-semibold tracking-tighter text-black75"
    >Are you looking to hire, or work?</h4>
    <div class="mt-8 form-row">
      <div class="grid grid-cols-2 gap-3 px-4">
        <div>
          <input ref="focus" v-model="entry" type="radio" name="role" id="developer" value="developer" />
          <label class="border rounded" for="developer">Developer</label>
        </div>
        <div>
          <input v-model="entry" type="radio" name="role" id="hiring" value="hiring" />
          <label class="border rounded" for="hiring">Hiring</label>
        </div>
      </div>
    </div>
    <Button @click="next" class="mt-6" modifier="primary" size="small-wide" text="next"></Button>
  </div>
</template>

<script>
import StepMixin from './step.mixin'

export default {
  mixins: [StepMixin],
  data: () => ({ entry: 'developer' })
};
</script>

<style lang="scss" scoped>
input[type="radio"] {
  position: absolute;
  left: -9999px;
}

input + label {
  @apply py-4 text-sm border-black10 text-black50 transition duration-200 mb-0;
}

input:checked + label {
  @apply text-gray-200 bg-brand-purple border-brand-purple;
}
</style>