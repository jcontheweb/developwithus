<template>
  <div data-step="languages">
    <h4
      class="text-2xl font-semibold tracking-tighter text-black75"
    >Awesome! Which languages can you speak fluently?</h4>
    <div class="mt-6 form-row">
      <multiselect
        v-if="languages"
        v-model="entry"
        placeholder="Languages"
        :options="languages"
        :multiple="true"
        :taggable="true"
      ></multiselect>
    </div>
    <Button @click="next" class="mt-6" modifier="primary" size="small-wide" text="next"></Button>
  </div>
</template>

<script>
import StepMixin from './step.mixin'
import Multiselect from "vue-multiselect";
import languages from "~/static/data/languages";

export default {
  mixins: [StepMixin],
  components: { Multiselect },
  data: () => ({ languages })
};
</script>
<style lang="scss">
.multiselect__content-wrapper {
  overlow-x: hidden !important;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>