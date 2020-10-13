<template>
  <div>
    <MegaMenu />
    <div class="flex items-center justify-between min-h-screen bg-indigo-900">
      <div
        class="flex flex-col items-center w-full max-w-3xl py-16 mx-auto rounded-md shadow-lg bg-temp-gray"
      >
        <div class="relative flex justify-between w-full max-w-md mx-auto">
          <div
            class="absolute inset-x-0 h-1 rounded-full bg-black10"
            style="top: 50%; transform: translateY(-50%);"
          ></div>
          <div
            class="absolute left-0 h-1 bg-indigo-500 rounded-full opacity-75"
            style="top: 50%; transform: translateY(-50%); transition: all 500ms ease;"
            :style="`width: ${step * 33}%`"
          ></div>
          <div class="relative pr-2 bg-temp-gray">
            <button
              style="transition: all 500ms ease;"
              @click="step = 1"
              :class="[step >= 1 ? 'bg-indigo-500 text-gray-100' : 'bg-temp-gray text-black50']"
              class="flex items-center justify-center w-10 h-10 text-lg font-semibold leading-none transition duration-500 rounded-full focus:outline-none soft-ui-shadow-sm"
            >1</button>
          </div>
          <div class="relative px-2 bg-temp-gray">
            <button
              style="transition: all 500ms ease;"
              @click="step = 2"
              :class="[step >= 2 ? 'bg-indigo-500 text-gray-100' : 'bg-temp-gray text-black50']"
              class="flex items-center justify-center w-10 h-10 text-lg font-semibold leading-none transition duration-500 rounded-full focus:outline-none soft-ui-shadow-sm"
            >2</button>
          </div>
          <div class="relative pl-2 bg-temp-gray">
            <button
              style="transition: all 500ms ease;"
              @click="step = 3"
              :class="[step >= 3 ? 'bg-indigo-500 text-gray-100' : 'bg-temp-gray text-black50']"
              class="flex items-center justify-center w-10 h-10 text-lg font-semibold leading-none transition duration-500 rounded-full focus:outline-none soft-ui-shadow-sm"
            >3</button>
          </div>
        </div>
        <div class="max-w-lg mx-auto mt-16 text-center">
          <p class="text-lg font-semibold">Welcome Data Studio</p>
          <p
            class="mt-4"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eligendi aspernatur ut qui, minima dolor expedita. Quibusdam laudantium numquam consequuntur aspernatur, dolorum dolores eveniet repudiandae ex delectus asperiores sit deleniti.</p>
        </div>
        <div class="mt-12">
          <button
            class="px-12 py-4 font-semibold leading-none text-white bg-indigo-500 rounded soft-ui-shadow"
          >Get started</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    MegaMenu: () => import("~/components/MegaMenu.vue")
  },
  layout: "sink",
  data: () => ({
    step: 1
  })
};
</script>

<style lang="scss">
.bg-temp-gray {
  background: #eceff8;
}

.soft-ui-shadow {
  box-shadow: 9px 9px 9px 0 rgba(0, 0, 0, 0.08),
    -9px -9px 9px 0 rgba(255, 255, 255, 1);
  transition: box-shadow 300ms ease;

  &:focus {
    box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.08),
      -3px -3px 3px 0 rgba(255, 255, 255, 1);
  }
}

.soft-ui-shadow-sm {
  box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.08),
    -6px -6px 12px 0 rgba(255, 255, 255, 0.8);
  transition: box-shadow 300ms ease;

  &:focus {
    box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.08),
      -3px -3px 3px 0 rgba(255, 255, 255, 1);
  }
}
</style>