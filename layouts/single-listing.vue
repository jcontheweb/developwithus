<template>
  <div>
    <DesktopHeader :fixed="false" class="text-black bg-white shadow-header" />
    <MobileHeader @toggle="display_sidebar = !display_sidebar" />
    <transition name="fade2">
      <div
        @click="display_sidebar = false"
        v-if="display_sidebar"
        class="fixed inset-0 z-50 bg-black75"
      ></div>
    </transition>
    <transition name="sidebar">
      <MobileSidebar @close="display_sidebar = false" v-if="display_sidebar" />
    </transition>
    <nuxt />
  </div>
</template>

<script>
import { updateLastActive } from '~/config/api/api'

export default {
  components: {
    DesktopHeader: () => import("~/components/Layout/DesktopHeader.vue"),
    MobileHeader: () => import("~/components/Layout/MobileHeader.vue"),
    MobileSidebar: () => import("~/components/Layout/MobileSidebar.vue")
  },
    watch: {
    $route() {
      updateLastActive()
    }
  },
  data: () => ({
    display_sidebar: false
  })
};
</script>

<style lang="scss">
</style>