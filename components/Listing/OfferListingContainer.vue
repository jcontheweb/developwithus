<template>
  <div class="relative" style="min-height: 200px;">
    <OfferListingList :offers="list" v-if="!loading & list.length > 0" />
    <div v-else class="absolute inset-0 flex items-center justify-center">loading..</div>
  </div>
</template>

<script>
export default {
  components: {
    ProfileCard: () => import("~/components/Profile/Card.vue"),
    OfferListingList: () => import("~/components/Listing/OfferListingList.vue")
  },
  data: () => ({
    loading: false,
    list: []
  }),
  async created() {
    this.loading = true;
    const { data } = await this.$axios.$get("listing");
    this.list = data;
    this.loading = false;
  }
};
</script>

<style lang="scss">
</style>