<template>
  <div class="container">
    <div class="w-full max-w-4xl mx-auto bg-white rounded-md center shadow-header">
      <div class="md:flex">
        <div
          class="flex-col items-center justify-center flex-1 hidden p-6 border-b md:flex xs:p-10 lg:p-16 md:items-start md:border-b-0 md:border-r"
        >
          <img src="/create-profile.svg" alt />
        </div>
        <div
          class="flex flex-col items-center justify-center flex-1 p-6 text-center xs:p-10 lg:p-16"
        >
          <div>
            <h4
              class="text-3xl font-semibold tracking-tighter text-black"
            >Let's create you a profile.</h4>
            <p class="mt-6">
              A full profile/bio will bring more eyes to your page
              <span class="text-black">😎</span>
            </p>
            <Button
              @click="$router.push('/create-profile/start')"
              class="mt-6"
              modifier="primary"
              size="small-wide"
              text="get started"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // middleware: "has-profile",
  transition: "auth",
  layout: "authentication",
};
</script>

<style lang="scss" scoped>
p {
  @apply text-black50;
}
</style>