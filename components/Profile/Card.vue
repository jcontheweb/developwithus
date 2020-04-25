<template>
  <div class="p-6 bg-white rounded-lg shadow-card">
    <div class="xs:flex">
      <div class="flex flex-col items-center xs:mr-6 xs:text-center">
        <span
          class="inline-block bg-no-repeat bg-cover rounded-full avatar h-18 w-18"
          :style="`background-image: url(${demo.avatar})`"
        ></span>
        <p
          class="mt-1 text-sm font-bold uppercase text-brand-purple"
        >{{ demo.price == 0 ? 'free' : demo.price }}</p>
      </div>
      <div>
        <p class="font-bold">{{ demo.name.first }} {{ demo.name.last }}</p>
        <small>
          <i>{{ demo.rating || 'No reviews yet' }}</i>
        </small>
        <ul>
          <li class="flex items-center mt-3 text-sm">
            <SvgLocation class="w-4 h-4 mr-2" />
            {{ demo.location }}
          </li>
          <li class="flex items-center mt-3 text-sm">
            <SvgLanguage class="w-4 h-4 mr-2" />
            <span>{{ demo.languages.join(", ") }}</span>
          </li>
          <li class="flex items-center mt-3 text-sm">
            <SvgDevice class="w-4 h-4 mr-2" />
            <span>{{ demo.contact_methods.join(", ") }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="pt-4 mt-6 border-t">
      <h4>{{ demo.job_title }}</h4>
    </div>
    <ul class="flex flex-wrap mt-5">
      <li
        v-for="(tag, index) in demo.tags"
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

.view-listing {
  font-size: 13px;
}
</style>