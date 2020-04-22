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

          <InputWithButton
            placeholder="What type of project do you have?"
            type="text"
            text="find a developer"
          >
            <svg class="w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
              />
            </svg>
          </InputWithButton>
          <div class="mt-6 hidden lg:block">
            <p class="flex items-center">
              Popular:
              <button
                class="leading-none py-2 px-5 rounded-md border border-black30 font-semibold text-black ml-2 text-sm focus:outline-none"
              >Wordpress</button>
              <button
                class="leading-none py-2 px-5 rounded-md border border-black30 font-semibold text-black ml-2 text-sm focus:outline-none"
              >New website</button>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="my-16 lg:-mt-12">
      <div class="container">
        <div class="text-center">
          <p class="text-lg">Our developers have experience in companies like</p>
          <div class="max-w-4xl mx-auto md:flex justify-between w-full">
            <img class="mt-10 mx-auto md:mx-0" src="/apple.svg" alt />
            <img class="mt-10 mx-auto md:mx-0" src="/hubspot.svg" alt />
            <img class="mt-10 mx-auto md:mx-0" src="/airbus.svg" alt />
            <img class="mt-10 mx-auto md:mx-0" src="/dekra.svg" alt />
          </div>
        </div>
      </div>
    </section>
    <section class="relative my-24 lg:my-40 pt-4">
      <img src="/dots.svg" style="top:8px;" alt class="hidden sm:block absolute right-0" />
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
    <section class="relative my-24 lg:my-40">
      <div class="container">
        <div class="text-center">
          <h2 class="mb-2">What can I achieve?</h2>
          <p
            class="subtitle max-w-xl mx-auto"
          >We all have things that we'd like to improve. Here are some to help you get started.</p>
        </div>
        <div class="sm:hidden -mx-2 mt-4">
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
              <slide v-for="n in 6" class="overflow-visible py-4 px-2">
                <SkillCard />
              </slide>
            </carousel>
          </client-only>
        </div>
        <div class="hidden sm:block mt-16">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SkillCard v-for="n in 6" />
          </div>
        </div>
      </div>
    </section>
    <section class="my-24 lg:my-40 relative">
      <img class="absolute left-0" style="top: -20px" src="/dots.svg" alt />
      <div class="container relative z-10">
        <div class="lg:flex">
          <div class="mx-auto lg:mx-0" style="max-width: 620px;width: 100%;height: 320px;">
            <iframe
              id="player"
              type="text/html"
              width="100%"
              height="100%"
              src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
              frameborder="0"
            ></iframe>
          </div>
          <div
            class="max-w-lg mx-auto mt-8 text-center lg:text-left lg:max-w-none lg:mx-0 flex-1 lg:ml-12 xl:ml-20 lg:mt-0"
          >
            <h2>New times require new ways of working</h2>
            <p
              class="subtitle mt-4"
            >Finding a developer is rare, expensive and difficult. We’re here to make opportunities available to our generation through development and conversation. Each one, helps one.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="my-24 lg:my-40 relative">
      <div class="container">
        <div class="text-center">
          <h2 class="mb-2">Don't take our word for it. Take theirs.</h2>
          <p class="subtitle">Unbiased comments from our community members.</p>
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
                <div
                  class="bg-white p-4 border border-gray-100 shadow-skillcard rounded-md relative"
                >
                  <div
                    class="top-right-overflow flex items-center justify-center absolute h-8 w-8 bg-brand-purple rounded-full text-white"
                  >
                    <img src="/quote.svg" alt />
                  </div>
                  <h4>WordPress development</h4>
                  <p
                    class="mt-2"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ab voluptas doloremque exercitationem velit eveniet alias voluptatibus saepe perspiciatis sunt labore, consequatur vitae mollitia ipsa minima laudantium vero quas adipisci!</p>
                  <div class="flex mt-6">
                    <div>
                      <span
                        class="rounded-full block h-20 w-20 bg-cover bg-no-repeat bg-center"
                        :style="`background-image:url(/avatar${n}.jpg);`"
                      ></span>
                    </div>
                    <div class="ml-4">
                      <p class="text-lg font-semibold">Ryan H.</p>
                      <p class="leading-6">Marketing Specialist</p>
                      <p class="leading-6">Telamerica</p>
                    </div>
                  </div>
                </div>
              </slide>
            </carousel>
          </client-only>
        </div>
      </div>
    </section>
    <section class="my-24 lg:my-40">
      <div class="container">
        <div class="flex flex-wrap justify-between items-center">
          <div
            class="max-w-md mx-auto text-center w-full mt-12 lg:max-w-none lg:mx-0 lg:text-left lg:mt-0 lg:flex-1 lg:mr-12"
          >
            <h2>Make money building web applications</h2>
            <p
              class="mt-6 subtitle"
            >Add an extra source of income by helping others to get better at what you already know. From where you are. At your pace.</p>
            <Button class="mt-8" modifier="primary" size="large" text="become a developer" />
          </div>
          <div class="order-first w-full lg:flex-1 lg:ml-12 lg:order-last">
            <img class="w-80 mx-auto lg:mx-0 lg:w-full" src="/cta.53f4bf63.png" alt />
          </div>
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
          <InputWithButton placeholder="Your email" type="email" text="sign up" />
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
    ProfileCard: () => import("~/components/Profile/Card.vue"),
    SkillCard: () => import("~/components/Skill/Card.vue"),
    InputWithButton: () => import("~/components/UI/InputWithButton.vue")
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