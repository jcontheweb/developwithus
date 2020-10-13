<template>
  <div data-step="gender">
    <h4
      class="text-2xl font-semibold tracking-tighter text-black75"
    >Great! Are you male, female, or would you rather not share?</h4>
    <div class="mt-8 form-row">
      <div class="grid grid-cols-3 gap-3 px-4">
        <div>
          <input v-model="entry" type="radio" name="gender" id="male" value="male" />
          <label class="border rounded" for="male">Male</label>
        </div>
        <div>
          <input v-model="entry" type="radio" name="gender" id="female" value="female" />
          <label class="border rounded" for="female">Female</label>
        </div>
        <div>
          <input v-model="entry" type="radio" name="gender" id="other" value="other" />
          <label class="border rounded" for="other">Other</label>
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
  data: () => ({ entry: 'male' })
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