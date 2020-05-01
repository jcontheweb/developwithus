<template>
  <div class="relative pt-12 pb-32 overflow-hidden">
    <img class="absolute top-0 left-0" style="z-index:-1" src="/big_blob.svg" alt />
    <div class="container">
      <h2 class="text-center">Popular questions</h2>
      <QuestionList class="mt-10" />
      <div class="mt-8 text-center">
        <Button modifier="secondary" size="small-wide" text="more questions?"></Button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    QuestionList: () => import('~/components/Questions/QuestionList.vue')
  }
}
</script>
<style scoped lang="scss">
img {
  max-width: none;
}
</style>