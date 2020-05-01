<template>
  <div class="grid md:gap-6 md:grid-cols-2">
    <div v-for="n in 2" :key="n">
      <Question
        :question="question"
        v-for="(question, index) in faq.slice(0+((n-1)*count), n*count)"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import faq from "~/static/data/faq";

export default {
  components: {
    Question: () => import("~/components/Questions/Question.vue")
  },
  data: () => ({ faq }),
  computed: {
    count() {
      return Math.ceil(this.faq.length / 2);
    }
  }
};
</script>

<style lang="scss">
</style>