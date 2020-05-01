<template>
  <div class="relative z-10">
    <div class="w-full px-4 py-6 bg-white border border-gray-100 rounded-md shadow-skillcard">
      <h3>WordPress Development</h3>
      <p
        class="mt-3"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, cumque unde esse reprehenderit qui suscipit atque sit commodi, repellendus quos culpa, perferendis ipsum. Sint, excepturi quas recusandae provident dignissimos corrupti!</p>
      <div class="items-center justify-between mt-3 sm:flex">
        <div class="flex details">
          <p class="flex items-center">
            <svg
              class="w-4 h-4 mr-2 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z"
              />
            </svg>
            From 60 mins.
          </p>
          <p class="flex items-center ml-4">
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
};
</script>

<style lang="scss">
</style>