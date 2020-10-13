<template>
  <button @click="create">create</button>
</template>

<script>
export default {
  layout: "profile",
  methods: {
    async create() {
      const request = {
        image: '',
        title: 'Test Listing',
        description: 'wow this is a great listing',
        paid: true,
        price_per_hour: null,
        services_offered: "UI/UX,WordPress,Vue,API,Laravel,Web Development"
      };

      const { data } = await this.$axios.$post("listing", request);
    }
  }
};
</script>

<style lang="scss">
</style>