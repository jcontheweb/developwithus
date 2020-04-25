<template>
  <div class="container">
    <div class="md:flex my-20 pt-20 md:pt-0">
      <div class="mx-auto max-w-md text-center md:max-w-none md:text-left md:mx-0 md:mr-16">
        <span
          class="avatar h-40 w-40 inline-block bg-cover bg-no-repeat rounded-full"
          :style="`background-image: url(https://storage.googleapis.com/mentory-user-photos/KqI623d7dh.jpeg)`"
        ></span>
        <div class="md:hidden mt-2">
          <h4>Juan Manuel Ramos</h4>
          <p class="mt-6">
            Rating:
            <i class="text-sm">No reviews yet</i>
          </p>
          <div class="mt-6">
            <Button modifier="secondary" size="small-full" text="share profile"></Button>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="hidden md:block">
          <div class="absolute top-0 right-0">
            <Button modifier="secondary" size="small-wide" text="share profile"></Button>
          </div>
          <h4>Juan Manuel Ramos</h4>
          <p class="mt-6">
            Rating:
            <i class="text-sm">No reviews yet</i>
          </p>
        </div>
        <div class="mt-6">
          <p class="font-semibold">About me</p>
          <p
            class="mt-3"
          >Estoy aquí para ayudar a otros a convertirse en la mejor versión de sí mismos y mostrarles que pueden hacer más de lo que pensaban que era posible 🙌🏼</p>
        </div>
        <div class="sm:flex mt-16">
          <div class="mr-20">
            <p class="subheading mb-4">Work Experience</p>
            <div
              :key="n"
              v-for="n in 4"
              class="experience-item relative pl-4 pb-6 border-l border-indigo-200 last:border-l-0"
            >
              <div class="h-2 w-2 absolute top-left-overflow bg-indigo-200 rounded-full"></div>
              <p class="font-semibold leading-none">HR Generalist</p>
              <p>Abengoa</p>
              <p class="mt-2">Jan, 2011 - Jan, 2015</p>
            </div>
          </div>
          <div class="mt-8 sm:mt-0">
            <p class="subheading mb-4">Education</p>
            <div
              :key="n"
              v-for="n in 2"
              class="experience-item relative pl-4 pb-6 border-l border-indigo-200 last:border-l-0"
            >
              <div class="h-2 w-2 absolute top-left-overflow bg-indigo-200 rounded-full"></div>
              <p class="font-semibold leading-none">Labor and Industrial Relations</p>
              <p>University of Granada, Spain</p>
              <p class="mt-2">Jan, 2005 - Jan, 2010</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-20">
      <h4 class="heading">Published listings</h4>
      <div class="sm:hidden -mx-2 mt-6 sm:mt-10">
        <client-only>
          <carousel
            :per-page-custom="[[300, 1]]"
            :navigation-enabled="true"
            :navigationNextLabel="chevron"
            pagination-color="#ecebf5"
            pagination-active-color="#4663f6"
            :pagination-padding="6"
            :pagination-size="12"
          >
            <slide v-for="n in 6" :key="n" class="overflow-visible py-4 px-2">
              <SlimCard />
            </slide>
          </carousel>
        </client-only>
      </div>
      <div class="hidden mt-6 sm:mt-10 sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SlimCard v-for="n in 6" />
      </div>
    </div>
  </div>
</template>

<script>
const chevron = `<svg class="fill-current text-brand-purple w-8 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>`;

export default {
  layout: "profile",
  components: {
    Button: () => import("~/components/UI/Button.vue"),
    SlimCard: () => import("~/components/Listing/SlimCard.vue")
  },
  data: () => ({
    chevron
  })
};
</script>

<style scoped lang="scss">
.avatar {
  position: relative;
}

.avatar:after {
  position: absolute;
  content: "";
  top: 10px;
  right: 10px;
  height: 24px;
  width: 24px;
  background-color: #edeaea;
  border: 2px solid #fff;
  border-radius: 100%;
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