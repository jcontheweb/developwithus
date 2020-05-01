<template>
  <div class="relative flex flex-col min-h-screen bg-right-top bg-no-repeat become-a-developer">
    <div class="py-16 pt-24 become-a-developer__hero lg:py-64">
      <div class="container">
        <div class="flex flex-col items-center">
          <h1 class="text-center text-white lg:text-left lg:text-black85">Become a developer</h1>
          <p
            class="mt-4 text-center text-white subtitle lg:text-left lg:text-black"
          >Make money building web applications</p>
          <Button modifier="primary" size="large" text="become a developer" class="mt-4" />
        </div>
      </div>
    </div>
    <section class="my-16 lg:-mt-12">
      <div class="container">
        <div class="text-center">
          <p class="text-lg">Our developers have experience in companies like</p>
          <div class="justify-between w-full max-w-4xl mx-auto md:flex">
            <img class="mx-auto mt-10 md:mx-0" src="/apple.svg" alt />
            <img class="mx-auto mt-10 md:mx-0" src="/hubspot.svg" alt />
            <img class="mx-auto mt-10 md:mx-0" src="/airbus.svg" alt />
            <img class="mx-auto mt-10 md:mx-0" src="/dekra.svg" alt />
          </div>
        </div>
      </div>
    </section>
    <section class="my-16 lg:my-32">
      <div class="container">
        <div class="flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
          <h2>What's in it for you?</h2>
          <div class="flex flex-col items-center justify-between w-full mt-24 lg:flex-row">
            <img class="w-full max-w-xs mb-5 lg:mb-0" src="/become-earn.png" alt />
            <div class="w-full max-w-sm text-center lg:text-left">
              <p class="mb-3 font-semibold subtitle">Earn</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque impedit similique dolores ullam praesentium ducimus quod iusto. Odit facilis quas iure numquam rerum assumenda labore quis nihil dolores. Facere!</p>
            </div>
          </div>
          <div class="flex flex-col items-center justify-between w-full mt-24 lg:flex-row">
            <div class="w-full max-w-sm text-center lg:text-left">
              <p class="mb-3 font-semibold subtitle">Learn</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque impedit similique dolores ullam praesentium ducimus quod iusto. Odit facilis quas iure numquam rerum assumenda labore quis nihil dolores. Facere!</p>
            </div>
            <img
              class="order-first w-full max-w-xs mb-5 lg:order-last lg:mb-0"
              src="/become-learn.png"
              alt
            />
          </div>
          <div class="flex flex-col items-center justify-between w-full mt-24 lg:flex-row">
            <img class="w-full max-w-xs mb-5 lg:mb-0" src="/become-connect.png" alt />
            <div class="w-full max-w-sm text-center lg:text-left">
              <p class="mb-3 font-semibold subtitle">Connect</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque impedit similique dolores ullam praesentium ducimus quod iusto. Odit facilis quas iure numquam rerum assumenda labore quis nihil dolores. Facere!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="my-16 lg:my-32">
      <div class="container">
        <h2 class="text-center">Become a developer in 3 steps</h2>
        <div class="grid-cols-3 gap-6 mt-16 lg:grid">
          <div class="mb-10 lg:mb-0">
            <img style="max-width: 270px;;height: 300px;" class="mx-auto mb-8" src="/become-create.png" alt />
            <div class="text-center">
              <p class="mb-2 text-xl font-semibold text-black85">Create your listing for free</p>
              <p>Tell the community what you can help with, without any signing up fees.</p>
            </div>
          </div>
          <div class="mb-10 lg:mb-0">
            <img style="max-width: 310px;height: 300px;" class="mx-auto mb-8" src="/become-decide.png" alt />
            <div class="text-center">
              <p class="mb-2 text-xl font-semibold text-black85">Decide on your technologies</p>
              <p>Choose your own schedule, prices, and connection preferences. We're there to help along the way.</p>
            </div>
          </div>
          <div class>
            <img style="max-width: 320px;height: 300px;" class="mx-auto mb-8" src="/become-welcome.png" alt />
            <div class="text-center">
              <p class="mb-2 text-xl font-semibold text-black85">Welcome your first client</p>
              <p>Once your listing is live, qualified clients can reach out and start a session consultancy.</p>
            </div>
          </div>
        </div>
        <div class="mt-16 text-center">
          <Button modifier="primary" size="large" text="start working now"></Button>
        </div>
      </div>
    </section>
    <section class="mt-16">
      <PopularQuestions></PopularQuestions>
    </section>
    <NewsletterCapture />
  </div>
</template>

<script>
export default {
  components: {
    PopularQuestions: () =>
      import("~/components/Questions/PopularQuestions.vue"),
    NewsletterCapture: () => import("~/components/NewsletterCapture.vue")
  }
};
</script>

<style scoped lang="scss">
.become-a-developer {
  background-size: contain;

  @media (min-width: 1024px) {
    background-image: url("/header.00d5bd99.svg");
  }

  &__hero {
    background-image: linear-gradient(145deg, #ff6236 21%, #ff1081);

    @media (min-width: 1024px) {
      background-image: none;
    }
  }
}

.accordion-trigger:last-of-type {
  @apply border-b;
}
</style>