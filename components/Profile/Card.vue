<template>
  <div class="p-6 shadow-card rounded-lg bg-white">
    <div class="xs:flex">
      <div class="xs:mr-6 flex flex-col items-center xs:text-center">
        <span
          class="avatar h-18 w-18 inline-block bg-cover bg-no-repeat rounded-full"
          :style="`background-image: url(${demo.avatar})`"
        ></span>
        <p
          class="font-bold text-brand-purple mt-1 text-sm uppercase"
        >{{ demo.price == 0 ? 'free' : demo.price }}</p>
      </div>
      <div>
        <p class="font-bold">{{ demo.name.first }} {{ demo.name.last }}</p>
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
      </div>
    </div>
    <div class="mt-6 pt-4 border-t">
      <h4>{{ demo.job_title }}</h4>
    </div>
    <ul class="mt-5 flex flex-wrap">
      <li
        v-for="(tag, index) in demo.tags"
        :key="index"
        class="bg-indigo-100 rounded whitespace-no-wrap leading-none py-1 px-3 mr-2 mb-2 text-sm font-semibold"
      >{{ tag }}</li>
    </ul>
    <div class="mt-4">
      <nuxt-link
        :to="`listing/${slugify(demo.job_title)}`"
        class="uppercase inline-block leading-none text-xs font-bold rounded-full py-4 px-8 text-white bg-brand-purple shadow-purple hover:shadow-purpleLg transition duration-300 focus:outline-none"
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
</style>