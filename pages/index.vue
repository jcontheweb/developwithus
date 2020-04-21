<template>
  <div>
    <section
      class="relative flex overflow-hidden py-16 lg:py-80 pt-24 lg:pt-80 min-h-screen sm:min-h-0 bg-no-repeat bg-right-top hero"
    >
      <div
        class="absolute right-0 max-w-2xl w-full overflow-visible hidden lg:block"
        style="height: 610px;top: 155px"
      >
        <span
          v-for="n in 8"
          :key="n"
          class="avatar"
          :class="`avatar__${n}`"
          :style="`background-image:url(/avatar${n}.jpg); animation-delay: ${n*200}ms`"
        ></span>
      </div>
      <div class="container relative z-10 flex flex-col justify-center py-4 sm:py-0">
        <div class="max-w-2xl mx-auto lg:mx-0">
          <h1>Developers to help you bring your product to life.</h1>
          <p class="subtitle mt-5">Web advice for tomorrow’s leaders.</p>
          <div
            class="relative bg-white xs:p-2 flex justify-between rounded-full shadow-input mt-10"
          >
            <p class="pl-6 flex flex-1">
              <svg class="w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                  d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                />
              </svg>
              <input
                class="focus:outline-none py-5 px-3 pr-10 xs:pr-3 w-full placeholder-black rounded-full leading-tight"
                placeholder="What type of project do you have?"
                type="text"
                name
                id
              />
            </p>
            <button
              class="hidden xs:block uppercase text-sm font-bold rounded-full py-5 px-8 text-white bg-brand-purple shadow-purple hover:shadow-purpleLg transition duration-300 focus:outline-none"
            >find a developer</button>
          </div>
          <button
            class="xs:hidden mt-4 w-full uppercase text-sm font-bold rounded-full py-5 px-8 text-white bg-brand-purple shadow-purple hover:shadow-purpleLg transition duration-300 focus:outline-none"
          >find a developer</button>
        </div>
      </div>
    </section>
    <section class="my-16 lg:-mt-12">
      <div class="container">
        <div class="text-center">
          <p class="text-lg">Our developers have experience in companies like</p>
          <div class="max-w-4xl mx-auto md:flex justify-between w-full">
            <img class="mt-10 mx-auto md:mx-0" src="/apple.svg" alt="">
            <img class="mt-10 mx-auto md:mx-0" src="/hubspot.svg" alt="">
            <img class="mt-10 mx-auto md:mx-0" src="/airbus.svg" alt="">
            <img class="mt-10 mx-auto md:mx-0" src="/dekra.svg" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="relative my-16 lg:my-40 pt-4">
      <img src="/dots.svg" style="top:8px;" alt class="absolute right-0" />
      <img src="/blob.svg" alt class="blob absolute left-0" />
      <div class="container z-5 relative">
        <div class="text-center">
          <h2 class="mb-2">Featured Developers</h2>
          <p class="subtitle">These are some of our newest Developers. Start here.</p>
        </div>
        <div class="mt-6 sm:mt-12">
          <client-only>
            <carousel
              :per-page-custom="[[300, 1], [768, 2], [1024, 3]]"
              :navigation-enabled="true"
              :navigationNextLabel="chevron"
              pagination-color="#ecebf5"
              pagination-active-color="#4663f6"
              :pagination-padding="6"
              :pagination-size="12"
            >
              <slide v-for="n in 8" class="py-6 px-4">
                <ProfileCard />
              </slide>
            </carousel>
          </client-only>
        </div>
      </div>
    </section>
    <section class="relative my-16 lg:my-40">
      <div class="container">
        <div class="text-center">
          <h2 class="mb-2">What can I achieve?</h2>
          <p
            class="subtitle max-w-xl mx-auto"
          >We all have things that we'd like to improve. Here are some to help you get started.</p>
        </div>
      </div>
    </section>
    <section class="sign-up relative z-10 py-20 sm:py-40">
      <div class="container text-center">
        <h2 class="text-white font-bold">Growth starts here.</h2>
        <div class="max-w-2xl mx-auto">
          <p
            class="subtitle text-white mt-6"
          >Informative content to help you grow right in your inbox. Best of the best. Once per month. No spam.</p>
          <div
            class="relative bg-white xs:p-2 flex justify-between rounded-full shadow-input mt-10"
          >
            <p class="pl-6 flex flex-1">
              <input
                class="focus:outline-none py-5 px-3 pr-10 xs:pr-3 w-full placeholder-black rounded-full leading-tight"
                placeholder="Your email"
                type="text"
                name
                id
              />
            </p>
            <button
              class="hidden xs:block uppercase text-sm font-bold rounded-full py-5 px-12 text-white bg-brand-purple shadow-purple hover:shadow-purpleLg transition duration-300 focus:outline-none"
            >sign up</button>
          </div>
          <button
            class="xs:hidden mt-4 w-full uppercase text-sm font-bold rounded-full py-5 px-12 text-white bg-brand-purple shadow-purple hover:shadow-purpleLg transition duration-300 focus:outline-none"
          >sign up</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const chevron = `<svg class="fill-current text-brand-purple w-8 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>`;

export default {
  components: {
    Button: () => import("~/components/UI/Button.vue"),
    ProfileCard: () => import("~/components/Profile/Card.vue")
  },
  data() {
    return { chevron };
  }
};
</script>

<style lang="scss">
.hero {
  background-image: linear-gradient(145deg, #ff6236 21%, #ff1081);

  h1,
  p.subtitle {
    color: white;
    text-align: center;
  }

  @media (min-width: 1024px) {
    background-image: url("/hero.svg");

    h1,
    p.subtitle {
      text-align: left;
    }

    h1 {
      color: rgba(0, 0, 0, 0.85);
    }

    p.subtitle {
      @apply text-black;
    }
  }
}

.VueCarousel-navigation-button {
  background: #fff !important;
  border: 1px solid #e0deee;
  box-shadow: 0 8px 20px 0 rgba(51, 45, 97, 0.17);
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.VueCarousel-navigation-prev {
  display: none;
}

.VueCarousel-navigation-next {
  @apply border;
  right: 46px !important;
  top: 45% !important;
  border-radius: 100%;
}

.blob {
  bottom: -35%;

  // @media (min-width: 768px) {
  //   bottom: -50%;
  // }
}

.hero .avatar {
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  border-radius: 100%;
  display: block;
  box-shadow: 0 30px 34px 0 rgba(51, 45, 97, 0.3);
  border: 3px solid white;
  position: absolute;
  animation: bounce 4.5s infinite alternate;
}

.avatar__1 {
  top: 0;
  left: 130px;
}

.avatar__2 {
  top: 120px;
  right: 100px;
}

.avatar__3 {
  top: 0;
  right: -65px;
}

.avatar__1,
.avatar__2,
.avatar__3 {
  height: 80px;
  width: 80px;
}

.avatar__4 {
  height: 65px;
  width: 65px;
  top: 150px;
  left: 25px;
}

.avatar__5 {
  height: 110px;
  width: 110px;
  top: 45%;
  left: 50%;
}

.avatar__6 {
  height: 95px;
  width: 95px;
  top: 60%;
  left: 40px;
}

.avatar__7 {
  height: 60px;
  width: 60px;
  top: 75%;
  left: 40%;
}

.avatar__8 {
  height: 90px;
  width: 90px;
  bottom: 90px;
  right: 0;
}

.sign-up {
  background-image: url("/gradient-dots.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}

@keyframes bounce {
  from {
    transform: translateY(0px) scale(1);
  }
  to {
    transform: translateY(-32px) scale(0.95);
  }
}
</style>