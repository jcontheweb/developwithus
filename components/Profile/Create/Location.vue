<template>
  <div data-step="location">
    <h4 class="text-2xl font-semibold tracking-tighter text-black75">Nice to meet you {{ profile.first_name }} {{ profile.surname }}. Where are you from?</h4>
    <div class="mt-6 form-row">
      <input ref="focus" v-model="entry" placeholder type="text" />
    </div>
    <Button @click="next" class="mt-6" modifier="primary" size="small-wide" text="next"></Button>
  </div>
</template>

<script>
import StepMixin from './step.mixin'

export default {
  mixins: [StepMixin]
};
</script>