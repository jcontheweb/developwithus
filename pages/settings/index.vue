<template>
  <div>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">Error while fetching posts: {{ $fetchState.error.message }}</p>
    <ul v-else>
      {{ user }}
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: null
  }),
  async fetch() {
      this.user = await this.$axios.$get("me")
  }
};
</script>

<style lang="scss">
</style>