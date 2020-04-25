<template>
  <div class="pt-16 md:pt-0">
    <section class="py-10 md:py-24">
      <div class="container">
        <div class="sm:flex">
          <!-- <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">Error while fetching posts: {{ $fetchState.error.message }}</p>
    <div v-else>{{data}}</div> -->
          <div class="flex-1 content">
            <div v-if="data">
              <h2>{{ data.title }}</h2>
              <div class="mt-6 rating">
                <p>Rating:</p>
                <p>No reviews yet</p>
              </div>
              <ul class="mt-6">
                <li class="flex items-center text-sm">
                  <SvgLocation class="w-4 h-4 mr-2" />Málaga, España
                </li>
                <li class="flex items-center mt-2 text-sm">
                  <SvgLanguage class="w-4 h-4 mr-2" />
                  <span>Spanish, English</span>
                </li>
                <li class="flex items-center mt-2 text-sm">
                  <SvgDevice class="w-4 h-4 mr-2" />
                  <span>Chat, Video, In person</span>
                </li>
              </ul>
              <div class="mt-10">
                <p>Durante la última década me he dedicado al mundo de los RRHH, habiendo pasado por empresas multinacionales tales como Apple, donde he podido desarrollar mis capacidades de coaching y liderazgo.</p>
                <p
                  class="mt-4"
                >Si estás buscando ayuda para diseñar un CV ganador, superar tu siguiente entrevista u optimizar tu perfil LinkedIn, estaré encantado de ayudarte.</p>
                <p class="mt-4">Contáctame y reserva tu sesión gratuita.</p>
              </div>
              <div class="mt-8 actions">
                <button
                  class="flex items-center block text-black transition duration-200 hover:text-brand-purple"
                >
                  <svg
                    class="mr-2"
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    size="15"
                    height="15"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    />
                  </svg>
                  <span class="font-semibold">Add favourite</span>
                </button>
                <button
                  class="flex items-center block mt-2 text-black transition duration-200 hover:text-brand-purple"
                >
                  <svg
                    class="mr-2"
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    size="15"
                    height="15"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  <span class="font-semibold">Contact developer</span>
                </button>
                <nuxt-link
                  to="/profile/1"
                  class="flex items-center block mt-2 text-black transition duration-200 hover:text-brand-purple"
                >
                  <svg
                    class="mr-2"
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    size="17"
                    height="17"
                    width="17"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span class="font-semibold">View profile</span>
                </nuxt-link>
              </div>
            </div>
            <div class="mt-16 services">
              <h4 class="heading">Services offered</h4>
              <div class="mt-6 border border-gray-100 rounded">
                <div
                  v-for="n in 3"
                  class="flex flex-wrap items-center justify-between px-5 py-4 border-b border-gray-100 last:border-b-0"
                >
                  <div class="details">
                    <p class="subheading">WordPress Development</p>
                    <p>Get ydkjfhads hdsf kjhdsf kjlhadsf</p>
                  </div>
                  <div class="mt-2 md:mt-0">
                    <Button modifier="secondary" size="small" text="request to book"></Button>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-16 qualifications">
              <h4 class="heading">Qualifications</h4>
              <div class="mt-6 sm:flex">
                <div class="mr-20">
                  <p class="mb-4 subheading">Work Experience</p>
                  <div
                    :key="n"
                    v-for="n in 4"
                    class="relative pb-6 pl-4 border-l border-indigo-200 experience-item last:border-l-0"
                  >
                    <div class="absolute w-2 h-2 bg-indigo-200 rounded-full top-left-overflow"></div>
                    <p class="font-semibold leading-none">HR Generalist</p>
                    <p>Abengoa</p>
                    <p class="mt-2">Jan, 2011 - Jan, 2015</p>
                  </div>
                </div>
                <div class="mt-8 sm:mt-0">
                  <p class="mb-4 subheading">Education</p>
                  <div
                    :key="n"
                    v-for="n in 2"
                    class="relative pb-6 pl-4 border-l border-indigo-200 experience-item last:border-l-0"
                  >
                    <div class="absolute w-2 h-2 bg-indigo-200 rounded-full top-left-overflow"></div>
                    <p class="font-semibold leading-none">Labor and Industrial Relations</p>
                    <p>University of Granada, Spain</p>
                    <p class="mt-2">Jan, 2005 - Jan, 2010</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-16 reviews">
              <h4 class="heading">Reviews</h4>
              <div class="mt-6">
                <p>No reviews yet</p>
              </div>
            </div>
          </div>
          <aside class="relative hidden w-full max-w-sm ml-24 lg:block">
            <div class="sticky rounded profile-overview shadow-input" style="top: 32px;">
              <p
                class="py-3 text-2xl font-semibold leading-none text-center text-white uppercase rounded-t gradient"
              >free</p>
              <div class="flex flex-col items-center justify-center py-10 bg-white rounded-b">
                <span
                  class="inline-block w-24 h-24 bg-no-repeat bg-cover rounded-full avatar"
                  :style="`background-image: url(https://storage.googleapis.com/mentory-user-photos/KqI623d7dh.jpeg)`"
                ></span>
                <p class="mt-4 text-2xl font-bold">Juan Manuel Ramos</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
    <section class="py-10 pb-32 bg-indigo-100 md:py-20 md:pb-40 lg:pb-20">
      <div class="container">
        <div class="text-center">
          <h2 class="mb-2">Related Developers</h2>
          <p class="subtitle">Some related developers that could help.</p>
        </div>
        <div class="mt-6 sm:mt-8">
          <client-only>
            <carousel
              :per-page-custom="[[300, 1], [768, 2], [1024, 3]]"
              :navigation-enabled="true"
              :navigationNextLabel="chevron"
              pagination-color="#d5d3e6"
              pagination-active-color="#4663f6"
              :pagination-padding="6"
              :pagination-size="12"
            >
              <slide v-for="n in 8" :key="n" class="px-4 py-6">
                <ProfileCard />
              </slide>
            </carousel>
          </client-only>
        </div>
      </div>
    </section>
    <div class="fixed inset-x-0 bottom-0 flex items-center p-4 bg-white lg:hidden shadow-inverse">
      <span
        class="inline-block w-10 h-10 bg-no-repeat bg-cover rounded-full avatar"
        :style="`background-image: url(https://storage.googleapis.com/mentory-user-photos/KqI623d7dh.jpeg)`"
      ></span>
      <div class="ml-3">
        <p class="text-sm leading-none">Juan Manuel Ramos</p>
        <p class="font-semibold uppercase">FREE</p>
      </div>
    </div>
  </div>
</template>

<script>
const chevron = `<svg class="inline w-8 fill-current text-brand-purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>`;

export default {
  layout: "single-listing",
  components: {
    ProfileCard: () => import("~/components/Profile/Card.vue"),
    SvgLocation: () => import("~/components/Svg/Location.vue"),
    SvgLanguage: () => import("~/components/Svg/Language.vue"),
    SvgDevice: () => import("~/components/Svg/Device.vue"),
    Button: () => import("~/components/UI/Button.vue")
  },
  data: () => ({
    data: null,
    chevron
  }),
  async fetch() {
    const slug = this.$route.params.slug;
    setTimeout(() => {
      this.data = this.$axios.$get(`http://127.0.0.1:3333/listing/${this.$route.params.slug}`)
    }, 2000);
    if (slug) {
      try {
        const res = await this.$axios.$get(
          `http://127.0.0.1:3333/listing/${slug}`
        );
        this.data = res.data;
        console.log(this.data);
      } catch (error) {}
    }
  }
};
</script>

<style scoped lang="scss">
.gradient {
  background-image: linear-gradient(156deg, #ff6236, #ff1081);
}
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

.avatar.h-10:after {
  height: 12px;
  width: 12px;
}

.heading {
  @apply pb-3 border-b border-indigo-100 font-semibold;
  font-size: 22px;
}

.subheading {
  @apply font-semibold;
  font-size: 18px;
  line-height: 26px;
}
</style>