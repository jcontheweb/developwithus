<template>
  <nuxt-link :to="`/listing/${slugify(demo.job_title)}`" class="block p-6 shadow-cardSlim hover:shadow-cardSlimLg transition duration-200 rounded-lg bg-white">
    <p class="font-bold text-brand-purple uppercase">{{ demo.price == 0 ? 'free' : demo.price }}</p>
    <h4 class="mt-3">{{ demo.job_title }}</h4>
    <p class="font-semibold text-sm mt-4">{{ demo.name.first }} {{ demo.name.last }}</p>
    <small>
      <i>{{ demo.rating || 'No reviews yet' }}</i>
    </small>
    <ul>
      <li class="text-sm mt-3 flex items-center">
        <SvgLocation class="h-4 w-4 mr-2" />
        {{ demo.location }}
      </li>
      <li class="text-sm mt-3 flex items-center">
        <SvgLanguage class="h-4 w-4 mr-2" />
        <span>{{ demo.languages.join(", ") }}</span>
      </li>
      <li class="text-sm mt-3 flex items-center">
        <SvgDevice class="h-4 w-4 mr-2" />
        <span>{{ demo.contact_methods.join(", ") }}</span>
      </li>
    </ul>
  </nuxt-link>
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
    SvgDevice: () => import("~/components/Svg/Device.vue")
  },
  data() {
    return { demo, slugify };
  }
};
</script>

<style scoped lang="scss">
.avatar {
  position: relative;
}

.avatar:after {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  height: 16px;
  width: 16px;
  background-color: #edeaea;
  border: 2px solid #fff;
  border-radius: 100%;
}
</style>