<template>
  <div class="p-6 bg-white rounded-lg shadow-card">
    <div class="xs:flex">
      <div class="flex flex-col items-center xs:mr-6 xs:text-center">
        <ProfileAvatar class="h-18 w-18" :avatar="profile.avatar" :is_active="isActive" />
        <p
          class="mt-1 text-sm font-bold uppercase text-brand-purple"
        >{{ offer.paid ? offer.price_per_hour : 'free' }}</p>
      </div>
      <div>
        <p class="font-bold">{{ profile.first_name }} {{ profile.surname }}</p>
        <small>
          <i>{{ demo.rating || 'No reviews yet' }}</i>
        </small>
        <ul>
          <li class="flex items-center mt-3 text-sm">
            <SvgLocation class="w-4 h-4 mr-2" />
            {{ profile.location }}
          </li>
          <li class="flex items-center mt-3 text-sm">
            <SvgLanguage class="w-4 h-4 mr-2" />
            <span v-if="profile.languages">{{ profile.languages.split(',').join(", ") }}</span>
          </li>
          <li class="flex items-center mt-3 text-sm">
            <SvgDevice class="w-4 h-4 mr-2" />
            <span>{{ demo.contact_methods.join(", ") }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="pt-4 mt-6 border-t">
      <h4>{{ offer.title }}</h4>
    </div>
    <ul class="flex flex-wrap mt-5">
      <li
        v-for="(tag, index) in offer.services_offered.split(',')"
        :key="index"
        class="px-3 py-1 mb-2 mr-2 text-sm font-semibold leading-none whitespace-no-wrap bg-indigo-100 rounded"
      >{{ tag }}</li>
    </ul>
    <div class="mt-4">
      <nuxt-link
        :to="`listing/${slugify(demo.job_title)}`"
        class="inline-block px-8 py-4 font-bold leading-none text-white uppercase transition duration-300 rounded-full view-listing bg-brand-purple shadow-purple hover:shadow-purpleLg focus:outline-none"
      >view listing</nuxt-link>
    </div>
  </div>
</template>

<script>
const slugify = require("slugify");
const demo = {
  id: 1,
  avatar: "https://storage.googleapis.com/mentory-user-photos/KqI623d7dh.jpeg",
  price: 0,
  name: {
    first: "Juan",
    last: "Manuel Ramos"
  },
  rating: null,
  location: "Málaga, España",
  languages: ["Spanish", "English"],
  contact_methods: ["Chat", "Video", "In person"],
  job_title: "Profesional de RRHH | Ex-Apple | Creador @ Mentory",
  tags: ["User Interface", "Frontend", "Vue.js"]
};
export default {
  components: {
    SvgLocation: () => import("~/components/Svg/Location.vue"),
    SvgLanguage: () => import("~/components/Svg/Language.vue"),
    SvgDevice: () => import("~/components/Svg/Device.vue"),
    ProfileAvatar: () => import("~/components/Profile/ProfileAvatar.vue")
  },
  props: {
    offer: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    demo,
    slugify,
    profile: {}
  }),
  async created() {
    const { data } = await this.$axios.$get(
      `profiles/${this.offer.profile_id}`
    );

    this.profile = data;
  },
  computed: {
    isActive() {
      const current_time = new Date();
      const last_active = new Date(parseFloat(this.profile.last_active));
      return current_time - last_active < 5 * 60 * 1000;
    }
  }
};
</script>

<style scoped lang="scss">

.view-listing {
  font-size: 13px;
}
</style>