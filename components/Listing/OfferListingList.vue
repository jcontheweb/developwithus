<template>
  <client-only>
    <carousel
      :per-page-custom="[[300, 1], [768, 2], [1024, 3]]"
      :navigation-enabled="true"
      :navigationNextLabel="chevron"
      pagination-color="#ecebf5"
      pagination-active-color="#4663f6"
      :pagination-padding="6"
      :pagination-size="12"
    >
      <slide v-for="offer in offers" :key="offer.id" class="px-4 py-6">
        <OfferListingItem :offer="offer" />
      </slide>
    </carousel>
  </client-only>
</template>

<script>
const chevron = `<svg class="inline w-8 fill-current text-brand-purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>`;

export default {
  props: {
    offers: {
      type: Array,
      required: true
    }
  },
  components: {
      OfferListingItem: () => import('~/components/Listing/OfferListingItem.vue')
  },
  data: () => ({ chevron }),
};
</script>

<style lang="scss">
</style>