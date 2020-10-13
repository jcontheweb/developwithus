<template>
  <div data-step="first_name">
    <h4 class="text-2xl font-semibold tracking-tighter text-black75">What's your first name?</h4>
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