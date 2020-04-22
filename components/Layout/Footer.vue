<template>
  <footer class="py-12">
    <div class="container">
      <div class="flex flex-wrap text-center max-w-md mx-auto lg:text-left lg:max-w-none lg:mx-0 lg:flex-no-wrap lg:justify-between">
        <div class="w-full flex-1 order-last mt-10 lg:mt-0 lg:w-auto lg:order-first">
          <p class="font-semibold text-2xl tracking-wide text-offblack">Developwithus</p>
          <p class="font-semibold text-lg mt-4">Welcome to your best self.</p>
          <p
            class="text-sm mt-4"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, necessitatibus maxime aspernatur tenetur perspiciatis provident nam reiciendis ullam laborum consequuntur totam suscipit, quisquam aut, voluptate mollitia dolorem odit corrupti sunt.</p>
          <p class="text-xs mt-4">© 2020, Developwithus. All Rights Reserved.</p>
        </div>
        <div class="lg:flex justify-between lg:ml-24 w-full lg:w-auto">
          <div>
            <p class="font-bold mb-2">Developwithus</p>
            <nuxt-link class="footer-link text-sm mb-2" to="/">Blog</nuxt-link>
            <nuxt-link class="footer-link text-sm mb-2" to="/">Blog</nuxt-link>
            <nuxt-link class="footer-link text-sm mb-2" to="/">Blog</nuxt-link>
            <nuxt-link class="footer-link text-sm mb-2" to="/">Blog</nuxt-link>
            <nuxt-link class="footer-link text-sm" to="/">Blog</nuxt-link>
          </div>
          <div class="mt-10 lg:mt-0 lg:ml-24">
            <div>
              <p class="font-bold mb-2">Developers</p>
              <nuxt-link class="footer-link text-sm" to="/">Become a developer</nuxt-link>
            </div>
            <div class="mt-10 lg:mt-8">
              <p class="font-bold mb-2">Hiring</p>
              <nuxt-link class="footer-link text-sm mb-2" to="/">Find a developer</nuxt-link>
              <nuxt-link class="footer-link text-sm" to="/">Upgrade</nuxt-link>
            </div>
          </div>
          <div class="mt-10 lg:mt-0 lg:ml-24">
            <div>
              <p class="font-bold mb-2">Get in Touch</p>
              <a class="footer-link text-sm" href="mailto:hello@developwith.us">hello@developwith.us</a>
              <div class="mt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  class="social text-black hover:text-brand-purple hover:shadow-lg focus:outline-none mr-2"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    size="15"
                    height="15"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  class="social text-black hover:text-brand-purple hover:shadow-lg focus:outline-none"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    size="15"
                    height="15"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.footer-link {
  @apply transition duration-300 block;
  color: rgba(0, 0, 0, 0.7);

  &:hover {
    @apply text-brand-purple;
  }
}

.social {
  @apply inline-flex items-center justify-center leading-none rounded-full border border-indigo-100 p-1 transition duration-300;
  height: 36px;
  width: 36px;
}
</style>