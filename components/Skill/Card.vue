<template>
  <div class="relative z-10">
    <div class="shadow-skillcard bg-white border border-gray-100 rounded-md w-full py-6 px-4">
      <h3>WordPress Development</h3>
      <p
        class="mt-3"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, cumque unde esse reprehenderit qui suscipit atque sit commodi, repellendus quos culpa, perferendis ipsum. Sint, excepturi quas recusandae provident dignissimos corrupti!</p>
      <div class="sm:flex items-center mt-3 justify-between">
        <div class="details flex">
          <p class="flex items-center">
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z"
              />
            </svg>
            From 60 mins.
          </p>
          <p class="ml-4 flex items-center">
            <svg
              class="mr-1"
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            From $30
          </p>
        </div>
        <Button class="mt-3 sm:mt-0" modifier="secondary" size="small" text="explore mentors" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Button: () => import("~/components/UI/Button.vue")
  }
};
</script>

<style lang="scss">
</style>