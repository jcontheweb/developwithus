<template>
  <div>
    <DesktopHeader />
    <MobileHeader @toggle="display_sidebar = !display_sidebar" />
    <transition name="fade2">
      <div @click="display_sidebar = false" v-if="display_sidebar" class="fixed inset-0 z-50 bg-black75"></div>
    </transition>
    <transition name="sidebar">
      <MobileSidebar @close="display_sidebar = false" v-if="display_sidebar" />
    </transition>
    <nuxt />
  </div>
</template>

<script>
export default {
  components: {
    DesktopHeader: () => import("~/components/Layout/DesktopHeader.vue"),
    MobileHeader: () => import("~/components/Layout/MobileHeader.vue"),
    MobileSidebar: () => import("~/components/Layout/MobileSidebar.vue")
  },
  data: () => ({
    display_sidebar: false
  })
};
</script>

<style lang="scss">
.sidebar-enter-active,
.sidebar-leave-active {
  transition: transform 0.5s;
}
.sidebar-enter,
.sidebar-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
}

.fade2-enter-active,
.fade2-leave-active {
  transition: opacity 0.35s;
}
.fade2-enter,
.fade2-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>