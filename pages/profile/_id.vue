<template>
  <div class="container">
    <div class="pt-20 my-20 md:flex md:pt-0">
      <div class="max-w-md mx-auto text-center md:max-w-none md:text-left md:mx-0 md:mr-16">
        <span
          class="inline-block w-40 h-40 bg-no-repeat bg-cover rounded-full avatar"
          :style="`background-image: url(${avatar})`"
        ></span>
        <div class="mt-2 md:hidden">
          <h4>{{ profile.first_name }} {{ profile.surname }}</h4>
          <p class="mt-6">
            Rating:
            <i class="text-sm">No reviews yet</i>
          </p>
          <div class="mt-6">
            <Button modifier="secondary" size="small-full" text="share profile"></Button>
          </div>
        </div>
      </div>
      <div class="relative flex-1">
        <div class="hidden md:block">
          <div class="absolute top-0 right-0">
            <Button modifier="secondary" size="small-wide" text="share profile"></Button>
          </div>
          <h4>{{ profile.first_name }} {{ profile.surname }}</h4>
          <p class="mt-6">
            Rating:
            <i class="text-sm">No reviews yet</i>
          </p>
        </div>
        <div class="mt-6">
          <p class="font-semibold">About me</p>
          <p class="mt-3" v-html="profile.bio"></p>
        </div>
        <div class="mt-16 sm:flex">
          <div class="mr-20" style="min-width: 200px;">
            <p class="mb-4 subheading">Work Experience</p>
            <WorkExperienceList :roles="profile.work" />
          </div>
          <div class="mt-8 sm:mt-0" style="min-width: 200px;">
            <p class="mb-4 subheading">Education</p>
            <EducationList :educations="profile.education" />
          </div>
        </div>
      </div>
    </div>
    <div class="my-20">
      <h4 class="heading">Published listings</h4>
      <div class="mt-6 -mx-2 sm:hidden sm:mt-10">
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
            <slide v-for="n in 6" :key="n" class="px-2 py-4 overflow-visible">
              <SlimCard />
            </slide>
          </carousel>
        </client-only>
      </div>
      <div class="hidden grid-cols-1 gap-6 mt-6 sm:mt-10 sm:grid md:grid-cols-2 lg:grid-cols-3">
        <SlimCard v-for="n in 6" />
      </div>
    </div>
  </div>
</template>

<script>
const chevron = `<svg class="inline w-8 fill-current text-brand-purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>`;

export default {
  layout: "profile",
  components: {
    SlimCard: () => import("~/components/Listing/SlimCard.vue"),
    WorkExperienceList: () =>
      import("~/components/Profile/WorkExperienceList.vue"),
    EducationList: () => import("~/components/Profile/EducationList.vue")
  },
  data: () => ({
    chevron,
    profile: null
  }),
  async asyncData({ redirect, app, params }) {
    try {
      const res = await app.$axios.get(`profile/${params.id}`);
      return { profile: res.data.data };
    } catch (e) {
      return redirect("/404");
    }
  },
  computed: {
    avatar() {
      return `${process.env.uploadURL}/${this.profile.avatar}`;
    }
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