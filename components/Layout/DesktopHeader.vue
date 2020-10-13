<template>
  <header
    ref="header"
    class="inset-x-0 top-0 z-50 hidden py-5 lg:block"
    :class="{ 'absolute': fixed }"
  >
    <div class="flex items-center justify-between px-12">
      <nuxt-link to="/" class="text-2xl font-semibold tracking-wide text-offblack">Developwithus</nuxt-link>
      <div class="flex items-center">
        <nuxt-link
          class="ml-12 transition duration-300 link hover:text-brand-purple"
          to="/"
        >Find a developer</nuxt-link>
        <nuxt-link
          class="ml-12 transition duration-300 link hover:text-brand-purple"
          :to="$URLS.becoming"
        >Become a developer</nuxt-link>
        <div v-if="!$store.getters.isAuthenticated" class="inline-block ml-12">
          <nuxt-link class="transition duration-300 link hover:text-brand-purple" to="/login">Login</nuxt-link>
          <Button
            @click="$router.push(`/register`)"
            class="ml-8"
            modifier="primary"
            size="small"
            text="sign up"
          />
        </div>
        <div v-else class="relative inline-block ml-12">
          <HeaderDropdown />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  components: {
    HeaderDropdown: () => import("~/components/Layout/HeaderDropdown.vue")
  },
  props: {
    fixed: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    if (this.fixed) {
      const header = this.$refs.header;
      window.addEventListener("scroll", event => {
        if (window.scrollY >= 300) {
          header.classList.remove("absolute");
          header.classList.add("fixed");
        } else {
          header.classList.remove("fixed");
          header.classList.add("absolute");
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
header.fixed {
  @apply bg-white shadow-header py-3;

  .link {
    @apply text-offblack;
  }

  .link:hover {
    @apply text-brand-purple;
  }

  .button {
    @apply bg-brand-purple border-brand-purple text-white shadow-purple;
  }

  .button:hover {
    @apply shadow-purpleLg;
  }
}

header.absolute {
  .link {
    @apply text-white;
  }

  .link:hover {
    @apply text-brand-purple;
  }
}
</style>