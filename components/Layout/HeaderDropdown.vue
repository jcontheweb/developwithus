<template>
  <div>
    <button @click="open = !open" class="flex items-center focus:outline-none group">
      <span
        class="w-10 h-10 bg-no-repeat bg-cover rounded-full"
        style="background-image:url(/profile-avatar.png)"
      ></span>
      <div class="ml-1 text-left">
        <p
          class="flex items-center text-sm leading-none transition duration-300 group-hover:text-brand-purple"
        >
          {{ $store.getters.loggedInUser.username }}
          <svg
            class="h-4 ml-1 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </p>
        <p
          class="inline-block px-2 py-1 mt-1 text-xs font-semibold leading-none text-white rounded-lg bg-brand-purple"
        >Developer</p>
      </div>
    </button>
    <div v-if="open" class="absolute right-0 z-10 text-black bg-white rounded shadow-header">
      <nuxt-link
        v-for="(route, index) in routes"
        :key="index"
        class="flex items-center px-6 py-3 whitespace-no-wrap transition duration-200 border-b border-gray-100 hover:text-brand-purple hover:bg-indigo-100 last:border-b-0 first:rounded-t last:rounded-b"
        :to="route.url"
        @click.native="open = false"
      >
        <span class="mr-4" v-html="route.icon"></span>
        {{ route.label }}
      </nuxt-link>
      <button
        class="flex items-center w-full px-6 py-3 whitespace-no-wrap transition duration-200 border-b border-gray-100 focus:outline-none hover:text-brand-purple hover:bg-indigo-100 last:border-b-0 first:rounded-t last:rounded-b"
      >
        <span class="mr-4" v-html="icons.LOG_OUT"></span>
        Log out
      </button>
    </div>
    <div v-if="open" @click="open = false" class="fixed inset-0"></div>
  </div>
</template>

<script>
import * as icons from "~/components/Layout/header-icons.js";

const routes = [
  {
    url: "/become-a-developer",
    label: "Become a developer",
    icon: icons.BECOME_A_DEVELOPER
  },
  {
    url: "/my-listings",
    label: "My listings",
    icon: icons.MY_LISTINGS
  },
  {
    url: "/sessions",
    label: "Sessions",
    icon: icons.SESSIONS
  },
  {
    url: "/me/",
    label: "Public profile",
    icon: icons.PUBLIC_PROFILE
  },
  {
    url: "/settings",
    label: "Settings",
    icon: icons.SETTINGS
  }
];
export default {
  data: () => ({
    routes,
    icons,
    open: false
  })
};
</script>