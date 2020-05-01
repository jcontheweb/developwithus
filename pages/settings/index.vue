<template>
  <div class="container">
    <!-- <div v-if="$fetchState.pending">fetching</div> -->
    <div class="justify-between py-24 lg:flex">
      <aside class="w-full max-w-3xl mx-auto mt-16 mb-8 lg:mt-0 lg:w-64 lg:mr-8 lg:mb-0">
        <div class="mb-8 text-center lg:mb-0">
          <input
            class="absolute invisible w-px"
            style="left: -9999px"
            type="file"
            ref="avatar"
            @change="onFileChange(image, $event)"
          />
          <button
            @click="editAvatar"
            class="button__avatar focus:outline-none focus:shadow-outline"
          >
            <span
              class="block w-48 h-48 bg-no-repeat bg-cover rounded-full"
              :style="`background-image:url(${avatar})`"
            ></span>
          </button>
          <p class="mt-2 subtitle">{{ $store.getters.loggedInUser.username }}</p>
        </div>
        <div class="flex flex-col mt-6 rounded-md shadow-cardSlim">
          <button
            class="flex items-center justify-between p-5 text-lg leading-none text-black transition duration-300 bg-white border-b border-indigo-100 hover:text-brand-purple first:rounded-t-md last:rounded-b-md focus:outline-none last:border-b-0"
            :class="[ component == tab.component ? 'text-brand-purple' : 'text-black' ]"
            v-for="(tab, index) in tabs"
            :key="index"
            @click="component = tab.component"
          >
            {{ tab.label }}
            <svg
              v-if="component == tab.component"
              class="w-4 fill-current text-brand-purple"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
              />
            </svg>
          </button>
          <!-- <button
            @click="uploadAvatar"
            class="px-8 py-4 font-semibold text-white bg-brand-purple"
          >Upload</button>-->
        </div>
      </aside>
      <article class="flex-1 max-w-3xl mx-auto">
        <transition name="page" mode="out-in">
          <component :is="component"></component>
        </transition>
      </article>
    </div>
  </div>
</template>

<script>
const tabs = [
  {
    component: "AboutYou",
    label: "About you"
  },
  {
    component: "Billing",
    label: "Billing"
  },
  {
    component: "ChangePassword",
    label: "Change password"
  }
];
export default {
  layout: "profile",
  components: {
    AboutYou: () => import("~/components/Settings/AboutYou.vue"),
    Billing: () => import("~/components/Settings/Billing.vue"),
    ChangePassword: () => import("~/components/Settings/ChangePassword.vue")
  },
  data: () => ({
    tabs,
    user: null,
    component: "AboutYou",
    image: {
      raw: null,
      image: false
    }
    // avatar:
  }),
  // async fetch() {
  //   if (!this.$store.getters.loggedInUserProfile) {
  //     const { data } = await this.$axios.$get(
  //       `profile/${this.$store.getters.loggedInUser.id}`
  //     );
  //     console.log("hit");
  //     this.$store.commit("SET_PROFILE", data);
  //   }
  // },
  methods: {
    editAvatar() {
      this.$refs.avatar.click();
    },
    onFileChange(item, e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.image.raw = files[0];
      this.createImage(item, files[0]);
    },
    createImage(item, file) {
      var image = new Image();
      var reader = new FileReader();

      reader.onload = e => {
        item.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(item) {
      item.image = false;
    },
    async uploadAvatar() {
      const fd = new FormData();
      fd.append("avatar", this.image.raw, this.image.raw.name);
      const res = await this.$axios.$post("profile/avatar", fd);
    }
  },
  computed: {
    avatar() {
      if (this.$store.getters.loggedInUserProfile) {
        return (
          this.image.image ||
          `${process.env.uploadURL}/${this.$store.getters.loggedInUserProfile.avatar}`
        );
      }
    }
  }
};
</script>

<style lang="scss">
.button__avatar {
  @apply relative rounded-full;

  &:before {
    @apply flex items-center justify-center absolute inset-0 opacity-0 transition duration-200 text-white font-semibold text-lg z-10;
    content: "Edit";
  }

  &:after {
    @apply absolute inset-0 rounded-full transition duration-300  opacity-0;
    background-color: rgba(0, 0, 0, 1);
    content: "";
  }

  &:hover:after {
    @apply opacity-50;
  }

  &:hover:before {
    @apply opacity-100;
  }
}
</style>